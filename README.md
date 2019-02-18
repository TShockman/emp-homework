# Thomas Shockman Empatica Homework
Coding project for interview process.

To get it up and running:
1. ``cd server/express``
2. ``yarn start``
3. ``cd ../..``
4. ``yarn start``
5. Navigate to `http://localhost:3000`

There is a link on the bottom of the page to the login protected portion of the website.

To run tests simply ``yarn test``.

### Architecture
This project is built around React and Redux. It uses redux-little-router for routing and redux-saga to handle asynchronous flows.
The code is divided into modules. Modules define their own actions, reducers, and sagas for handling actions of relevance to them.
Styling is located right next to the components which use it. Components are intended to be modular.


### TODOs
There are a few places where I acknowledge that things could have been done better. Rather than leave my code reviewers puzzled, here are some acknowledgments of places that could be improved and what I would do to improve them.
* Sass organization and best practices. Unfortunately styling is one of the areas where I have less experience. As a result, I have yet to develop a working comfort with css/sass best practices. This is an instance where in the real work environment I would ask for guidance from more experienced colleagues or look to the existing code base for examples. 
* Decoupling components. Specifically the OrderList could have been modularized even further. Instead of retrieving orders directly from the state in the container, if the OrderList took orders as a prop passed by its parent it would allow the OrderList to be more easily adapted to new situations.
