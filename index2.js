// console.log("react");
// console.log("Javascript")
// console.log("athif");

//if I want the Javascript to run after 5 seconds.
//we will wrap it inside the callback function and pass it to the setTimeout
// setTimeout(function(){
//     console.log('Javascript')
// },5000)

//callback

// createOrder—>proceedToPayment—>showOrderSumaary—>updateWallet
//let say we have 
// cart and api's
// const cart= ["shoes", "pants", "kurtas"]

// api.createOrder()
// api.proceedToPayment()
// api.showOrderSummary()
// api.updateWallet()

//let's say we have 4 api's as show above
//and we want to write a callback function which is dependent on each other

// api.createOrder(cart,function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWallet()
//         })
//     })
// })

//above is called callback hell and we lose the control of the code.

//to avoid inversion of control we have promises.


//Promises

// const cart=['shoes','pants','kurtas']
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId,function(paymentInfo){
//         showOrderSummary(paymentInfo,function(){
//             updateWalletBalance()
//         })
//     })
// })
//instead of passing a callback function to the createOrder api with the cart.

//we will design our api such that it returns a promise
//assume that createOrder api returns us a promise
// const promise = createOrder(cart)
// promise.then(function(orderId){
//   proceedToPayment(orderId)
// })

//the above code is equivalent to writing the below code

// createOrder(cart)
// .then(function(orderId){
//     return proceedToPayment(orderId)
// })
// .then(function (paymentInfo){
//     return showOrderSummary(paymentInfo)
// })
// .then(function(){
//     return updateWalletBalance()
// })

//using arrow function
// createOrder(cart)
// .then(orderId=> proceedToPayment(orderId))
// .then(paymentInfo=>showOrderSummary(paymentInfo))
// .then(paymentInfo=>updateWalletBalance(paymentInfo))


//it returns a promise and we are making use of that promise object and attaching 
//callback function with .then method


// const GitHub_api = "https://api.github.com/users/meerathifali" 
// const user =fetch(GitHub_api);
// console.log(user);
// user.then(function(data){
//  console.log(data)
// })

//creating a promise

// const cart=["shoes", "pants", "kurta"];

// const promise = createOrder(cart);
// //{data:orderDetails}   
// promise.then(function(orderId){
//     console.log("Order Created with OrderId: ",orderId);
//     // proceedToPayment(orderId);
// })
// .catch(function(err){
//   console.log(err.message);
// });

// //producer
// function createOrder(cart){
//     const pr =new Promise(function(resolve,reject){
//         //createOrder
//         //ValidateCart
//         //OrderId
//         if(!validateCart(cart)){
//             const err= new Error("Cart is not Valid")
//             reject(err);
//         }
//         //logic for createOrder
//         const orderId="12345";
//         if(orderId){
//             resolve(orderId);
//         }
//     })
//     return pr;
// }

// function validateCart(cart){
//     return true;
// }

