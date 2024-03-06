# classroom-ci-tracker
<!--  start of badges -->
[![Node.js CI](https://github.com/higherX4Racine/classroom-ci-tracker/actions/workflows/node.js.yml/badge.svg?branch=stage)](https://github.com/higherX4Racine/classroom-ci-tracker/actions/workflows/node.js.yml)
[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
<!-- end of badges -->
A web app for tracking continuous improvement efforts in a classroom

## Setup

This project is a new attempt to use local development tools to create a App
Scripts webapp.
My jumping-off point should have been Google's Github 
[repository](https://developers.google.com/apps-script/guides/typescript)
for TypeScript and Apps Script.
You need to have `npm` and `clasp` installed already to use these instructions.

### Version Control

The first step is to create a repository in your preferred version control
system.
I used [GitHub](https://github.com/higherX4Racine/classroom-ci-tracker).
I set it up with a `.gitignore` file based upon Node, an MIT license,
and this Markdown README.
Then I cloned it into a local directory and opened up Visual Studio Code in
that location.

make subdirectories called `src`, `build`, and `test`

### Node with TypeScript Support

Google's how-to suggests using the [Node Package Manager](https://www.npmjs.com/),
so that's what I did.

1. run `npm init`
   1. copy and paste a lot of the stuff from what you added to the Github repo.
   2. I entered "qunit" as my test runner because that's what I'm trying out.
2. install typescript as a development dependency
   1. `npm install -S typescript`
   2. `npm install -S @types/google-apps-script`
3. create the configuration file that TypeScript will use to complile JavaScript.
   ```json
   {
       "compilerOptions": {
           "target": "ES2019",
           "module": "CommonJS",
           "lib": [
               "esnext"
           ],
           "experimentalDecorators": true,
           "types": [
               "google-apps-script"
           ],
           "outDir": "build"
       },
       "include": [
           "./src/**/*"
       ]
   }
   ```

### Google Toolchain

The [`clasp`](https://github.com/google/clasp) command-line tool connects
your local development environment to the Apps Script online runtime.
It functions a lot like Github, but with some more elaborate initialization
functions.
The killer feature, though, is that it compiles TypeScript to the silly "gs"
extension JavaScript files that the Google App Script projects use.

Create a new clasp project in the same directory as everything else:

1. `clasp create <PROJECT_NAME>`
2. create a file called `.claspignore` to avoid uploading unnecessary stuff.
   ```ini
   # Git files
   .gitignore
   
   # Repository files for developers
   README.md
   LICENSE
   
   # node.js files
   package*.json
   node_modules/**
   
   # local developmentfiles
   build/**
   test/**
   tsconfig.json
   .vscode/**
   ```

### Unit testing toolchain

One of the main reasons to go through all of this nonsense is to have a unit
testing framework.
Irritatingly, Google Apps Script does not currently support JavaScript modules,
so we have choose from among some
[ugly hacks](https://github.com/google/clasp/blob/master/docs/typescript.md#modules-exports-and-imports)
in order to have inter-file communication without polluting the global
namespace.
It looks like the more robust way is to have
[namespaces](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html).

One side effect of all of this is that we're going to want to compile our local
TypeScript into local JavaScript before we run the unit tests.

That's why we made a `build` directory and included it in our TypeScript config
file.

I am trying out [QUnit](https://qunitjs.com), but will probably end up
switching to [Jest](https://jestjs.io/).

1. `npm install -D qunit`
2. `npm install -D @types/qunit`

A template test file is then something like

```js
const {Classes} = require("../build/class_in_snake_case.js")

QUnit.module("ClassName");

QUnit.test("description of the tests", assert => {
    instance = new Classes.ClassName(...args);
    assert.equal(instance.something, 42);
});
```
