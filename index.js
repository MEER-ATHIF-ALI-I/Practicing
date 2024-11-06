//array methods
// for
// for in
// for of
// if else
// else if
// while
// do while
// switch
// map
// filter
// reduce
// for each
// slice
// splice
// fetch vs axios
// callback functions
// promise
// async await

//array methods
//length
//toString()
// at() or [] ..to find elements using index
//join() //you can specify using separator
//pop() method removes the last element from an array:
//push() method adds a new element to an array (at the end):
//shift() method removes the first array element
//unshift() method adds a new element to an array (at the beginning),


// //Solving problem using array functions on rest countries data using index.html and script.js file
// //(using rest countries api)
// var request = new XMLHttpRequest();
// request.open('GET','https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=a49osxVKZRAorWhVbB5ymVNYvP1fjP260L8DeXhq',true);
// request.send();
// request.onload=function(){
//     var data=JSON.parse(this.response);
//     console.log(data);

    //1. Get all the countries from asia continent/region using filter function
    // var countries=data.filter((ele)=>ele.region==="Asia");
    // console.log(countries);

  // const rover_id= data.photos.map(ele=>ele.camera.rover_id)
  // console.log(rover_id)
  

  // const totalcameras= data.photos.reduce((acc,ele)=>{
  //   // console.log(acc);
  //   // console.log(photo.rover.cameras.length)
  //   return acc+ ele.rover.cameras.length
  // },0);
  // console.log('totalcameras',totalcameras)


//   const mastPhotos = data.photos.filter(ele => ele.camera.name === "MAST");
// console.log(mastPhotos); 

// Output: Array containing the photo object with camera name "MAST"
  
// data.photos.forEach(photo => {
//     console.log('rfffffffffff',photo.earth_date);
    
//   })
  
  
// }

// let a =[6,7,8,9,10];
// console.log(a.slice(-1,-1))
// console.log(a.slice(2,4));
// if(5>4){
//   {{
//     let s1='guvi';
//   }}
//   console.log(s1);
// }