# ci-triage-agent demo

A tiny storefront library whose pull requests break CI on purpose, so you can see
[ci-triage-agent](https://github.com/eaarrll/ci-triage-agent) explain real failures.

Every open pull request here is a different kind of failure. The CI runs are real, on
GitHub-hosted runners, and the triage comment on each PR was written by the action:

| PR | What broke | Kind |
| --- | --- | --- |
| discount boundary | a `>=` became `>` in the pricing code | code |
| lockfile drift | a dependency added to `package.json` without updating the lockfile | dependency |
| full-year report | the report job now runs out of heap | infrastructure |
| image tag typo | a Kubernetes image tag that does not exist (real `kind` cluster) | configuration |

`main` stays green. The triage workflow is [`.github/workflows/triage.yml`](.github/workflows/triage.yml).
