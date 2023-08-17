# node-package

### Description

This is a node package template with chageset and semantic-release.

### Getting Started

```bash
npm install
```

### Versioning

create a personal access token and then use it on `GITHUB_TOKEN`
add link [More info](https://github.com/orgs/community/discussions/27028#discussioncomment-3254360)

---

When adding a new feature, bug fix, or other change, you'll need to create a changeset.

> **NOTE**
>
> Only changes to the codebase that affect the public API or existing behavior (e.g. bugs) need changesets.

```
npx changeset
```

and then commit the code and changeset

```
git add .
git commit -m "commit message"
git push
```

When all that's done, create a pull request.
