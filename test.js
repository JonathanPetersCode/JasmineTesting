//mergeArrays - concat 2 arrays passed and sort arrays.

function mergeArrays(arr1, arr2){
    return arr1.concat(arr2).sort((a, b) => a - b);
}
  
describe("mergeArrays", function(){
    it("concats arr1 and arr2", function(){
        expect (mergeArrays([1,4,3],[5,6,9])).toEqual([1,3,4,5,6,9]);
    })
});

//replaceWith - pass in a string, a character to replace and the replacing character. 

function replaceWith(str, charAt, replaceChar){
    return str.replace(charAt, replaceChar)
}

describe("replaceWith", function(){
    it("replaces a character from a string", function(){
        expect (replaceWith("Hello Jon", "J", "D")).toEqual("Hello Don");
    });
});

//expand - concat an array times num (2nd arg.) 

function expand(arr, num){
    if (num < 0) return;
    if (num === 1) {
        return arr;
    } else {
        return arr.concat(expand(arr, num-1))
    } 
}

console.log(expand(["Foobar"], 3));

describe("expand", function(){
    it("repeat a arr times the value of num(2nd argument)", function(){
        expect(expand(["Foobar"], 3)).toEqual([ 'Foobar', 'Foobar', 'Foobar' ]);
    });
});



