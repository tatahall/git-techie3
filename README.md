The MERN Stack App
techanology used to interact with react
  1. json webtoken for authentication, and use it to manage contact, and each contact can associate with a user. it's not like one user can edited another user.
  2. use Mongo DB Atlas.
  

Before Start.
    1. run npm init, and ready to inistall dependency.
    2. run npm install the follow things.
        . express: the web frame can handle routing.
        . bcryptjs: handle hashing password to avoid store empty password.
        . jsonwebtoken: use to access protected routes on the server.
        . config: for globle variables.
        . express-validator:to validate any body data gonna come in (user has to have an email that's sent to password).
        . mongoose: react with data.
    3. need deb dependency install as follows:
        . npm i -D nodemon (allow us to keep watching our server sp we don't have to manually restart it ).
        . npm i -D concurrently (allow to run front and back end at the same time)

    4. need to edited package json
        . edit "start" under "script" to "start": "node server.js".
        . add "server" under "script" "server": "nodemon server.js"