# nodeMongo
nodeMongo example

nodeJS- java script runtime environment built on V8 chrome engine, used to develop server-side and networking applications.
client side- anything that happens on the user device - ex: web browser
server side - everything that happens on the server, which is often remote machine that handles the logic / cloud infra.

Features:
1. Async and Event Driven - asyn and non blocking
2. Single-threaded- use single threaded with event lopping - can handle concurrency via async callbacks.
3. Scalable- designed to build scalable network app.
4. No Buffering- app output data in chuncks, eliminating the need for buffering.

Event - action that can be observed and handled by application - typically handled as string that indicate the type of event (data,error,connection)
Event Emitters- objects that can emit events and notify registered listeners when these events occurs.
Event Loop- single threaded mechanism that continuously checks for pending events and executes their associated event handlers. ensure that the app remains responsive and can handle multiple concurrent ops without blocking.
Non Blocking IO- Instead of waiting for I/O operations to complete, NodeJS initiates these ops and continues executing other tasks, once I/O ops is finished, it triggers the corresponding event, allowing event listeners to process the results async.

Core Modules:
1. fs - Read/write files and directories- file system
2. http - create http servers and clients
3. path - manipulate file paths
4. events - implement custom event handling

Data types - Boolean, Undefined, Null, String, Number
Loose typing - use of var without specifying what type of information will be stored. using var to store any kind of datatype variables

Use cases:
1. RESTFul APIs
2. Microservices architecture
3. Serverless functions with AWS lambda

Callback function - when any async event has to be done, it is generally preferred to use callbacks(if data is not nested or inter-dependent)
promises- object used to handle all the async data operations, while developing an app you may encounter that you are using a lot of nested callback functions


expressAsyncHandler - can be used instead of try catch handler in async calls -  npm i express-async-handler
mongoose - install for connection with mongoose - npm i mongoose

