# Tree-shaking example with Typescript and Webpack
[![devDependency Status](https://david-dm.org/blacksonic/typescript-webpack-tree-shaking/dev-status.svg)](https://david-dm.org/blacksonic/typescript-webpack-tree-shaking?type=dev)

This repository shows how to configure Typescript and Webpack to enable tree-shaking.
It will eliminate dead code if they have ES2015 module format.

The source code can be found in the ```app/``` folder,
where the main file ```car.js``` doesn't use all the dependencies from ```engine.js```.
The built and transpiled files can be found in the ```/dist``` folder.

Webpack only marks unused code at bundling and leaves the removing part to minifiers.
This is why all the code is included in development builds in contrary to Rollup.

### Webpack + Typescript + UglifyJS

Can only remove unused functions and variables.

For development build run ```npm run webpack``` (Typescript -> ES5 bundle).

For production build run ```npm run webpack-prod``` (Typescript -> ES5 bundle -> UglifyJS).

When transpiling classes with Typescript, it generates an IIFE with an assignment to the prototype.
It is considered as a side effect by UglifyJS and it skips removing of it.

See the issues below:

- [Webpack issue](https://github.com/webpack/webpack/issues/2899) and a [more detailed one](https://github.com/webpack/webpack/issues/2867)
- [UglifyJS issue](https://github.com/mishoo/UglifyJS2/issues/1261)

### Webpack + Typescript + Babili

Can remove unused classes, functions and variables.

For development build run ```npm run webpack-es2015``` (Typescript -> ES2015 bundle).

For production build run ```npm run webpack-es2015-prod``` (Typescript -> ES2015 bundle -> Babili).

It uses the [Babili](https://github.com/babel/babili) ES6+ aware minifier and solves the issues what UglifyJS has.
