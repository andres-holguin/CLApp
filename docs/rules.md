Most of the rules on this document relate to developers.
Designers should review the [guide to GitHub](/docs/beginner_guide.md) first, then look at the [documentation](#documentation) rules.

## CLApp Branch Rules

The following branch rules are in the repository settings and are being enforced by Github:

#### `master`
- PRs must have 3 approving reviews.
- Review approvals go stale if new commits are pushed.
- Linear history is preserved, so merge pulls are not allowed.

#### `documentation`
- PRs must have 1 approving review.
- Review approvals go stale if new commits are pushed.
- Linear history is preserved, so merge pulls are not allowed.

#### all branches
- After a PR merge, the merged branch will be automatically deleted. Branching off of the newly merged branch is suggested for continued development.

## CLApp Repository Rules and Conventions
The following rules are enforced only by contibutors to the repository.

1. When **creating a new branch**, the naming convention is `[parent_branch]_[feature_name]` where parent_branch is the branch from which the new branch was made from. Example: A feature for a search bar component going into the `components` branch should be developed on a branch named `components_search_bar`.
2. For commits and PRs Follow the **shrink-to-fit** ideology:
  - Commits should be as small as possible while still making sense with a brief title.
  - PRs should be as small as possible while not needing to depend on other PRs
3. **Don't commit anything broken**. If you want to push a WIP, do so in a branch named `[github_username]`
4. **Don't commit more than one file** at a time unless that would break something.
5. If you can **write tests** that show code is working, do so.
6. Try to [**amend commits**](https://docs.github.com/en/github/committing-changes-to-your-project/changing-a-commit-message) that need small fixes rather than make a new commit.
7. When commenting on code in a PR, **highlight all relevant lines** so suggestions can be easily comitted.
8. If a **PR is too large**, feel free to ask to the submitter to [cherry-pick](https://git-scm.com/docs/git-cherry-pick) and [rebase](https://git-scm.com/docs/git-rebase) the commits into separate, more manageable sizes.
9. **Avoid long url links**, and set descriptive [hyperlink](https://docs.github.com/en/github/committing-changes-to-your-project/changing-a-commit-message) text instead.