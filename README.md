# RockContent likes

## Services
1. Login fake to tests
2. Query in article records
3. Like and dislike in articles

## Frameworks
> Angular 12 and Bootstrap 5

## Requirements

> Angular 12.1.1 -> https://www.npmjs.com/package/@angular/cli

> Docker -> https://docs.docker.com/desktop/

## Local tests (docker)

> docker build -f Dockerfile -t rockcontent-app:latest .

Wait a few seconds for the application to finish compiling in the container.

> docker run --rm -d -p 4333:4200 rockcontent-app

## Local tests (angular)

> ng build

> ng serve (Navigate to `http://localhost:4200/`)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
