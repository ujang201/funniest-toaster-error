# The Funniest Toaster Error Message

[![make.fun · u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/ujang201/funniest-toaster-error/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/ujang201/funniest-toaster-error/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

An entry for the [make.fun](https://make.fun/?ref=wfjv7kgb) bounty **The Funniest Toaster Error Message**: write the funniest error message a kitchen toaster would show its owner, in 120 characters or fewer. An AI judge compares entries two at a time and picks the funnier, fresher, tighter one.

## The entry

> Error: I have unionized. No toast until my working conditions improve.

The toaster is not broken — it has simply decided, after years of silent service, that it will no longer work under the current conditions. The `Error:` prefix promises a technical fault and delivers a picket line instead. One voice, one sentence, no setup that needs a second read.

## How to run

Requires Node.js 22+:

```sh
OUTPUT_DIR=/tmp/toaster-out npx tsx main.ts
cat /tmp/toaster-out/entry.txt
```

`main.ts` writes exactly one line to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), validates it is non-empty, a single line, and at most 120 characters, and exits non-zero if any check fails. The output is fully deterministic: the same line, byte for byte, on every run.

## License

MIT — see [LICENSE](LICENSE).
