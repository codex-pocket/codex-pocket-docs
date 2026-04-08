# CodexPocket Thread Composer Input Guidelines

- 文書名: CodexPocket Thread Composer Input Guidelines
- 最終更新: 2026-04-08
- 目的: iPhone アプリの thread composer における入力フォーカスとキーボード表示/解除の規範動作を固定する
- 位置づけ: 本文書は thread composer の input UX に関する正本とする

## 1. この文書が解決すること

thread composer は、入力を始める瞬間と、入力を終えて transcript を読む瞬間の切り替えが曖昧だと、操作が二段階化してストレスになる。

CodexPocket では次を不具合として扱う。

- 1 回目の tap で caret は出るがキーボードが出ず、2 回目の tap が必要になる
- turn 送信後もキーボードが残り、assistant の出力を読む面に戻れない
- composer 外を触っても編集状態が続き、画面全体の操作に戻れない

## 2. Apple の一次情報から採る原則

Apple の text input と scroll interaction の一次情報を踏まえ、CodexPocket は次を採用する。

- text object は、ユーザーがその object を tap した時点で first responder になり、キーボードを出す
- editing を終える導線は、別の操作対象へ移る時点で明示的に用意する
- scrollable content では system 提供の keyboard dismissal を優先し、drag と keyboard hide を連続した挙動として扱う
- 既存の interactive control の上に別の tap 制御を重ねて responder の責務を曖昧にしない

## 3. CodexPocket の規範動作

### 3.1 フォーカス獲得

- composer の rounded field 全体を text input の hit target とする
- 1 回目の tap で `UITextView` 自身が first responder になる
- `tap to arm` のような中間状態は作らない
- placeholder や padding のために、tap が `UITextView` 以外へ吸われる構成を作らない

### 3.2 フォーカス解除

- send button を押した時点で composer は編集状態を終え、キーボードを閉じる
- transcript、header、背景など composer 外を tap したときも編集状態を終える
- transcript を scroll したときは interactive keyboard dismissal を使い、drag の流れでキーボードを閉じる
- sheet や source preview の表示前にも composer の編集状態を終える

### 3.3 実装上の判断基準

- focus の source of truth は `UITextView` の first responder 状態に寄せる
- SwiftUI 側は「focus を要求/解除する state」を持ってよいが、tap 自体を別 gesture で代理確定しない
- keyboard を閉じる目的で app 全体へ広く `sendAction` を投げるより、対象 text view の responder state を更新する
- 送信後は「続きを書かせる」より「結果を読む」を優先し、再編集は必要時に再度 tap して始める

## 4. 今回の実装方針

- composer field の horizontal inset を `UITextView.textContainerInset` に寄せ、field 全体を native text input の hit target にする
- `UITextView` を包む SwiftUI 側の tap gesture は外し、first tap の focus を native behavior に戻す
- composer 外 tap と send は共通の dismissal path に集約する
- transcript `ScrollView` には `.scrollDismissesKeyboard(.interactively)` を適用する

## 5. 参考資料

Apple:

- [Manage Text Fields and Text Views](https://developer.apple.com/library/archive/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/ManageTextFieldTextViews.html)
- [scrollDismissesKeyboard(_:)](https://developer.apple.com/documentation/swiftui/view/scrolldismisseskeyboard(_:))
- [UIScrollView.KeyboardDismissMode](https://developer.apple.com/documentation/uikit/uiscrollview/keyboarddismissmode)
- [Direct and reflect focus in SwiftUI](https://developer.apple.com/videos/play/wwdc2021/10023/)

## 6. CodexPocket への直接的な示唆

thread composer を custom tap gesture で「まず編集可能状態にする」設計は、native text input の responder 遷移と競合しやすい。CodexPocket では今後、入力欄は native text input を直接 tap して開く構造を維持し、send / outside tap / scroll で確実に閉じる。
