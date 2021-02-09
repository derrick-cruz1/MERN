// console.log(hello);                                   
// var hello = 'world';                                 

// //Output: Undefined 

// //Given
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// var needle
// needle = haystack
// function test(){
//         var needle = 'magnet';
//         console.log(needle);
//     }
//Output: Magnet 

// Given
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//
// function print(){
//         brendan = 'only okay';
//         console.log(brendan);
//     }
// var brendan
// brendan = 'super cool';
// console.log(brendan);
//Output: super cool


//GIVEN
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

//OUTPUT:
// function eat(){
//     var food 
//         food = 'gone';
//     food = 'half-chicken';
//         console.log(food);
//     }
//     var food
//     food = 'chicken'
//     eat();
//     console.log(food);
//OUTPUT: halfchicken, halfchicken, chicken

//GIVEN
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//ORDER:
// var mean
// Mean = function()
// var food
// food = "fish";
// food = "chicken";
// console.log(food);
//  console.log(food);
// mean();
// console.log(food);
//OUTPUT: Mean is not a function

//GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//ORDER: 
// function rewind() {
//   var genre;
//   genre = "rock";
//   console.log(genre);
//   genre = "r&b";
//   console.log(genre);
// }
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);
    
// output:
//    undefined
//    rock
//    r&b
//    disco

//GIVEN:
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//ORDER: 
// function learn() {
    //   var dojo
    //   console.log(dojo);
    //   dojo = "seattle";
    //   console.log(dojo);
    //   dojo = "burbank";
    //   console.log(dojo);
    // }
    // dojo = "san jose";    // Javascript allows this even though it is NOT defined as a var in the global scope
    // console.log(dojo);
    // learn();
    // console.log(dojo);
    
    // OUTPUT:
    //    san jose
    //    undefined          // local scoped variable is used
    //    seattle
    //    burbank
    //    san jose