# Hawaiian Pig Visualization Assignment

**Objective:** Using [React](https://reactjs.org/), create an animated bar chart
that shows the data over time.

In the project directory, you'll find
[`wild-pig-data.json`](src/wild-pig-data.json). This file contains imaginary
data about wild pig populations on the various Hawaiian islands recorded over
several years. Your task is to take this data and use React to create an
animated bar chart. The chart should show pig population across islands, with
each separate year of data being shown as a separate frame of the animation.

The chart should have these features:

* [ ] Animation that steps through the data, displaying each year for 2 seconds
      before proceeding to the next year.

* [ ] A progress bar that shows the currently displayed year's relationship to
      the other years in the dataset.

* [ ] A play/pause button which enables and disables the animation, pausing on
      whichever year is currently being shown

* [ ] Year and play/paused state are persisted as query parameters in the URL.
      For example, `http://localhost:3000/?paused=true&year=2002` should load
      the page with the animation already paused and the year set to 2002

* [ ] Renders nicely in the most current versions of Firefox, Edge, and Chrome,
      and look good on both desktop and mobile.

Don't hesitate to ask questions. You are allowed (expected?) to take
implementation shortcuts for time. After all, this is how real software projects
go. Simply document them, so we can discuss them with you!

Good luck!

## Design

We've provided a [very rough wireframe](wireframe.png) in the project's root
directory. This is intentionally vague to provide you with guidelines but allow
you some flexibility to design the UI as you see fit.

The app should follow
[Google's Material Design guidelines](https://material.google.com/) to the best
of your ability. You're can use a component library such as
[Material UI](https://github.com/mui-org/material-ui) to help with this.

## Development

We've provided a skeleton app that was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app). We
hope this will help reduce boilerplate but you are welcome to start fresh and
use different technology, such as TypeScript.

To get started, install with the project's dependencies with `yarn install` or
`npm install`. Then run the app in development mode with `yarn start` or `npm
start`. You can now open [http://localhost:3000](http://localhost:3000) to view
it in the browser. The page will automatically reload if you make edits.

## Create React App

Create React App is designed to unobtrusively remove build configuration so you
can focus on code. Below are a few key pieces of information about the build
configuration that might be helpful if you haven't worked with Create React App
before.

You can find the full version of the Create React App guide
[here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Folder Structure

Your project should look like this:

```
homework-ui/
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    index.css
    index.js
  package.json
  README.md
  wireframe.png
  yarn.lock
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files
inside `src` are processed by Webpack.<br> You need to **put any JS and CSS
files inside `src`**, otherwise Webpack won’t see them.

### Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br> In
addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it
also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator)
  (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread)
  (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3
  proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields)
  (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and
  [Flow](https://flowtype.org/) syntax.

Note that **the project only includes a few ES6
[polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via
  [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as
`Array.from()` or `Symbol`), make sure you are including the appropriate
polyfills manually.

### Post-Processing CSS

This project setup minifies your CSS and adds vendor prefixes to it
automatically through [Autoprefixer](https://github.com/postcss/autoprefixer) so
you don’t need to worry about it.
