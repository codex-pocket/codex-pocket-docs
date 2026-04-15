---
title: Use Branches, Skills, and Exec
description: This page explains when to use branch switching, Skills, and Exec from the iPhone.
---

For many cases, `Projects` and `Threads` are enough. Once you get used to the flow, though, you will often want to choose more deliberately between branch switching, `Skills`, and `Exec`. This page is the quick guide for those three.

## Switch branches

Branch actions live under the branch indicator near the top after you open a `Project`.

## What you can do

- check the current branch
- switch to an existing local branch
- create a new branch and switch to it immediately

When creating a new branch, you can often choose a prefix such as `feature/` or `bugfix/`, then type only the tail.

## Things to remember

- branch actions are unavailable when the workspace is not managed by Git
- switching branches reloads the `Thread` list and related context for that branch
- when you want to try something on another branch first, the iPhone is enough to switch the entry point without returning to the Mac

## Use Skills

Skills are reusable procedures enabled in that workspace. Open them from `Skills` in the `+` menu.

## Basic flow

1. Open `Skills` from `+`.
2. Choose the Skill you want.
3. Add a little more context in `Composer` if needed.
4. Send it.

The selected Skill appears as a chip above `Composer`, and you can remove it on the spot if you change your mind.

## When Skills are a good fit

- routine checks that follow a similar flow every time
- repo-specific checks
- requests where you do not want to restate the same procedure repeatedly

If the workspace has no Skills, the list is simply empty. In that case, plain `Composer` use is enough.

## Use Exec

`Exec` is the entry point for one-off execution without switching away from the current `Thread`. You can open it from the `+` menu or from `...` in the upper-right of the thread screen.

## When Exec is a good fit

- you want one quick check
- you want to try something separate without cluttering the current `Thread`
- you want to inspect logs or file contents as a one-shot run

`Exec` has its own input and output area, and the result streams in place. You can also adjust the model, approval mode, reasoning level, and image attachments when needed.

## Thread versus Exec

- use `Thread` for continuing conversation and ongoing work
- use `Exec` for one-off checks and experiments

If you are unsure, decide based on whether you want to keep the result as part of the conversation history.

## When you only want to branch the conversation

If you want to split the conversation flow, not the Git branch, use `Fork`. It creates a copy of the current `Thread` so you can try another direction while preserving the original.

- keep the current context while trying an alternative
- compare without breaking the original `Thread`

Branches and `Fork` are different tools. Branches change the code workspace. `Fork` changes only the conversation path.

