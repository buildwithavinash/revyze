const gitAdvancedWorkflowsQuestions = [
  {
    id: "git-advanced-workflows-q-001",
    quizId: "quiz_git_advanced_workflows",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git stash` primarily do?",
    options: [
      { id: "A", text: "Pushes local commits to GitHub" },
      { id: "B", text: "Temporarily stores uncommitted changes so you can work with a clean working tree" },
      { id: "C", text: "Deletes all uncommitted changes permanently" },
      { id: "D", text: "Creates a new remote repository" }
    ],
    correctOptionId: "B",
    explanation: "`git stash` temporarily saves eligible working-tree and index changes so you can return to a clean working tree without committing them.",
    tags: ["stash", "working-tree"]
  },

  {
    id: "git-advanced-workflows-q-002",
    quizId: "quiz_git_advanced_workflows",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command applies the most recent stash while keeping it in the stash list?",
    options: [
      { id: "A", text: "git stash apply" },
      { id: "B", text: "git stash restore" },
      { id: "C", text: "git stash use" },
      { id: "D", text: "git stash replay" }
    ],
    correctOptionId: "A",
    explanation: "`git stash apply` reapplies the stash but does not remove it from the stash list.",
    tags: ["stash", "stash-apply"]
  },

  {
    id: "git-advanced-workflows-q-003",
    quizId: "quiz_git_advanced_workflows",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "How does `git stash pop` differ from `git stash apply`?",
    options: [
      { id: "A", text: "pop creates a new branch automatically" },
      { id: "B", text: "pop applies the stash and normally removes it from the stash list if successful" },
      { id: "C", text: "pop permanently deletes the working tree" },
      { id: "D", text: "pop only works with remote branches" }
    ],
    correctOptionId: "B",
    explanation: "`git stash pop` applies the stash and then drops it from the stash list if the application succeeds.",
    tags: ["stash", "stash-pop"]
  },

  {
    id: "git-advanced-workflows-q-004",
    quizId: "quiz_git_advanced_workflows",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command lists your saved stashes?",
    options: [
      { id: "A", text: "git stash show-all" },
      { id: "B", text: "git saved" },
      { id: "C", text: "git stash list" },
      { id: "D", text: "git stash history" }
    ],
    correctOptionId: "C",
    explanation: "`git stash list` displays the stash entries currently stored in the repository.",
    tags: ["stash", "stash-list"]
  },

  {
    id: "git-advanced-workflows-q-005",
    quizId: "quiz_git_advanced_workflows",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git stash drop` do?",
    options: [
      { id: "A", text: "Deletes a selected stash entry" },
      { id: "B", text: "Deletes the current branch" },
      { id: "C", text: "Removes all Git history" },
      { id: "D", text: "Deletes the remote repository" }
    ],
    correctOptionId: "A",
    explanation: "`git stash drop` removes a specified stash entry from the stash list.",
    tags: ["stash", "stash-drop"]
  },

  {
    id: "git-advanced-workflows-q-006",
    quizId: "quiz_git_advanced_workflows",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git stash clear` do?",
    options: [
      { id: "A", text: "Removes all stash entries" },
      { id: "B", text: "Deletes the current branch" },
      { id: "C", text: "Resets the repository to HEAD" },
      { id: "D", text: "Clears the Git index only" }
    ],
    correctOptionId: "A",
    explanation: "`git stash clear` removes all entries from the stash list.",
    tags: ["stash", "stash-clear"]
  },

  {
    id: "git-advanced-workflows-q-007",
    quizId: "quiz_git_advanced_workflows",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common reason to use `git stash`?",
    options: [
      { id: "A", text: "You want to temporarily switch tasks without committing unfinished work" },
      { id: "B", text: "You want to permanently publish unfinished work" },
      { id: "C", text: "You want to delete your feature branch" },
      { id: "D", text: "You want to rewrite GitHub's repository history" }
    ],
    correctOptionId: "A",
    explanation: "Stashing is useful when you need a clean working tree for another task while preserving unfinished local changes for later.",
    tags: ["stash", "workflow"]
  },

  {
    id: "git-advanced-workflows-q-008",
    quizId: "quiz_git_advanced_workflows",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "By default, does `git stash` necessarily include every untracked file?",
    options: [
      { id: "A", text: "Yes, all untracked files are always included" },
      { id: "B", text: "No, untracked files generally require an option such as `-u` to be included" },
      { id: "C", text: "Only binary files are included" },
      { id: "D", text: "Only files inside node_modules are included" }
    ],
    correctOptionId: "B",
    explanation: "By default, stash does not include untracked files. `git stash -u` or `--include-untracked` includes them.",
    tags: ["stash", "untracked-files"]
  },

  {
    id: "git-advanced-workflows-q-009",
    quizId: "quiz_git_advanced_workflows",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is `git stash -u` useful for?",
    options: [
      { id: "A", text: "Including untracked files in the stash" },
      { id: "B", text: "Deleting untracked files" },
      { id: "C", text: "Pushing the stash to a remote" },
      { id: "D", text: "Creating a Git tag" }
    ],
    correctOptionId: "A",
    explanation: "`-u` means `--include-untracked`, causing untracked files to be included in the stash.",
    tags: ["stash", "untracked-files"]
  },

  {
    id: "git-advanced-workflows-q-010",
    quizId: "quiz_git_advanced_workflows",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is cherry-picking in Git?",
    options: [
      { id: "A", text: "Selecting a specific commit and applying its changes onto the current branch" },
      { id: "B", text: "Deleting a specific commit from every branch" },
      { id: "C", text: "Creating a GitHub fork" },
      { id: "D", text: "Merging every branch into main" }
    ],
    correctOptionId: "A",
    explanation: "`git cherry-pick` takes the changes introduced by one or more existing commits and applies them as new commits on the current branch.",
    tags: ["cherry-pick", "commits"]
  },

  {
    id: "git-advanced-workflows-q-011",
    quizId: "quiz_git_advanced_workflows",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command cherry-picks a commit identified by `abc1234`?",
    options: [
      { id: "A", text: "git apply abc1234" },
      { id: "B", text: "git cherry-pick abc1234" },
      { id: "C", text: "git commit --pick abc1234" },
      { id: "D", text: "git merge --single abc1234" }
    ],
    correctOptionId: "B",
    explanation: "`git cherry-pick <commit>` applies the changes introduced by the specified commit onto the current branch.",
    tags: ["cherry-pick"]
  },

  {
    id: "git-advanced-workflows-q-012",
    quizId: "quiz_git_advanced_workflows",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might cherry-picking be useful?",
    options: [
      { id: "A", text: "To selectively bring one useful fix from another branch without merging the entire branch" },
      { id: "B", text: "To automatically rewrite every branch" },
      { id: "C", text: "To remove all merge conflicts" },
      { id: "D", text: "To create a new Git repository" }
    ],
    correctOptionId: "A",
    explanation: "Cherry-picking is useful when you need a specific commit's change without bringing the complete branch history into the current branch.",
    tags: ["cherry-pick", "workflow"]
  },

  {
    id: "git-advanced-workflows-q-013",
    quizId: "quiz_git_advanced_workflows",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens to the commit ID when a commit is cherry-picked?",
    options: [
      { id: "A", text: "It always remains identical" },
      { id: "B", text: "The change is normally recorded as a new commit with a different ID" },
      { id: "C", text: "The commit becomes a tag" },
      { id: "D", text: "The original commit is deleted" }
    ],
    correctOptionId: "B",
    explanation: "Cherry-pick creates a new commit containing the selected change, so its commit ID normally differs from the original.",
    tags: ["cherry-pick", "commit-hash"]
  },

  {
    id: "git-advanced-workflows-q-014",
    quizId: "quiz_git_advanced_workflows",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What can happen if the cherry-picked commit conflicts with the current branch?",
    options: [
      { id: "A", text: "Git may stop and require you to resolve the conflict before continuing" },
      { id: "B", text: "Git automatically deletes both branches" },
      { id: "C", text: "Git always chooses the oldest version" },
      { id: "D", text: "GitHub automatically resolves the code" }
    ],
    correctOptionId: "A",
    explanation: "Cherry-picking performs a change integration operation, so incompatible changes can result in conflicts requiring manual resolution.",
    tags: ["cherry-pick", "conflicts"]
  },

  {
    id: "git-advanced-workflows-q-015",
    quizId: "quiz_git_advanced_workflows",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "After resolving a cherry-pick conflict and staging the resolved files, which command continues the operation?",
    options: [
      { id: "A", text: "git cherry-pick --continue" },
      { id: "B", text: "git cherry-pick --finish" },
      { id: "C", text: "git commit --cherry-continue" },
      { id: "D", text: "git merge --continue" }
    ],
    correctOptionId: "A",
    explanation: "After resolving and staging conflicts during a cherry-pick, `git cherry-pick --continue` resumes the operation.",
    tags: ["cherry-pick", "conflicts"]
  },

  {
    id: "git-advanced-workflows-q-016",
    quizId: "quiz_git_advanced_workflows",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command aborts an in-progress cherry-pick?",
    options: [
      { id: "A", text: "git cherry-pick --stop" },
      { id: "B", text: "git cherry-pick --abort" },
      { id: "C", text: "git abort cherry-pick" },
      { id: "D", text: "git reset --cherry-abort" }
    ],
    correctOptionId: "B",
    explanation: "`git cherry-pick --abort` cancels the current cherry-pick operation and attempts to restore the previous state.",
    tags: ["cherry-pick", "abort"]
  },

  {
    id: "git-advanced-workflows-q-017",
    quizId: "quiz_git_advanced_workflows",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is `git reset` primarily used for?",
    options: [
      { id: "A", text: "Moving the current branch reference and optionally changing the index and working tree" },
      { id: "B", text: "Creating a GitHub pull request" },
      { id: "C", text: "Downloading a remote repository" },
      { id: "D", text: "Creating Git hooks" }
    ],
    correctOptionId: "A",
    explanation: "`git reset` moves the current branch reference to a specified commit and, depending on the mode, can also update the index and working tree.",
    tags: ["reset", "history"]
  },

  {
    id: "git-advanced-workflows-q-018",
    quizId: "quiz_git_advanced_workflows",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git reset --soft HEAD~1` do?",
    options: [
      { id: "A", text: "Deletes the previous commit and discards its changes" },
      { id: "B", text: "Moves HEAD back one commit while keeping the changes staged" },
      { id: "C", text: "Deletes all untracked files" },
      { id: "D", text: "Creates a revert commit" }
    ],
    correctOptionId: "B",
    explanation: "`--soft` moves the branch reference while leaving the index and working tree unchanged, so the undone commit's changes remain staged.",
    tags: ["reset", "soft-reset"]
  },

  {
    id: "git-advanced-workflows-q-019",
    quizId: "quiz_git_advanced_workflows",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git reset --mixed HEAD~1` generally do?",
    options: [
      { id: "A", text: "Moves HEAD back while leaving the changes in the working tree but unstaging them" },
      { id: "B", text: "Creates a new commit that reverses the old one" },
      { id: "C", text: "Deletes the working tree changes automatically" },
      { id: "D", text: "Pushes the reset to GitHub" }
    ],
    correctOptionId: "A",
    explanation: "`--mixed` resets the branch and index while leaving working-tree changes intact but unstaged.",
    tags: ["reset", "mixed-reset"]
  },

  {
    id: "git-advanced-workflows-q-020",
    quizId: "quiz_git_advanced_workflows",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the major danger of `git reset --hard`?",
    options: [
      { id: "A", text: "It can discard tracked working-tree and index changes that are not preserved elsewhere" },
      { id: "B", text: "It always deletes the remote repository" },
      { id: "C", text: "It automatically creates a pull request" },
      { id: "D", text: "It prevents Git from making future commits" }
    ],
    correctOptionId: "A",
    explanation: "`--hard` updates the branch, index, and working tree to the target commit, potentially discarding local tracked changes.",
    tags: ["reset", "hard-reset", "data-loss"]
  },

  {
    id: "git-advanced-workflows-q-021",
    quizId: "quiz_git_advanced_workflows",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When is `git revert` generally preferred over reset for a published branch?",
    options: [
      { id: "A", text: "When you want to undo a change while preserving the existing shared history" },
      { id: "B", text: "When you want to erase the branch's history" },
      { id: "C", text: "When you want to delete the remote" },
      { id: "D", text: "When you want to remove Git metadata" }
    ],
    correctOptionId: "A",
    explanation: "`git revert` creates a new commit that reverses an earlier commit, making it appropriate for preserving shared history.",
    tags: ["revert", "reset", "shared-history"]
  },

  {
    id: "git-advanced-workflows-q-022",
    quizId: "quiz_git_advanced_workflows",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git revert HEAD` generally do?",
    options: [
      { id: "A", text: "Deletes the HEAD commit from history" },
      { id: "B", text: "Creates a new commit that reverses the changes introduced by HEAD" },
      { id: "C", text: "Moves HEAD to the parent without creating a commit" },
      { id: "D", text: "Stashes the HEAD commit" }
    ],
    correctOptionId: "B",
    explanation: "`git revert` records an inverse change as a new commit rather than removing the original commit.",
    tags: ["revert"]
  },

  {
    id: "git-advanced-workflows-q-023",
    quizId: "quiz_git_advanced_workflows",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement best distinguishes reset from revert?",
    options: [
      { id: "A", text: "Reset can move a branch reference and rewrite local history; revert creates a new commit that undoes an earlier change" },
      { id: "B", text: "Reset only works with remote branches; revert only works locally" },
      { id: "C", text: "They always perform identical operations" },
      { id: "D", text: "Revert permanently deletes the target commit" }
    ],
    correctOptionId: "A",
    explanation: "Reset changes where the branch points and can alter index/worktree state, whereas revert preserves the original history and adds an inverse commit.",
    tags: ["reset", "revert"]
  },

  {
    id: "git-advanced-workflows-q-024",
    quizId: "quiz_git_advanced_workflows",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git reset HEAD file.js` commonly do when no mode is specified?",
    options: [
      { id: "A", text: "Deletes file.js" },
      { id: "B", text: "Unstages file.js while keeping its working-tree changes" },
      { id: "C", text: "Reverts file.js from GitHub" },
      { id: "D", text: "Commits file.js automatically" }
    ],
    correctOptionId: "B",
    explanation: "With the default mixed behavior, resetting a path to HEAD removes it from the index while leaving the working-tree content unchanged.",
    tags: ["reset", "unstage"]
  },

  {
    id: "git-advanced-workflows-q-025",
    quizId: "quiz_git_advanced_workflows",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a Git hook?",
    options: [
      { id: "A", text: "A script that can run automatically in response to specific Git events" },
      { id: "B", text: "A remote branch name" },
      { id: "C", text: "A special type of commit" },
      { id: "D", text: "A GitHub issue template" }
    ],
    correctOptionId: "A",
    explanation: "Git hooks are scripts triggered by specific Git operations, such as committing or receiving pushed changes.",
    tags: ["git-hooks", "automation"]
  },

  {
    id: "git-advanced-workflows-q-026",
    quizId: "quiz_git_advanced_workflows",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Where are local Git hooks typically stored?",
    options: [
      { id: "A", text: ".git/hooks" },
      { id: "B", text: ".github/hooks" },
      { id: "C", text: `hooks/ at the project root by default` },
      { id: "D", text: "node_modules/hooks" }
    ],
    correctOptionId: "A",
    explanation: "Repository-specific Git hooks are typically located inside `.git/hooks`.",
    tags: ["git-hooks", "git-directory"]
  },

  {
    id: "git-advanced-workflows-q-027",
    quizId: "quiz_git_advanced_workflows",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a `pre-commit` hook commonly used for?",
    options: [
      { id: "A", text: "Running checks such as formatting, linting, or validation before a commit is created" },
      { id: "B", text: "Deploying the repository after a push" },
      { id: "C", text: "Downloading dependencies from GitHub" },
      { id: "D", text: "Deleting old branches" }
    ],
    correctOptionId: "A",
    explanation: "A pre-commit hook can run local checks before Git creates the commit, helping catch issues early.",
    tags: ["git-hooks", "pre-commit"]
  },

  {
    id: "git-advanced-workflows-q-028",
    quizId: "quiz_git_advanced_workflows",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a `pre-push` hook commonly used for?",
    options: [
      { id: "A", text: "Running checks before local commits are staged" },
      { id: "B", text: "Running checks before commits are pushed to a remote" },
      { id: "C", text: "Creating a new Git repository" },
      { id: "D", text: "Rewriting all remote history" }
    ],
    correctOptionId: "B",
    explanation: "A pre-push hook runs before Git sends commits to a remote and can be used for tests or validation.",
    tags: ["git-hooks", "pre-push"]
  },

  {
    id: "git-advanced-workflows-q-029",
    quizId: "quiz_git_advanced_workflows",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between client-side and server-side Git hooks?",
    options: [
      { id: "A", text: "Client-side hooks run on the developer's machine, while server-side hooks can run on the receiving repository/server" },
      { id: "B", text: "Client-side hooks only run on GitHub" },
      { id: "C", text: "Server-side hooks only run before local commits" },
      { id: "D", text: "There is no distinction" }
    ],
    correctOptionId: "A",
    explanation: "Client-side hooks execute in the local repository, while server-side hooks operate on the receiving side of repository operations.",
    tags: ["git-hooks", "server-hooks"]
  },

  {
    id: "git-advanced-workflows-q-030",
    quizId: "quiz_git_advanced_workflows",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can Git hooks be problematic when shared only through `.git/hooks`?",
    options: [
      { id: "A", text: "The `.git` directory is not normally committed, so hooks are not automatically shared through the repository" },
      { id: "B", text: "Git cannot execute shell scripts" },
      { id: "C", text: "Hooks can only run on Windows" },
      { id: "D", text: "GitHub deletes all hooks immediately" }
    ],
    correctOptionId: "A",
    explanation: "The `.git` directory is repository metadata and is not part of normal versioned project files, so local hooks need another sharing strategy.",
    tags: ["git-hooks", "collaboration"]
  },

  {
    id: "git-advanced-workflows-q-031",
    quizId: "quiz_git_advanced_workflows",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a good reason to use `git stash branch`?",
    options: [
      { id: "A", text: "To create a new branch from the stash's original base and apply the stashed changes there" },
      { id: "B", text: "To delete every branch containing the stash" },
      { id: "C", text: "To push a stash to GitHub" },
      { id: "D", text: "To convert a stash into a tag" }
    ],
    correctOptionId: "A",
    explanation: "`git stash branch <branchname>` creates a new branch starting from the commit where the stash was created and attempts to apply the stash there.",
    tags: ["stash", "stash-branch"]
  },

  {
    id: "git-advanced-workflows-q-032",
    quizId: "quiz_git_advanced_workflows",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "You have uncommitted changes and discover they belong on a different feature branch. Which workflow can help?",
    options: [
      { id: "A", text: "Stash the changes, switch/create the correct branch, then apply the stash" },
      { id: "B", text: "Delete the .git directory" },
      { id: "C", text: "Force-push the working tree" },
      { id: "D", text: "Run git revert without a commit" }
    ],
    correctOptionId: "A",
    explanation: "Stashing allows you to temporarily put aside the changes, move to the appropriate branch, and then restore them.",
    tags: ["stash", "branching", "workflow"]
  },

  {
    id: "git-advanced-workflows-q-033",
    quizId: "quiz_git_advanced_workflows",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command displays the changes contained in the latest stash without applying them?",
    options: [
      { id: "A", text: "git stash inspect" },
      { id: "B", text: "git stash show" },
      { id: "C", text: "git stash diff-only" },
      { id: "D", text: "git show-stash" }
    ],
    correctOptionId: "B",
    explanation: "`git stash show` displays information about the changes stored in a stash. Options such as `-p` can show the patch.",
    tags: ["stash", "stash-show"]
  },

  {
    id: "git-advanced-workflows-q-034",
    quizId: "quiz_git_advanced_workflows",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git stash show -p` provide?",
    options: [
      { id: "A", text: "The patch/diff represented by the stash" },
      { id: "B", text: "The list of GitHub pull requests" },
      { id: "C", text: "The repository's commit graph only" },
      { id: "D", text: "A new stash entry" }
    ],
    correctOptionId: "A",
    explanation: "The `-p` option asks Git to show the patch represented by the stash.",
    tags: ["stash", "diff"]
  },

  {
    id: "git-advanced-workflows-q-035",
    quizId: "quiz_git_advanced_workflows",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "A bug fix exists as commit `abc123` on a development branch, but you need that fix on a release branch without merging all development changes. What is a suitable tool?",
    options: [
      { id: "A", text: "git stash" },
      { id: "B", text: "git reset --hard" },
      { id: "C", text: "git cherry-pick abc123" },
      { id: "D", text: "git clean" }
    ],
    correctOptionId: "C",
    explanation: "Cherry-pick selectively applies the changes from a particular commit without merging the entire source branch.",
    tags: ["cherry-pick", "release-workflow"]
  },

  {
    id: "git-advanced-workflows-q-036",
    quizId: "quiz_git_advanced_workflows",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a potential downside of cherry-picking the same logical change into multiple branches?",
    options: [
      { id: "A", text: "It can create duplicated changes with separate commit identities and increase future maintenance complexity" },
      { id: "B", text: "It prevents commits from having messages" },
      { id: "C", text: "It automatically deletes the source branch" },
      { id: "D", text: "It disables merge operations" }
    ],
    correctOptionId: "A",
    explanation: "Cherry-picking creates new commits, so the same logical change can exist as separate commits across branches, potentially complicating history and later merges.",
    tags: ["cherry-pick", "history", "maintenance"]
  },

  {
    id: "git-advanced-workflows-q-037",
    quizId: "quiz_git_advanced_workflows",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the safest general principle when deciding between reset and revert?",
    options: [
      { id: "A", text: "Use reset freely on shared branches because it never changes history" },
      { id: "B", text: "Consider whether the history has been shared before choosing a history-rewriting operation" },
      { id: "C", text: "Always use reset --hard for published commits" },
      { id: "D", text: "Always use revert for uncommitted changes" }
    ],
    correctOptionId: "B",
    explanation: "The key consideration is whether other people depend on the existing history. Rewriting shared history can disrupt collaborators.",
    tags: ["reset", "revert", "shared-history"]
  },

  {
    id: "git-advanced-workflows-q-038",
    quizId: "quiz_git_advanced_workflows",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `git reset --keep` attempt to do?",
    options: [
      { id: "A", text: "Move HEAD while preserving local working-tree changes when possible and refusing if they would be overwritten" },
      { id: "B", text: "Delete all local changes" },
      { id: "C", text: "Create a revert commit" },
      { id: "D", text: "Push the current branch" }
    ],
    correctOptionId: "A",
    explanation: "`--keep` resets the branch while trying to preserve local changes, aborting if the reset would overwrite those changes.",
    tags: ["reset", "reset-keep"]
  },

  {
    id: "git-advanced-workflows-q-039",
    quizId: "quiz_git_advanced_workflows",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should `git reset --hard` be used carefully?",
    options: [
      { id: "A", text: "It can make local tracked changes unreachable from the working tree and index" },
      { id: "B", text: "It automatically pushes to every remote" },
      { id: "C", text: "It creates hundreds of commits" },
      { id: "D", text: "It cannot change HEAD" }
    ],
    correctOptionId: "A",
    explanation: "A hard reset changes the branch, index, and working tree to match the target commit, potentially discarding local work.",
    tags: ["reset", "data-loss"]
  },

  {
    id: "git-advanced-workflows-q-040",
    quizId: "quiz_git_advanced_workflows",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the difference between `git stash apply` and `git stash pop` when the application succeeds?",
    options: [
      { id: "A", text: "apply removes the stash, while pop keeps it" },
      { id: "B", text: "apply keeps the stash, while pop removes it" },
      { id: "C", text: "Both always delete the stash" },
      { id: "D", text: "Both always create commits" }
    ],
    correctOptionId: "B",
    explanation: "`apply` restores the stash without removing it, whereas `pop` applies it and then removes the stash entry if successful.",
    tags: ["stash", "apply", "pop"]
  },

  {
    id: "git-advanced-workflows-q-041",
    quizId: "quiz_git_advanced_workflows",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might `git stash apply` be safer than `git stash pop` while experimenting with a complex stash?",
    options: [
      { id: "A", text: "The stash remains available in case you need to retry or inspect it" },
      { id: "B", text: "It prevents all conflicts" },
      { id: "C", text: "It automatically creates a backup branch" },
      { id: "D", text: "It pushes the stash to GitHub" }
    ],
    correctOptionId: "A",
    explanation: "Keeping the stash gives you another copy of the saved changes if applying them causes problems.",
    tags: ["stash", "workflow"]
  },

  {
    id: "git-advanced-workflows-q-042",
    quizId: "quiz_git_advanced_workflows",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is one limitation of relying only on local Git hooks for enforcing project standards?",
    options: [
      { id: "A", text: "Developers can configure or bypass local hooks, so server-side or CI checks may still be necessary" },
      { id: "B", text: "Local hooks cannot execute scripts" },
      { id: "C", text: "Local hooks only work on GitHub" },
      { id: "D", text: "Hooks automatically rewrite history" }
    ],
    correctOptionId: "A",
    explanation: "Local hooks are useful but are not a complete enforcement mechanism because they live on individual machines and can be skipped or configured differently.",
    tags: ["git-hooks", "ci", "best-practices"]
  },

  {
    id: "git-advanced-workflows-q-043",
    quizId: "quiz_git_advanced_workflows",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which Git operation is most appropriate when you want to move a specific fix from one branch to another while intentionally excluding unrelated commits?",
    options: [
      { id: "A", text: "Cherry-pick" },
      { id: "B", text: "Reset --hard" },
      { id: "C", text: "Stash clear" },
      { id: "D", text: "Git clean" }
    ],
    correctOptionId: "A",
    explanation: "Cherry-pick is specifically designed for selectively applying individual commits.",
    tags: ["cherry-pick", "workflow"]
  },

  {
    id: "git-advanced-workflows-q-044",
    quizId: "quiz_git_advanced_workflows",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "You accidentally committed changes locally but have not pushed them. You want to edit the files and create a new commit instead. Which approach can be appropriate?",
    options: [
      { id: "A", text: "Reset the commit while preserving the changes, then recommit" },
      { id: "B", text: "Delete the entire repository" },
      { id: "C", text: "Run git revert and push immediately" },
      { id: "D", text: "Create a remote fork" }
    ],
    correctOptionId: "A",
    explanation: "For private local history, a soft or mixed reset can move the branch back while preserving the changes so they can be adjusted and recommitted.",
    tags: ["reset", "local-history"]
  },

  {
    id: "git-advanced-workflows-q-045",
    quizId: "quiz_git_advanced_workflows",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "A commit has already been pushed to a shared production branch and introduced a bug. Which approach is generally safer for the shared history?",
    options: [
      { id: "A", text: "git reset --hard and force-push" },
      { id: "B", text: "git revert the problematic commit and push the new revert commit" },
      { id: "C", text: "Delete the production branch" },
      { id: "D", text: "Delete the repository and recreate it" }
    ],
    correctOptionId: "B",
    explanation: "Reverting preserves the shared history while adding a new commit that undoes the problematic change.",
    tags: ["revert", "production", "shared-history"]
  },

  {
    id: "git-advanced-workflows-q-046",
    quizId: "quiz_git_advanced_workflows",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens conceptually when you cherry-pick a merge commit?",
    options: [
      { id: "A", text: "Git may require you to specify which parent should be considered the mainline" },
      { id: "B", text: "Git automatically cherry-picks every parent into every branch" },
      { id: "C", text: "The merge commit is converted into a tag" },
      { id: "D", text: "The entire repository is reset" }
    ],
    correctOptionId: "A",
    explanation: "A merge commit has multiple parents, so Git needs a mainline parent to determine which side should be treated as the baseline when applying its changes.",
    tags: ["cherry-pick", "merge-commit", "advanced-git"]
  },

  {
    id: "git-advanced-workflows-q-047",
    quizId: "quiz_git_advanced_workflows",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might a team combine Git hooks with CI checks?",
    options: [
      { id: "A", text: "Hooks provide fast local feedback while CI provides a centralized verification layer" },
      { id: "B", text: "CI makes Git hooks unnecessary in every workflow" },
      { id: "C", text: "Hooks automatically deploy production" },
      { id: "D", text: "CI prevents developers from creating commits" }
    ],
    correctOptionId: "A",
    explanation: "Local hooks can catch problems early, while CI provides a consistent server-side or hosted check that does not depend solely on local configuration.",
    tags: ["git-hooks", "ci", "workflow"]
  },

  {
    id: "git-advanced-workflows-q-048",
    quizId: "quiz_git_advanced_workflows",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are in the middle of a cherry-pick and decide that the selected commit should not be applied at all. What is the appropriate operation?",
    options: [
      { id: "A", text: "git cherry-pick --abort" },
      { id: "B", text: "git stash clear" },
      { id: "C", text: "git reset --remote" },
      { id: "D", text: "git branch --cancel" }
    ],
    correctOptionId: "A",
    explanation: "`git cherry-pick --abort` cancels the in-progress cherry-pick and returns the repository toward its pre-operation state.",
    tags: ["cherry-pick", "abort"]
  },

  {
    id: "git-advanced-workflows-q-049",
    quizId: "quiz_git_advanced_workflows",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which scenario best demonstrates the difference between stash and commit?",
    options: [
      { id: "A", text: "A stash is temporary local saved work, while a commit is a permanent recorded point in repository history" },
      { id: "B", text: "A stash is always pushed to GitHub automatically" },
      { id: "C", text: "A commit can only contain one file" },
      { id: "D", text: "A stash permanently changes the branch history" }
    ],
    correctOptionId: "A",
    explanation: "Commits become part of the repository's history, while stashes are intended as temporary saved working-state snapshots.",
    tags: ["stash", "commit", "history"]
  },

  {
    id: "git-advanced-workflows-q-050",
    quizId: "quiz_git_advanced_workflows",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer needs to temporarily save unfinished work, selectively move one bug fix from another branch, and safely undo a published bad commit. Which combination is most appropriate?",
    options: [
      { id: "A", text: "stash, cherry-pick, revert" },
      { id: "B", text: "reset --hard, merge, stash clear" },
      { id: "C", text: "revert, stash, reset --hard" },
      { id: "D", text: "cherry-pick, reset --hard, stash" }
    ],
    correctOptionId: "A",
    explanation: "`git stash` temporarily stores unfinished work, `git cherry-pick` selectively applies a specific commit, and `git revert` safely undoes a published change without rewriting shared history.",
    tags: ["stash", "cherry-pick", "revert", "workflow"]
  }
];

export default gitAdvancedWorkflowsQuestions;