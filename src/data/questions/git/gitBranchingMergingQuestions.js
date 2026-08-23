const gitBranchingMergingQuestions = [
  {
    id: "git-branching-merging-q-001",
    quizId: "quiz_git_branching_merging",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a Git branch primarily used for?",
    options: [
      { id: "A", text: "Uploading files to GitHub" },
      { id: "B", text: "Deleting repository history" },
      { id: "C", text: "Installing Git extensions" },
      { id: "D", text: "Creating a separate line of development" }
    ],
    correctOptionId: "D",
    explanation: "A branch is a lightweight reference that lets developers work on a separate line of development without immediately changing another branch.",
    tags: ["branches", "branching"]
  },

  {
    id: "git-branching-merging-q-002",
    quizId: "quiz_git_branching_merging",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command creates a branch named `feature-auth` without switching to it?",
    options: [
      { id: "A", text: "git branch feature-auth" },
      { id: "B", text: "git new feature-auth" },
      { id: "C", text: "git checkout-new feature-auth" },
      { id: "D", text: "git create feature-auth" }
    ],
    correctOptionId: "A",
    explanation: "`git branch feature-auth` creates the branch reference but leaves you on the current branch.",
    tags: ["git-branch", "branch-creation"]
  },

  {
    id: "git-branching-merging-q-003",
    quizId: "quiz_git_branching_merging",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command creates a new branch and switches to it?",
    options: [
      { id: "A", text: "git branch --move feature" },
      { id: "B", text: "git switch -c feature" },
      { id: "C", text: "git switch feature" },
      { id: "D", text: "git branch feature --checkout" }
    ],
    correctOptionId: "B",
    explanation: "`git switch -c feature` creates the new branch and switches the current branch to it.",
    tags: ["git-switch", "branch-creation"]
  },

  {
    id: "git-branching-merging-q-004",
    quizId: "quiz_git_branching_merging",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `HEAD` usually represent in Git?",
    options: [
      { id: "A", text: "The remote repository" },
      { id: "B", text: "The staging area" },
      { id: "C", text: "The currently checked-out commit or branch reference" },
      { id: "D", text: "The first commit in the repository" }
    ],
    correctOptionId: "C",
    explanation: "`HEAD` identifies the currently checked-out position in the repository, normally through the current branch reference.",
    tags: ["HEAD", "branches"]
  },

  {
    id: "git-branching-merging-q-005",
    quizId: "quiz_git_branching_merging",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does switching from `main` to `feature` change?",
    options: [
      { id: "A", text: "The remote repository's default branch automatically" },
      { id: "B", text: "Every commit in the repository" },
      { id: "C", text: "The Git installation itself" },
      { id: "D", text: "The branch Git considers current and the files checked out from that branch" }
    ],
    correctOptionId: "D",
    explanation: "Switching branches moves HEAD to another branch and updates the working tree to reflect that branch's state.",
    tags: ["branch-switching", "HEAD"]
  },

  {
    id: "git-branching-merging-q-006",
    quizId: "quiz_git_branching_merging",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command lists local branches?",
    options: [
      { id: "A", text: "git branch" },
      { id: "B", text: "git show-branches" },
      { id: "C", text: "git list" },
      { id: "D", text: "git branches --local-only" }
    ],
    correctOptionId: "A",
    explanation: "Running `git branch` without additional arguments lists local branches and marks the current branch with `*`.",
    tags: ["git-branch", "branch-listing"]
  },

  {
    id: "git-branching-merging-q-007",
    quizId: "quiz_git_branching_merging",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "In the output of `git branch`, what does the `*` indicate?",
    options: [
      { id: "A", text: "The branch is protected" },
      { id: "B", text: "The branch is currently checked out" },
      { id: "C", text: "The branch exists remotely" },
      { id: "D", text: "The branch contains the latest commit" }
    ],
    correctOptionId: "B",
    explanation: "Git marks the currently checked-out branch with an asterisk in branch listings.",
    tags: ["git-branch", "current-branch"]
  },

  {
    id: "git-branching-merging-q-008",
    quizId: "quiz_git_branching_merging",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Suppose you are on `main` and run `git branch feature`. Where is `HEAD` afterward?",
    options: [
      { id: "A", text: "On feature" },
      { id: "B", text: "On both branches" },
      { id: "C", text: "Still on main" },
      { id: "D", text: "Detached from all branches" }
    ],
    correctOptionId: "C",
    explanation: "`git branch feature` creates the branch but does not switch to it. HEAD therefore remains on `main`.",
    tags: ["git-branch", "HEAD", "branch-creation"]
  },

  {
    id: "git-branching-merging-q-009",
    quizId: "quiz_git_branching_merging",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does merging a branch accomplish?",
    options: [
      { id: "A", text: "It permanently deletes the source branch" },
      { id: "B", text: "It converts the branch into a remote repository" },
      { id: "C", text: "It rewrites every commit in the repository" },
      { id: "D", text: "It combines the history and changes from one branch into another" }
    ],
    correctOptionId: "D",
    explanation: "A merge integrates the changes represented by one branch into the branch you are currently on.",
    tags: ["merge", "branching"]
  },

  {
    id: "git-branching-merging-q-010",
    quizId: "quiz_git_branching_merging",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "If you want to merge `feature` into `main`, which branch should normally be checked out first?",
    options: [
      { id: "A", text: "main" },
      { id: "B", text: "feature" },
      { id: "C", text: "A newly created branch" },
      { id: "D", text: "Any remote branch" }
    ],
    correctOptionId: "A",
    explanation: "The merge target should be checked out. You would switch to `main`, then run `git merge feature`.",
    tags: ["merge", "branching", "workflow"]
  },

  {
    id: "git-branching-merging-q-011",
    quizId: "quiz_git_branching_merging",
    order: 11,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this sequence accomplish?\n\n```bash\ngit switch main\ngit merge feature\n```",
    options: [
      { id: "A", text: "It merges main into feature" },
      { id: "B", text: "It merges feature into main" },
      { id: "C", text: "It deletes feature" },
      { id: "D", text: "It creates a new remote named feature" }
    ],
    correctOptionId: "B",
    explanation: "Because `main` is checked out when `git merge feature` runs, Git attempts to integrate feature into main.",
    tags: ["merge", "git-switch"]
  },

  {
    id: "git-branching-merging-q-012",
    quizId: "quiz_git_branching_merging",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a fast-forward merge?",
    options: [
      { id: "A", text: "A merge that always creates a merge commit" },
      { id: "B", text: "A merge that happens only on GitHub" },
      { id: "C", text: "A merge where the target branch can simply move forward to the source branch tip" },
      { id: "D", text: "A merge involving exactly three developers" }
    ],
    correctOptionId: "C",
    explanation: "A fast-forward is possible when the target branch is an ancestor of the branch being merged, so Git can move the target reference forward without creating a merge commit.",
    tags: ["fast-forward", "merge"]
  },

  {
    id: "git-branching-merging-q-013",
    quizId: "quiz_git_branching_merging",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider this history:\n\n```text\nA---B---C  main\n         \\\n          D---E  feature\n```\n\nIf `main` has not received any commits after branching, what type of merge can Git perform when merging feature into main?",
    options: [
      { id: "A", text: "Three-way merge" },
      { id: "B", text: "Octopus merge" },
      { id: "C", text: "Conflict-only merge" },
      { id: "D", text: "Fast-forward merge" }
    ],
    correctOptionId: "D",
    explanation: "Here main points to an ancestor of feature's tip, so Git can simply move main forward to E.",
    tags: ["fast-forward", "merge-history"]
  },

  {
    id: "git-branching-merging-q-014",
    quizId: "quiz_git_branching_merging",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What usually prevents a fast-forward merge?",
    options: [
      { id: "A", text: "Having a commit on the target branch that is not an ancestor of the source branch" },
      { id: "B", text: "Having a `.gitignore` file" },
      { id: "C", text: "Using descriptive commit messages" },
      { id: "D", text: "Creating the branch locally" }
    ],
    correctOptionId: "A",
    explanation: "When both branches have diverged with unique commits, the target cannot simply move its reference to the source tip.",
    tags: ["fast-forward", "branch-divergence"]
  },

  {
    id: "git-branching-merging-q-015",
    quizId: "quiz_git_branching_merging",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a three-way merge based on?",
    options: [
      { id: "A", text: "Three developers working simultaneously" },
      { id: "B", text: "The two branch tips and their common ancestor" },
      { id: "C", text: "Three remote repositories" },
      { id: "D", text: "Three consecutive commits from the target branch" }
    ],
    correctOptionId: "B",
    explanation: "A three-way merge uses the tips of the two branches and their common ancestor, often called the merge base, to determine how changes should be combined.",
    tags: ["three-way-merge", "merge-base"]
  },

  {
    id: "git-branching-merging-q-016",
    quizId: "quiz_git_branching_merging",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is the common ancestor important during a three-way merge?",
    options: [
      { id: "A", text: "It determines the GitHub username of the developer" },
      { id: "B", text: "It permanently becomes the merge commit" },
      { id: "C", text: "It provides the baseline from which Git can determine what changed on each branch" },
      { id: "D", text: "It prevents branches from being deleted" }
    ],
    correctOptionId: "C",
    explanation: "Comparing each branch against their common ancestor allows Git to identify changes made independently on the two branches.",
    tags: ["three-way-merge", "merge-base"]
  },

  {
    id: "git-branching-merging-q-017",
    quizId: "quiz_git_branching_merging",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is branch divergence?",
    options: [
      { id: "A", text: "When two branches are deleted at the same time" },
      { id: "B", text: "When Git cannot initialize a repository" },
      { id: "C", text: "When a branch exists only on GitHub" },
      { id: "D", text: "When branches have developed different commits after sharing a common history" }
    ],
    correctOptionId: "D",
    explanation: "Branches diverge when each branch gains commits that are not present on the other branch.",
    tags: ["branch-divergence", "history"]
  },

  {
    id: "git-branching-merging-q-018",
    quizId: "quiz_git_branching_merging",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command can force Git to create a merge commit even when a fast-forward is possible?",
    options: [
      { id: "A", text: "git merge --no-ff feature" },
      { id: "B", text: "git merge --force-commit feature" },
      { id: "C", text: "git merge --three-way feature" },
      { id: "D", text: "git merge --always feature" }
    ],
    correctOptionId: "A",
    explanation: "`--no-ff` tells Git not to perform a fast-forward when merging, causing a merge commit to be created.",
    tags: ["merge", "no-ff", "fast-forward"]
  },

  {
    id: "git-branching-merging-q-019",
    quizId: "quiz_git_branching_merging",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might a team intentionally use `--no-ff` when merging feature branches?",
    options: [
      { id: "A", text: "To prevent the feature branch from being created" },
      { id: "B", text: "To preserve an explicit merge point representing the feature integration" },
      { id: "C", text: "To automatically delete all feature commits" },
      { id: "D", text: "To prevent Git from tracking branch names" }
    ],
    correctOptionId: "B",
    explanation: "A merge commit can preserve a visible boundary showing that a group of commits was integrated as a feature.",
    tags: ["no-ff", "merge", "history"]
  },

  {
    id: "git-branching-merging-q-020",
    quizId: "quiz_git_branching_merging",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "If a merge produces no conflicts, what does that tell you?",
    options: [
      { id: "A", text: "The branches contained no changes" },
      { id: "B", text: "The merge was necessarily fast-forward" },
      { id: "C", text: "Git was able to determine the resulting file contents automatically" },
      { id: "D", text: "The source branch was deleted" }
    ],
    correctOptionId: "C",
    explanation: "A conflict-free merge means Git could automatically reconcile the relevant changes. It does not necessarily mean the merge was fast-forward.",
    tags: ["merge", "conflicts"]
  },

  {
    id: "git-branching-merging-q-021",
    quizId: "quiz_git_branching_merging",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Can a three-way merge complete without conflicts?",
    options: [
      { id: "A", text: "No, every three-way merge causes a conflict" },
      { id: "B", text: "Only when using GitHub" },
      { id: "C", text: "Only if the branches have identical commits" },
      { id: "D", text: "Yes, Git can automatically combine non-conflicting changes" }
    ],
    correctOptionId: "D",
    explanation: "A three-way merge does not imply a conflict. Git can automatically merge changes when they do not conflict.",
    tags: ["three-way-merge", "conflicts"]
  },

  {
    id: "git-branching-merging-q-022",
    quizId: "quiz_git_branching_merging",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens to the source branch automatically after a successful merge?",
    options: [
      { id: "A", text: "It normally remains unless you explicitly delete it" },
      { id: "B", text: "It is always deleted" },
      { id: "C", text: "It is converted into a tag" },
      { id: "D", text: "It becomes the default branch" }
    ],
    correctOptionId: "A",
    explanation: "Merging does not automatically delete the source branch. Teams may delete it separately when it is no longer needed.",
    tags: ["merge", "branches"]
  },

  {
    id: "git-branching-merging-q-023",
    quizId: "quiz_git_branching_merging",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command deletes a local branch that has already been merged?",
    options: [
      { id: "A", text: "git remove feature" },
      { id: "B", text: "git branch -d feature" },
      { id: "C", text: "git branch --destroy feature" },
      { id: "D", text: "git delete-branch feature" }
    ],
    correctOptionId: "B",
    explanation: "`git branch -d feature` safely deletes the local branch when Git considers its changes merged.",
    tags: ["git-branch", "branch-deletion"]
  },

  {
    id: "git-branching-merging-q-024",
    quizId: "quiz_git_branching_merging",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between `git branch -d feature` and `git branch -D feature`?",
    options: [
      { id: "A", text: "There is no difference" },
      { id: "B", text: "`-d` deletes remote branches while `-D` deletes local branches" },
      { id: "C", text: "`-D` forces deletion even when Git does not consider the branch safely merged" },
      { id: "D", text: "`-d` creates a backup before deletion" }
    ],
    correctOptionId: "C",
    explanation: "`-d` performs a safety check, while `-D` forces deletion of the local branch.",
    tags: ["branch-deletion", "git-branch"]
  },

  {
    id: "git-branching-merging-q-025",
    quizId: "quiz_git_branching_merging",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should `git branch -D` be used carefully?",
    options: [
      { id: "A", text: "It deletes the entire repository" },
      { id: "B", text: "It pushes the branch to GitHub" },
      { id: "C", text: "It changes every commit hash" },
      { id: "D", text: "It can delete a branch containing commits that have not been merged elsewhere" }
    ],
    correctOptionId: "D",
    explanation: "Forced branch deletion bypasses Git's normal merged-history safety check, so commits reachable only from that branch may become harder to access.",
    tags: ["branch-deletion", "data-loss"]
  },

  {
    id: "git-branching-merging-q-026",
    quizId: "quiz_git_branching_merging",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git branch -a` typically display?",
    options: [
      { id: "A", text: "Local and remote-tracking branches" },
      { id: "B", text: "Only branches that contain commits" },
      { id: "C", text: "Only the default branch" },
      { id: "D", text: "Only deleted branches" }
    ],
    correctOptionId: "A",
    explanation: "`git branch -a` lists both local branches and remote-tracking branches known to the local repository.",
    tags: ["git-branch", "remote-branches"]
  },

  {
    id: "git-branching-merging-q-027",
    quizId: "quiz_git_branching_merging",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a remote-tracking branch such as `origin/main`?",
    options: [
      { id: "A", text: "A local branch that is automatically merged into main" },
      { id: "B", text: "A local reference representing the last known state of a branch on a remote" },
      { id: "C", text: "A GitHub pull request" },
      { id: "D", text: "A second working tree" }
    ],
    correctOptionId: "B",
    explanation: "A remote-tracking branch records your local repository's last known view of a branch on the remote repository.",
    tags: ["remote-tracking", "branches"]
  },

  {
    id: "git-branching-merging-q-028",
    quizId: "quiz_git_branching_merging",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git switch -c bugfix` do?",
    options: [
      { id: "A", text: "Merges bugfix into main" },
      { id: "B", text: "Deletes bugfix" },
      { id: "C", text: "Creates and switches to a new branch named bugfix" },
      { id: "D", text: "Creates a remote repository called bugfix" }
    ],
    correctOptionId: "C",
    explanation: "The `-c` option tells `git switch` to create a new branch before switching to it.",
    tags: ["git-switch", "branch-creation"]
  },

  {
    id: "git-branching-merging-q-029",
    quizId: "quiz_git_branching_merging",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of keeping feature work on a separate branch?",
    options: [
      { id: "A", text: "To prevent commits from being created" },
      { id: "B", text: "To make Git stop tracking changes" },
      { id: "C", text: "To eliminate the need for commits" },
      { id: "D", text: "To isolate development from another branch such as main" }
    ],
    correctOptionId: "D",
    explanation: "Feature branches isolate work so developers can make and review changes without directly modifying the main development line.",
    tags: ["feature-branches", "workflow"]
  },

  {
    id: "git-branching-merging-q-030",
    quizId: "quiz_git_branching_merging",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Suppose `main` and `feature` both contain new commits after their common ancestor. What kind of merge is generally required?",
    options: [
      { id: "A", text: "Three-way merge" },
      { id: "B", text: "Fast-forward merge" },
      { id: "C", text: "No merge is possible" },
      { id: "D", text: "Repository initialization" }
    ],
    correctOptionId: "A",
    explanation: "Because both branches have diverged, Git generally needs a three-way merge using the two tips and their common ancestor.",
    tags: ["three-way-merge", "branch-divergence"]
  },

  {
    id: "git-branching-merging-q-031",
    quizId: "quiz_git_branching_merging",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about a merge commit is correct?",
    options: [
      { id: "A", text: "It always has exactly one parent" },
      { id: "B", text: "It can record the integration of two divergent histories" },
      { id: "C", text: "It can only be created on GitHub" },
      { id: "D", text: "It replaces every previous commit" }
    ],
    correctOptionId: "B",
    explanation: "A typical merge commit has two parents and records the point where divergent histories were integrated.",
    tags: ["merge-commit", "history"]
  },

  {
    id: "git-branching-merging-q-032",
    quizId: "quiz_git_branching_merging",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why does a fast-forward merge not need a merge commit?",
    options: [
      { id: "A", text: "Because Git deletes the source branch" },
      { id: "B", text: "Because no commits exist on the source branch" },
      { id: "C", text: "Because the target branch can simply move to an existing descendant commit" },
      { id: "D", text: "Because GitHub automatically creates the commit later" }
    ],
    correctOptionId: "C",
    explanation: "Since the target branch is already an ancestor of the source tip, moving the target reference forward fully incorporates the source history.",
    tags: ["fast-forward", "merge"]
  },

  {
    id: "git-branching-merging-q-033",
    quizId: "quiz_git_branching_merging",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git merge --ff-only feature` require?",
    options: [
      { id: "A", text: "A merge conflict" },
      { id: "B", text: "A merge commit" },
      { id: "C", text: "The source branch to be remote" },
      { id: "D", text: "The merge to be possible as a fast-forward" }
    ],
    correctOptionId: "D",
    explanation: "`--ff-only` tells Git to refuse the merge unless the target can be advanced through a fast-forward.",
    tags: ["fast-forward", "merge"]
  },

  {
    id: "git-branching-merging-q-034",
    quizId: "quiz_git_branching_merging",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens if `git merge --ff-only feature` encounters divergent history?",
    options: [
      { id: "A", text: "Git refuses to perform the merge" },
      { id: "B", text: "Git automatically creates a merge commit" },
      { id: "C", text: "Git deletes feature" },
      { id: "D", text: "Git resets main to the common ancestor" }
    ],
    correctOptionId: "A",
    explanation: "Because `--ff-only` permits only fast-forward merges, Git aborts when a fast-forward is not possible.",
    tags: ["fast-forward", "merge", "ff-only"]
  },

  {
    id: "git-branching-merging-q-035",
    quizId: "quiz_git_branching_merging",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which scenario best demonstrates a fast-forward merge?",
    options: [
      { id: "A", text: "main and feature both receive independent commits" },
      { id: "B", text: "feature is directly ahead of main and main has not diverged" },
      { id: "C", text: "Both branches contain conflicting edits to the same line" },
      { id: "D", text: "main was deleted before merging" }
    ],
    correctOptionId: "B",
    explanation: "If feature contains the entire history of main plus additional commits, main can simply advance to feature's tip.",
    tags: ["fast-forward", "branching"]
  },

  {
    id: "git-branching-merging-q-036",
    quizId: "quiz_git_branching_merging",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a merge base?",
    options: [
      { id: "A", text: "The branch that is always called main" },
      { id: "B", text: "The latest commit on GitHub" },
      { id: "C", text: "A common ancestor used as the basis for comparing histories" },
      { id: "D", text: "The commit created after every merge" }
    ],
    correctOptionId: "C",
    explanation: "The merge base is a suitable common ancestor of the branches and is used by Git when performing a three-way merge.",
    tags: ["merge-base", "three-way-merge"]
  },

  {
    id: "git-branching-merging-q-037",
    quizId: "quiz_git_branching_merging",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What should you generally do before merging a feature branch into main in a team workflow?",
    options: [
      { id: "A", text: "Delete the target branch first" },
      { id: "B", text: "Remove the `.git` directory" },
      { id: "C", text: "Force-reset the feature branch" },
      { id: "D", text: "Verify the feature branch and target branch are in an appropriate state and run relevant tests" }
    ],
    correctOptionId: "D",
    explanation: "Before integrating work, developers should ensure the branch is up to date as appropriate and that relevant tests/checks pass.",
    tags: ["merge", "workflow", "best-practices"]
  },

  {
    id: "git-branching-merging-q-038",
    quizId: "quiz_git_branching_merging",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can merging an outdated feature branch be risky?",
    options: [
      { id: "A", text: "The feature branch may not include recent changes from the target branch, increasing integration risk" },
      { id: "B", text: "Git will always delete the branch" },
      { id: "C", text: "Git stops recording commits" },
      { id: "D", text: "The branch becomes a tag automatically" }
    ],
    correctOptionId: "A",
    explanation: "A feature branch that has not incorporated relevant recent target-branch changes may encounter conflicts or integration problems during merging.",
    tags: ["merge", "branch-sync", "workflow"]
  },

  {
    id: "git-branching-merging-q-039",
    quizId: "quiz_git_branching_merging",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the effect of merging a branch into itself?",
    options: [
      { id: "A", text: "It creates a completely new branch" },
      { id: "B", text: "It normally has nothing new to integrate" },
      { id: "C", text: "It deletes the branch" },
      { id: "D", text: "It automatically rebases the branch" }
    ],
    correctOptionId: "B",
    explanation: "A branch already contains its own history, so attempting to merge the same branch into itself has no meaningful new changes to integrate.",
    tags: ["merge", "branches"]
  },

  {
    id: "git-branching-merging-q-040",
    quizId: "quiz_git_branching_merging",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does branch deletion after a successful merge usually communicate?",
    options: [
      { id: "A", text: "The commits were destroyed" },
      { id: "B", text: "The main branch has been deleted" },
      { id: "C", text: "The feature branch is no longer needed as a separate line of development" },
      { id: "D", text: "The repository is now read-only" }
    ],
    correctOptionId: "C",
    explanation: "Once feature work has been integrated, deleting the feature branch can keep the repository's branch list clean without deleting the commits already reachable through the merged history.",
    tags: ["branch-deletion", "merge", "workflow"]
  },

  {
    id: "git-branching-merging-q-041",
    quizId: "quiz_git_branching_merging",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the key difference between creating a branch and merging a branch?",
    options: [
      { id: "A", text: "Creating a branch always uploads code; merging downloads code" },
      { id: "B", text: "Both operations permanently rewrite history" },
      { id: "C", text: "Merging only creates empty branches" },
      { id: "D", text: "Creating a branch creates a new line of development reference; merging integrates histories" }
    ],
    correctOptionId: "D",
    explanation: "Branch creation establishes another reference to a commit, while merging combines changes and history from branches.",
    tags: ["branches", "merge"]
  },

  {
    id: "git-branching-merging-q-042",
    quizId: "quiz_git_branching_merging",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A developer creates `feature` from `main`, makes three commits on feature, and makes no commits on main. After merging feature into main, what happens in a normal fast-forward merge?",
    options: [
      { id: "A", text: "main moves directly to feature's latest commit" },
      { id: "B", text: "A new merge commit with two parents is required" },
      { id: "C", text: "The three feature commits disappear" },
      { id: "D", text: "Git creates three additional duplicate commits" }
    ],
    correctOptionId: "A",
    explanation: "Because main remained at the ancestor from which feature was created, Git can fast-forward main to feature's tip.",
    tags: ["fast-forward", "merge"]
  },

  {
    id: "git-branching-merging-q-043",
    quizId: "quiz_git_branching_merging",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A developer creates `feature` from `main`. Both branches then receive commits. What is the most important consequence for merging?",
    options: [
      { id: "A", text: "Git can always fast-forward" },
      { id: "B", text: "The histories have diverged, so Git must reconcile both lines of development" },
      { id: "C", text: "The feature branch automatically becomes main" },
      { id: "D", text: "Git refuses to store either branch" }
    ],
    correctOptionId: "B",
    explanation: "Once both branches have unique commits, their histories diverge and integration requires comparing and reconciling both lines.",
    tags: ["branch-divergence", "merge"]
  },

  {
    id: "git-branching-merging-q-044",
    quizId: "quiz_git_branching_merging",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about branches is most accurate?",
    options: [
      { id: "A", text: "Every branch stores a complete independent copy of the repository" },
      { id: "B", text: "A branch can contain only one commit" },
      { id: "C", text: "A branch is essentially a movable reference to a commit" },
      { id: "D", text: "Branches exist only on GitHub" }
    ],
    correctOptionId: "C",
    explanation: "A Git branch is a lightweight movable reference to a commit rather than a full duplicate copy of the repository.",
    tags: ["branches", "references"]
  },

  {
    id: "git-branching-merging-q-045",
    quizId: "quiz_git_branching_merging",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is branching considered inexpensive in Git?",
    options: [
      { id: "A", text: "Branches require no commits" },
      { id: "B", text: "Branches are stored only on GitHub" },
      { id: "C", text: "Git automatically compresses the application code into one file" },
      { id: "D", text: "Git does not copy the entire working directory for every branch" }
    ],
    correctOptionId: "D",
    explanation: "Git branches are lightweight references to commits, so creating one does not require duplicating the entire project directory.",
    tags: ["branches", "git-internals"]
  },

  {
    id: "git-branching-merging-q-046",
    quizId: "quiz_git_branching_merging",
    order: 46,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens to the commits on a feature branch after a successful fast-forward merge?",
    options: [
      { id: "A", text: "They remain in history and are now reachable through the updated target branch" },
      { id: "B", text: "They become unreachable immediately" },
      { id: "C", text: "They are rewritten into different commits" },
      { id: "D", text: "They are automatically converted into tags" }
    ],
    correctOptionId: "A",
    explanation: "A fast-forward simply moves the target branch reference to the feature tip, so the existing commits remain unchanged.",
    tags: ["fast-forward", "history"]
  },

  {
    id: "git-branching-merging-q-047",
    quizId: "quiz_git_branching_merging",
    order: 47,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is one reason a team may prefer merge commits over always fast-forwarding?",
    options: [
      { id: "A", text: "Merge commits prevent all conflicts" },
      { id: "B", text: "Merge commits can preserve the fact that a feature branch was integrated as a distinct unit" },
      { id: "C", text: "Merge commits remove the need for branches" },
      { id: "D", text: "Merge commits automatically deploy applications" }
    ],
    correctOptionId: "B",
    explanation: "A merge commit can provide a visible integration point in history, which some teams find useful for understanding feature development.",
    tags: ["merge-commit", "history", "workflow"]
  },

  {
    id: "git-branching-merging-q-048",
    quizId: "quiz_git_branching_merging",
    order: 48,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which workflow best represents a typical feature-branch approach?",
    options: [
      { id: "A", text: "Edit main directly → delete main → recreate it" },
      { id: "B", text: "Create feature branch → never commit → delete main" },
      { id: "C", text: "Create feature branch → develop and commit → merge into main after appropriate review/testing" },
      { id: "D", text: "Push every unfinished edit directly into production" }
    ],
    correctOptionId: "C",
    explanation: "Feature branching isolates development and provides a controlled point where the work can be reviewed and integrated into the main line.",
    tags: ["feature-branches", "workflow", "merge"]
  },

  {
    id: "git-branching-merging-q-049",
    quizId: "quiz_git_branching_merging",
    order: 49,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A feature branch is two commits ahead of main, and main has not changed since the feature branch was created. Which statement is correct?",
    options: [
      { id: "A", text: "A conflict is guaranteed" },
      { id: "B", text: "A three-way merge is mandatory" },
      { id: "C", text: "The branches cannot be merged" },
      { id: "D", text: "The merge can normally be a fast-forward" }
    ],
    correctOptionId: "D",
    explanation: "Since main is an ancestor of the feature branch and has not diverged, Git can normally fast-forward main to the feature tip.",
    tags: ["fast-forward", "branch-divergence"]
  },

  {
    id: "git-branching-merging-q-050",
    quizId: "quiz_git_branching_merging",
    order: 50,
    type: "mcq",
    difficulty: "Intermediate",
    question: "You are on `main`. The history has diverged because both `main` and `feature` contain unique commits. You want to integrate feature while preserving an explicit merge point. Which command is most appropriate?",
    options: [
      { id: "A", text: "git merge --no-ff feature" },
      { id: "B", text: "git branch -D feature" },
      { id: "C", text: "git merge --ff-only feature" },
      { id: "D", text: "git switch -c feature" }
    ],
    correctOptionId: "A",
    explanation: "`git merge --no-ff feature` integrates the divergent feature history while ensuring a merge commit is created, preserving an explicit integration point.",
    tags: ["merge", "no-ff", "three-way-merge", "workflow"]
  }
];

export default gitBranchingMergingQuestions;