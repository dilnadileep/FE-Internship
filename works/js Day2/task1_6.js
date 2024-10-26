// Task 1 - using the for loop
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimeNumbers(arr) {
    return arr.filter(isPrime);
}

const arr = [1,2,7,9,23,15,68,77];
const primenumber = findPrimeNumbers(arr);
console.log("Prime numbers : ", primenumber);


//Task 2

function resultarray(arr) {
    return arr
      .filter(num => num % 2 !== 0) 
      .map(num => num * 2);          
  }
  
  const array1 = [1, 2, 3, 4, 5, 6, 7];
  const result = resultarray(array1);
  console.log(result);  
  

//task 3

function merge_obj(a1,a2){
    return{...a1,...a2};
}

const obj1={name:"Alan",age:20,blood:"A+"}
const obj2={job:"Student",weight:20,grade:"O"}

const obj3=merge_obj(obj1,obj2)

console.log("Final object",obj3)

//Task 4

function even_sum(arr2){
    return arr2
    .filter(num => num % 2 == 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const a=[1,4,6,7,2];
const task_result=even_sum(a);
console.log("sum of the array elements : ",task_result)

//Task 5

function largest(arr3){
    if (arr3.length === 0) {
        return undefined; // Handling the empty arrays
      }
    let max=arr3[0];

    for (let i=1;i<arr3.length;i++)
    {
        if (max < arr3[i])
            max=arr3[i];
    }
    return max;
}

const demo=[3,42,23,65,76,67,66];
const x=largest(demo);
console.log("Largest number in the array : ",x)


//Task 6 - filter the function uses filter() to go through the elements of arr1.
            //includes for each element in arr1, it checks if it exists in arr2 using the includes() method.

function common_element(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
  }
  
  const ab = [1,2,3,4,5];
  const ba = [4,6,11,5,2,12];
  
  const ele = common_element(ab,ba);
  
  console.log("Common eleemnts : ",ele);
  