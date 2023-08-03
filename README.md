## Scripts usage
### Common application scripts
 - `start`: launches development application server with hot refresh on any changes.
 - `build`: makes production build of the application.
 - `build:dev`: makes development build of the application.
 - `preview`: launches builded application on local server.
### ESLint scripts
 - `lint`: runs ESLint to check code for issues.
 - `lint:fix`: runs ESLint to check code and fix autofixable issues.
### Prettier scripts
 - `format:check`: runs prettier to check code formatting.
 - `format:fix`: runs prettier to check and auto format code.
### Jest scripts
 - `test`: runs unit tests.
 - `test:coverage`: runs unit tests and collect coverage information.
 - `test:watch`: runs unit tests with watch mode, that will rerun tests on code changes.
### Husky scripts
 - `prepare`: this script prepares husky hooks to use. Use it when you first time installing the application's environment to be able to use husky hooks.