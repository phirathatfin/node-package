# node-package

### Description

This is a node package with Github Action, Changeset, AWS ECS
<img width="1132" alt="Screenshot 2023-08-17 at 16 15 43" src="https://github.com/phirathatfin/node-package/assets/136427146/6008f43e-19d3-4522-9c6d-2d776f2de4f3">


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
