// What does the map() method do in JavaScript?
// A) Does it change the original array or return a new one?
// B) Does it apply a function to every element in an array?


//B) Does it apply a function to every element in an array?


// How would you use map() to multiply each number in this array [1, 2, 3] by 3?
// Write the code that uses map() to achieve this.

let a =[1,2,3]
const b=a.map(x=>x*3)
console.log(b)


// Does the map() method always return an array with the same number of elements as the original array?
// A) Yes
// B) No


//A) Yes


// Questions on filter():
// What does the filter() method return?
// A) A single element
// B) A new array with elements that satisfy a condition
// C) The original array


// B) A new array with elements that satisfy a condition



// How can you use filter() to get only the even numbers from the array [1, 2, 3, 4, 5]?
// Write the code that filters out only even numbers.

let filter =[1,2,3,4,5]
const filterout =filter.filter(x=>x%2==0);
console.log(filterout);


// If none of the elements in an array pass the condition in filter(), what does filter() return?
// A) An empty array
// B) null
// C) The original array


// A) An empty array



// Questions on includes():
// What is the purpose of the includes() method in JavaScript?
// A) To add elements to an array
// B) To check if a specific element is present in an array
// C) To sort the array


// B) To check if a specific element is present in an array


// How would you check if the number 10 is present in the array [5, 10, 15] using includes()?
// Write the code to check if 10 exists in the array.

var array=[5,10,15]
var includes=[array.includes(10)]
console.log(includes);



// What does includes() return when the element is not found in the array?
// A) true
// B) false
// C) undefined


// B) false


// Questions on find():
// What is the purpose of the find() method in JavaScript?
// A) To find and return a single element in the array that satisfies a condition
// B) To return all elements that meet a condition
// C) To modify elements in the array


// A) To find and return a single element in the array that satisfies a condition




// How can you use find() to return the first number greater than 20 from the array [10, 15, 25, 30]?
// Write the code to find the first number greater than 20.


var get=[10, 15, 25, 30]
var find=get.find(x=>x>20);
console.log(find);




// What does find() return if no element matches the condition?
// A) undefined
// B) null
// C) false


// A) undefined



// Questions on flat():
// What does the flat() method do in JavaScript?
// A) Flattens nested arrays into a single array
// B) Removes duplicates from an array
// C) Reverses the order of the array



//A) Flattens nested arrays into a single array




// How would you flatten this array [1, [2, [3, 4]], 5] to a depth of 1 using flat()?
// Write the code that uses flat() to flatten the array to one level.

const flatten=[1, [2, [3, 4]], 5]
const flat=flatten.flat(Infinity)
console.log(flat);






// If you call flat() on an array with no nesting, what will it return?
// A) The original array
// B) A flattened version of the array
// C) undefined

// A) The original array
