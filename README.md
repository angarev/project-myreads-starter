# MyReads App

React app for listing books that you are interested in. Built on top of the [starter template](https://github.com/udacity/reactnd-project-myreads-starter) for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.


[![N|Solid](https://classroom.udacity.com/nanodegrees/nd001/parts/c3e7b0d6-ffef-4421-b5fc-6df10fd0a1ae/modules/1c3110e6-46f7-4929-8cf4-8332afbbaadf/lessons/5d31386c-8c1c-4f32-974d-6bf3c1062cba/concepts/e7df4589-29d8-4d49-b760-a1db72d6cbdb#)](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001)



## Install project

The project uses Node.js.  If you do not have Node you have to install from here - [Node.js](https://nodejs.org/en/). 

1. Clone the repo `git clone https://github.com/angarev/project-myreads-starter.git`
2. cd into the project root and install all project dependencies with `npm install`
3. start the development server with `npm start`

A new browser window should automatically open displaying the app on URL- [http://localhost:3000/](http://localhost:3000/) in your browser


## Backend Server

To simplify your development process, Udacity provided a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


##  Terms & Conditions

This project is licensed under the terms of the MIT license.
