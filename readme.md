# 🧠 adobe rule evaluator

_During an interview with [Adobe][adobe], I was asked to express logical statements as objects, and create a function that evaluated them against a set of data. Modeling the objects was tough, but after that everything else fell into place!_

[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

## ❓ question

You've most likely written logical statements in code before, like the one shown below.

```javascript
month === "August" && (day > 15 || [1, 5, 9].include(hour))
```

Now imagine you are implementing a rule builder that allows the user to create logical statements. Model the logical statements as objects, and then create a function that evaluates them against a set of data.

## 🤔 assumptions

I made a few basic assumptions to bound the complexity of the problem.

First, I decided to limit my support to the following logical operators.

-   `and`
-   `or`

Additionally, I decided to support only the following comparison operators.

-   `eq`
-   `neq`
-   `gt`
-   `lt`
-   `gte`
-   `lte`
-   `inc`
-   `ninc`

And finally, I limited the input data types to `string`, `number`, and `boolean`.

## 💀 execution

```bash
git clone https://github.com/bradgarropy/adobe-rules.git
cd adobe-rules
npm install
npm run test
```

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/adobe-rules/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/adobe-rules/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/adobe-rules/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[codecov]: https://app.codecov.io/gh/bradgarropy/adobe-rules
[contributing]: https://github.com/bradgarropy/adobe-rules/blob/master/contributing.md
[contributors]: #-contributors
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/adobe-rules?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/adobe-rules?style=flat-square
[issues]: https://github.com/bradgarropy/adobe-rules/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
[github-actions]: https://github.com/bradgarropy/adobe-rules/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/adobe-rules/%F0%9F%9A%80%20release?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[adobe]: https://www.adobe.com
