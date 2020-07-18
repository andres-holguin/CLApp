# Beginner's Guide to GitHub

Thank you for making it this far! This entire website may feel completely foreign for now, but this guide will help you get acquainted. :smile:

## What is GitHub?
When many people work on a single project, they need a way to make sure they aren't stepping over each other's toes, have up-to-date copies of everyone's work, and can combine each other's work easily. You may be familiar with Google Docs, which allow several people to seamlessly edit a document at the same time.

GitHub takes a different approach. Rather than letting everyone edit the same copy, everyone keeps their own copy. GitHub then uses a version control system called [Git](/docs/glossary/git.md) to intelligently check line-by-line how one copy of a file differs from another. By keeping track of each new, deleted, or modified line in a text document, Git can attempt to combine all changes at the same time. If there are any changes that conflict, Git will notify you to let you resolve those differences.

GitHub is a platform that builds on top of Git, providing a rich interface for the contributors of a project to discuss changes and keep track of project goals, tasks, and milestones.

## How do I use GitHub?
GitHub has slowly evolved to be more consistent with the features users expect from other websites that allow you to change online files. That said, GitHub is fundamentally different from other file-hosting sites and not all tasks are completed exactly the same way. The question of how to use GitHub depends on what you want to do with it.

### I want to browse the files in a project.
The browsing experience should be fairly similar to browsing files on your computer. Every item listed on a repo's page is either a folder (aka directory) or a file that can be previewed (if it contains text). The only difference is that you have to keep in mind which [branch](/docs/glossary/branch.md)'s files you are viewing, which can be changed in the top left, most often. If you are viewing this guide for the first time, you are likely viewing the `master` branch's contents.

When previewing a file on GitHub, you can usually directly download that file.

### I want to get involved in the project's discussions.
**TODO: Explain the commenting features for PRs, Issues, and how to make them**

### I want to contribute to the design process!).
Awesome, glad to hear you'd like to get involved! Start by checking out the [design guide](/docs/how_to_design.md).
**TODO: Explain the best ways to make a change to documentation (create new branch, make changes, create PR for review OR edit directly on GitHub). Also link to [Markdown](/docs/glossary/md.md) glossary entry for info on how to format documents and link to other docs/images.**

#### I want develop code!
Now we're talking! Start by [setting up your environment](/docs/environment_setup.md) and reading the entirety of the [repository rules](/docs/rules.md), then search for an issue you would like to work on or ask around what needs to get done. Remember, design before you code!