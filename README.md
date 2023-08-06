## Set up and run project locally
To set up and run project locally you need to clone repository from `develop` branch, install all dependencies:  
With NPM:  
```
npm install
```
With Yarn:  
```
yarn install
```

After all dependencies will be installed, run `prepare` script once to prepare `husky` hooks.  
Now you can run application locally, using `start` script, or build production (`build`) or development (`build:dev`) builds and run them using `preview` script.  
Info about all available scripts you can see below.

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