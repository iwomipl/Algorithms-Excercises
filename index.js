// 1. Please write a function that shows the usage of closures

function myClosureStoringFunction(somethingFromArgument){
        const baseArray = [somethingFromArgument];

        const pushToBaseArray = (thingToPush)=>{
            baseArray.push(thingToPush);
            console.log(`Pushed ${thingToPush} into the baseArray, and it looks now like this ${baseArray}`);
            return baseArray;
        };

        return pushToBaseArray;
};

const myClosureShowingFunction = myClosureStoringFunction(true);

// myClosureShowingFunction('argumentHere');

//You can call it with myClosureShowingFunction(<argumentHere>) and see content of baseArray on console log,
// in case you need growing content of baseArray you can use it, because function returns it from pushToArray function
//--------------------------------------------END---------------------------------------------------//

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const sumOfArrayReduce= (arr)=>{
    const mySum = arr.reduce((prev, curr)=>{
        if (typeof curr !== 'number'){
            throw new Error('Sorry, Argument should be an Array consisting of Numbers only');
        }
        return prev += curr;
    }, 0);

    console.log(mySum);
    return mySum;
};
//You can call it with
// sumOfArrayReduce([9, 1, 22, 0, 2]);
//and see the result on console
//or use the result because it returns it.
//I know mostly it stands for function just to return the result,
// but this console.log at end of the function will make it's easier  to check it
//--------------------------------------------END---------------------------------------------------//

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const recursiveFlattingFunction = (arr)=>{
    if (arr.filter((element)=> Array.isArray(element)).length < 1) {
        return arr;
    };

    return recursiveFlattingFunction(arr.flat());
};
//You can call it:
// recursiveFlattingFunction([[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]);
//obviously i could not include console.log into it. so it only returns propper result

//--------------------------------------------END---------------------------------------------------//
// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const myCommonElementsFinder = (arr1, arr2)=>{
    const internalArrayOne = (arr1.length > arr2.length) ? [...arr1] : [...arr2];
    const internalArrayTwo = (arr1.length > arr2.length) ? [...arr2] : [...arr1];
    const myArray = internalArrayOne.filter((element)=>{
        return internalArrayTwo.includes(element) ? element : null;
    });

    console.log(myArray)
    return myArray;
};
//you can call it:
//myCommonElementsFinder(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']);
//and see the result on console or use it, because functions returns result
//--------------------------------------------END---------------------------------------------------//

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const myDifferentElementsFinder = (arr1, arr2)=>{
    const longerArray = (arr1.length >= arr2.length) ? [...arr1] : [...arr2];
    const shorterArray = (arr1.length >= arr2.length) ? [...arr2] : [...arr1];
    const functionToFilter = (oneArray, secondArray)=>{
        return oneArray.filter((element)=> !secondArray.includes(element) ? element : null)
    };

    const myArray = functionToFilter(longerArray, shorterArray);
    myArray.push(functionToFilter(shorterArray, longerArray));

    console.log(myArray.flat());
    return myArray.flat();
};
// you can call it:
// myDifferentElementsFinder(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']);
//and see the result on console or use it, function returns it
//--------------------------------------------END---------------------------------------------------//

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const myTouplesConcatenator = (arr1, arr2)=>{
        const longerArray = (arr1.length >= arr2.length) ? [...arr1] : [...arr2];
        const shorterArray = (arr1.length >= arr2.length) ? [...arr2] : [...arr1];
        const myArray = [];

        shorterArray.forEach((element, index)=>{
            const arrayInsideFunction = [];
            arrayInsideFunction.push(element, longerArray[index]);
            myArray.push(arrayInsideFunction);
        });

        console.log(myArray);
        return myArray;
};
// you can call it:
// myTouplesConcatenator([1,2,3], [4,5,6,7]);
//and see the result on console or use it, function returns it
//--------------------------------------------END---------------------------------------------------//

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const pathToValueFinder = (arr, obj)=>{
    if (arr.length <1){
        console.log(obj)
        return obj;
    }
    const myArr = [...arr];
    const firstElement = myArr.shift();

    if (!obj[firstElement]) {
        console.log(undefined)
        return undefined;
    };

    return pathToValueFinder(myArr, obj[firstElement]);
};
// you can call it:
// pathToValueFinder(['a', 'b', 'c', 'd'], { a: { z: { c: { d: '23' } } } });
// despite this function being recursive I was able to return one console.log at the end of it
// so, if you want to see the result it's on console, or you can use it. Function returns it.
//--------------------------------------------END---------------------------------------------------//

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const objectComparer = (obj1, obj2)=>{


};
console.log(objectComparer({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }));
// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

