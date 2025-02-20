//what is event loop ?
//lets first understand what is event loop 
// the cod ewhich gets executed at the same time when flow of execution comes at the particular code 
// opposite in asynchronus 
// 



//what is blocking 
// it is the time period when the further code cannot execute thats why it need to use event loop to solve the blocking problem in ashynchronus code

// event loops -->  have 3 things 
            // call stack 
                  //browsers
                        // callback  queue  


                        //lets say a function come in the stack and then a asynch code come so we send it to  browser saying that you handle it we dont need  any blocking in our code  
                        // all the entries in call stack get executed and the timeout that we sen din browser is still  running so then browser that function call back queue 
                        // so the event loop make sure that when call stack is empty  it executes the callback queue code 

                        //we can use the loupe tool to understand this concept --> http://latentflip.com/loupe

                        