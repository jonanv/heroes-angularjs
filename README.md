<p align="center">
    <img src="https://i.imgur.com/bF1WkFW.png" width="300">
</p>

[![NPM Version][npm-badge]][npm-url]
[![Node JS][node-badge]][node-url]
[![Angular JS][angular-badge]][angular-url]
[![License][license-badge]][license-url]

# Site
<!-- ![heroes angularjs](https://i.imgur.com/B2heenX.png) -->
![heroes angularjs 1](https://i.imgur.com/Me55x8o.png)
![heroes angularjs 2](https://i.imgur.com/yHrX9sL.png)

# Install dependences
in ```heroes-angularjs/```

```bash
npm install
```
or
```bash
yarn install
```

***

# HeroesAngularjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***

# Create component without .spec (--skipTests)
```javascript
ng generate component components/heroes --skipTests
```
or
```javascript
ng g c components/heroes --skipTests
```

# Create service without file .spec (--skipTests)
```javascript
ng generate service services/heroe --skipTests
```
or
```javascript
ng g s services/heroe --skipTests
```

# Server local
install global ```sudo npm i -g http-server```

deploy in ```/heroes-angularjs/dist/heroes-angularjs/```

```javascript
http-server
```
or
```javascript
http-server -o
```

[npm-badge]: https://img.shields.io/badge/npm-v6.14.4-brightgreen
[npm-url]: https://www.npmjs.com
[node-badge]: https://img.shields.io/badge/nodejs-v12.16.1-brightgreen
[node-url]: https://nodejs.org/download/release/v12.16.1/
[angular-badge]: https://img.shields.io/badge/angular--CLI-v9.1.0-brightgreen
[angular-url]: https://angular.io/cli/
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg
[license-url]: https://opensource.org/licenses/MIT
