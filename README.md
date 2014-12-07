# browserify-gulp-angular-app

Starter project that builds web apps using browserify and gulp

## Features

There are plenty of write ups and start project repositories
that combine browserify with gulp...
So why another one?

- Use `browserify` without using `gulp-browserify`
  - Because the latter has been "blacklisted"
- Has a `dist` build step
  - Concatenation and minification
- Able to build AngularJs apps
  - Extra steps required to build an AngularJs app due to the dependency injection system

The others usually just satisfy two of these requirements,
so there is room from improvement yet!

## How to start

### Bootstrap your framework

Firstly clone this repository, and reset its git history.

    git clone git@github.com:bguiz/browserify-gulp-starter.git
    mv browserify-gulp-starter my-app
    cd my-app
    rm -rf .git
    git init
    # edit package.json and bower.json to use your project details

Note: Currently , `gulp build` and `gulp serve` work,
but `gulp dist` does not work for Famous-Angular flickrous app.
There is a bug that occurs when one of the angular dependencies gets minified,
that appears to be DI related.

### Running build tasks

This project is built using gulp,
and the commands that you will run most often should be:

    # assembles project for development
    gulp build

    # does build task, and then optimises for distribution (concatenation, minification)
    gulp dist

    # does build task, and then listens for changes on project files, doing selective rebuilds
    gulp serve

    # deletes files created by build or dist tasks
    gulp clean

There are many others - look through `gulpfiles/tasks/*.js` to find them all.

## Licence

GPLv3
