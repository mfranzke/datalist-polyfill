# Migration guidelines

## 2.0.0-beta.0 migration guide

We've switched from previously only providing the source and a minified version of the JS, to additionally provide the different relevant JavaScript formats especially regarding modules supported by [microbundle](https://npmjs.com/microbundle). Thatfor we even also changed the location of the generated files as well as pointed the relevant property entries within the `package.json` to those files. Please find all the relevant generated files in the `dist/` folder from now on.
