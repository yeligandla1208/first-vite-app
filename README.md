 
FILE 09-08-24 synchro-asnchro.js

synchronous = Executes line by line consecutively in a sequential 
               manner code that waits for an operation to complete.


Asynchronous = Allows multiple operations to be performed concurrently
               without waiting dosn't block the execution flow and allows
               the program to continue 
                (I/O Operations, network requests, fetching data)
               {Handled with: callbacks, promises, Async/Await}



Callback hell = situation in javascript where callbacks 
                are nested within other callback to the 
                degree where the code is difficult to read.
                Old pattern to handle asynchronous functions.
                use promises + async/await to avoid callback hell

 
 
 
 pomises = An object that manages asynchronous operations.
          wrap a promise object around {asynchronous code}
          "I promise to return a value"
          PENDINGS >>> RESOLVED or REJECTED
          new promise((relove, reject) => {asynchronous code})
