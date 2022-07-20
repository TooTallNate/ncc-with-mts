This is a proof-of-concept for a Node.js CLI application that is:

* Written in TypeScript
* Outputs ESM module syntax
* Compiled into a bundle using `@vercel/ncc` with source map support
* Has tests using `jest` and `ts-jest`
* Has "dev mode" with `ts-node` using SWC and ESM mode

Relevant documentation:

* [@sindre's Pure ESM package docs](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
* [`__dirname` replacement](https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/)
* [Jest's ESM Support docs](https://jestjs.io/docs/ecmascript-modules)
* [`ts-jest` ESM Support docs](https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/)
* [`ts-node` SWC docs](https://typestrong.org/ts-node/docs/swc)
* [`ts-node` ESM docs](https://typestrong.org/ts-node/docs/imports#native-ecmascript-modules)
