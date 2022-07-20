# p-memoize-cjs

The upstream https://github.com/sindresorhus/p-memoize only functions if you run native `ESM`. Right now the toolchain is simply too experimental to update complicated workflows to ESM. Too many tools like `ts-node`, `ts-node-dev`, `yarn` just don't fully support ESM in a non-experimental way.

This library takes the export of `p-memoize` and just exports it as commonjs so you can import it in any Node project.

I wish this wasn't necessary.

# usage

`npm install p-memoize-cjs`

Import syntax
```
`import pMemoize from "p-memoize-cjs"`;
```

CJS
```
const { pMemoize } = "p-memoize-cjs";
```