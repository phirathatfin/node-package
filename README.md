# node-package

### Description

This is a node package template with chageset and semantic-release.

### Getting Started

```bash
npm install
```

### Implement your changes

After make some changes to code, then commit

```
git add .
git commit -m "commit message"
```

If your changes need to be in changelog, then run

```
npx changeset
```

and then commit the changeset

```
git add .
git commit -m "add changeset"
```

**Not every change requires a changeset.**

> Since changesets are focused on releases and changelogs, changes to your repository that don't require these won't need a changeset. As such, we recommend not adding a blocking element to contributions in the absence of a changeset.

When all that's done, create a pull request.
