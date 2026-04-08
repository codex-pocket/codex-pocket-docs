# CodexPocket Touch Interaction Guidelines

- 文書名: CodexPocket Touch Interaction Guidelines
- 最終更新: 2026-04-06
- 目的: iPhone 側 UI、とくに thread sidebar の touch interaction を設計する際の判断基準を固定する
- 位置づけ: 本文書は CodexPocket における操作入力の正本とする

## 1. 何を解決する文書か

touch UI では、指が画面に触れた瞬間に意図が確定するわけではない。人は押しかけてから、

- そのまま確定する
- 少し動かして取り消す
- scroll や swipe に切り替える
- 長押しで文脈操作を出す

といった行動を取る。

そのため CodexPocket では、「指が離れたら常に tap 成立」とは扱わない。tap は「primary action を意図した接触が、他 gesture に昇格せず、許容範囲内で終了した場合」にだけ成立するものとして扱う。

## 2. 基本原則

### 2.1 Tap は pre-commit と commit を分ける

- `touch down` / `press began` は未確定状態である
- この段階では pressed feedback だけを出し、画面遷移や destructive action は確定しない
- `touch up inside` 相当の条件を満たしたときだけ primary action を確定する

要するに、ユーザーは押してから考え直せる必要がある。

### 2.2 取り消しは movement threshold で扱う

- 指の揺れを 0 と見なしてはいけない
- 一定距離を超えて動いたら tap candidate を破棄する
- 横移動が閾値を超えたら swipe 候補へ移す
- 縦移動が閾値を超えたら scroll 意図として tap 候補を破棄する

Apple も Android も、tap と movement gesture を分離するために許容移動量の概念を持つ。

### 2.3 Long press は cancel の代用品ではない

- long press の主用途は context menu や補助 action の起点である
- primary action の誤発火回避は tap の成立条件で扱う
- 長押しを「押さないための escape hatch」として前提化しない

ユーザーが「やっぱり違う」と思ったときの escape は、まず drag away / movement cancellation で吸収する。

### 2.4 競合する gesture は同時成功させない

- select と swipe のように意味が衝突する gesture は排他的に扱う
- 同じ接触系列で `tap` と `horizontal drag` が両方成功する構成は避ける
- gesture 合成は便利でも、意味が競合するなら state machine として整理する

### 2.5 よく使う操作ほど simple gesture に寄せる

- thread を開く、戻る、削除を出す、といった高頻度操作は単純で予測可能な gesture にする
- swipe しか入口がない destructive action は避け、代替導線も用意する
- accessibility 上も、主要操作は swipe のみには依存しない

## 3. CodexPocket の設計ルール

### 3.1 Thread row の規範動作

thread sidebar row は次の state machine で扱う。

1. `idle`
2. `pressedCandidate`
3. `horizontalSwipe`
4. `verticalScroll`
5. `longPressContext` 必要な場合のみ

各 state の振る舞い:

- `touch down`: `pressedCandidate` へ入る。見た目の pressed feedback のみ出す
- 許容距離内で `touch up`:
  row が通常状態なら thread を選択する
  row が destructive action reveal 済みなら、まず reveal を閉じる
- 横移動が閾値超過:
  `horizontalSwipe` へ遷移し、tap candidate を破棄する
- 縦移動が閾値超過:
  `verticalScroll` へ遷移し、tap candidate を破棄する
- long press 成立:
  必要なら context menu や secondary action を開く
  tap の代替確定手段にはしない
- `cancel`:
  pressed feedback を消し、何も確定しない

### 3.2 Sidebar thread row に対する具体ルール

- thread row の primary action は thread を開くこと
- swipe left の primary purpose は delete affordance を reveal すること
- 同一接触で `open thread` と `reveal delete` の両方を成立させない
- delete が reveal 済みのときは accidental delete を避けるため、row 本体への first tap は close に使う
- delete 実行は明示 tap のみで確定し、swipe 完了だけでは削除しない
- swipe の見た目は同じ接触系列の中で連続的に返し、削除 affordance を出すつもりで横移動した指に row が遅れて追い付く状態を作らない
- swipe を認識した後は row と指の相対位置を保ち、one-to-one tracking を崩さない

### 3.3 実装方針

- `Button` の標準挙動を使える場面では `Button` を優先する
- ただし swipe と競合する row では、`Button` と `simultaneousGesture` を安易に重ねず、gesture の優先順位と排他条件を明示する
- 実装は「見た目の pressed 状態」と「action の確定」を分離する
- swipe では `hysteresis` と最終判定のしきい値を持ってよいが、見た目の追従まで同じしきい値で止めない
- 一時的な workaround ではなく、row interaction 全体を state machine として表現する

## 4. アンチパターン

- 指が離れたら常に tap とみなす
- row selection と row swipe を同一系列で同時成功させる
- long press を silent cancel の前提にする
- destructive action を swipe のみで到達可能にする
- scroll 中の微妙な接触終了を tap として処理する

## 5. この判断の根拠

Apple / Android の一次情報を要約すると、共通する考え方は次のとおり。

- tap は press と同義ではなく、接触系列が成立条件を満たしたときに認識される
- long press には最大移動量や最小継続時間がある
- movement-based gesture と non-movement gesture を分けるために閾値を持つ
- swipe は hysteresis 到達後に認識してよいが、認識後は content と touch を one-to-one で追従させるべきである
- continuous feedback を返し、gesture 終了時だけ反応する実装を避ける
- cancel は正規の入力状態であり、実装側は cancel を前提に扱うべきである
- long press は context-sensitive action の入口として使うのが自然である

## 6. 参考資料

Apple:

- [SwiftUI Gestures](https://developer.apple.com/documentation/swiftui/gestures/)
- [Designing Fluid Interfaces (WWDC18)](https://developer.apple.com/videos/play/wwdc2018/803/)
- [Handling long-press gestures](https://developer.apple.com/documentation/uikit/handling-long-press-gestures)
- [UILongPressGestureRecognizer.allowableMovement](https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer/allowablemovement)
- [Human Interface Guidelines: Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [Human Interface Guidelines: Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

Android:

- [Tap and press](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press)
- [Understand gestures](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures)
- [Track touch and pointer movements](https://developer.android.com/training/gestures/movement)
- [Manage touch events in a ViewGroup](https://developer.android.com/training/gestures/viewgroup)
- [ViewConfiguration](https://developer.android.com/reference/android/view/ViewConfiguration)
- [Handle multi-touch gestures](https://developer.android.com/training/gestures/multi)

## 7. CodexPocket への直接的な示唆

thread sidebar row で、tap 用 `Button` と swipe 用 `DragGesture` を同時成功可能な形で重ねると、「少し横に動かしたが選択も発火した」という事故を生みやすい。

CodexPocket では今後、thread row interaction を次の基準で設計する。

- select は `up inside` 相当でのみ確定する
- swipe 開始後は select を確定させない
- scroll 意図が見えた時点で select 候補を破棄する
- long press は必要なら context action にだけ使う

この原則に反する実装は、本ドキュメントに照らして修正対象とする。
