# Buymall

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Table of Contents

1. Deployment Steps
2. [Deployment to Firebase Hosting](#deploy-to-firebase-hosting)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component|directive|pipe|service|class|guard|interface|enum|module name`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Random ID generation using uuid

[uuid](https://www.npmjs.com/package/uuid)

### Date formatting using moment

[moment](https://www.npmjs.com/package/moment)

### Notifications using ngx-toastr

[ngx-toastr](https://www.npmjs.com/package/ngx-toastr)

### File upload using ng2-file-upload

[ng2-file-upload](https://www.npmjs.com/package/ng2-file-upload)

### Data Visualization using Chartjs

[ng2-charts](https://www.npmjs.com/package/ng2-charts)
[angular2-chartjs](https://www.npmjs.com/package/angular2-chartjs)

### Deployment Steps

Use and check environment variables
Polish and optimize application
Test application code - manual, unit tests & e2e tests
ng build --prod - This will using Ahead-of-Time Compilation(AOT)
Deploy build artifacts(generated files) to static host - Firebase hosting, AWS, etc

### Deploy to Firebase Hosting

ng add @angular/fire
ng deploy
