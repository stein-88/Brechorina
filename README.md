# Thorin

To build this project you will require: NodeJS and Yarn or NPM

## Commands

Running local:

 - Before eveything run: `cp .env.dev .env`. This will create the .env file with the variables needed to run locally.
 - `yarn gcinstall`: Installs all the dependencies and install husky
 - `yarn myscripts`: Run all test to see if will be able to merge and push
 - `yarn start`: Runs in development mode
 - `yarn build`: Clean the build folder and builds all the static assets for the project within the /dist folder
 - `yarn test`: Runs all the unit tests
 - `yarn lint:js`: Runs the code linter on all js files
 - `yarn lint:scss`: Runs the code linter on all scss files

## Important:

I am using node-sass to enable SCSS modules, node-sass require a correctly version of Node to work properly:

NodeJS  | Minimum node-sass version | Node Module
--------|--------------------------|------------
Node 14 | 4.14+                    | 72
Node 13 | 4.13+                    | 72
Node 12 | 4.12+                    | 72
Node 11 | 4.10+                    | 67
Node 10 | 4.9+                     | 64
Node 8  | 4.5.3+                   | 57

As my machine is currently running Node 14, my node-sass is config as 4.14.

## Git Hooks:

Set husky:
 - `yarn husky install`
 - `yarn husky add .husky/pre-commit "yarn lint-staged"`
 - `yarn husky add .husky/pre-push "yarn test"`

The project count with Husky and Lint Staged:
 - `pre-commit`: Run all scripts on lint-staged
    - `lint-staged`: Run all linters and add to commit if something be fix
 - `pre-push`: Run all unit tests.

## Project structure

 - `src`: JavaScript source code of the application
 - `public`: Manifest and HTML template
 - `config`: Jest and general configs

## Development URLs

- Home screen: `http://localhost:8090/`