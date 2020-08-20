# Forking
  In order to contribute to a project which you don't have write access to, forking is required. Forking allows you to copy a github remote repository under someone else's account into your own account. From there, you can clone this into your local repository and make changes.

  Once forked, you can configure git on your local machine to pull changes from the original remote repository(a.k.a upstream) into your local forked repository. In order to do this, inside your local project(where git is already set up), you can type the following command into the command line:

  $ git remote add upstream --url of remote repository you would like to connect to--

  This allows you to sync commits and changes from the upstream(original remote repository). Using the following command in your local master branch allows you to sync changes from the upstream master branch into your local master branch.

  $ git merge upstream/master

  Once these changes are completed and pushed to your remote repository, you can make a [pull request](https://github.com/andres-holguin/CLApp/blob/master/docs/glossary/pull_request.md) to the original owner of the repository. If approved, the contributor's
changes will be reflected in the original project.
