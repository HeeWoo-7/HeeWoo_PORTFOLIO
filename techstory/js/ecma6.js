//console.log("Hello World!");
// 1. for of(배열)
let arr = [1,2,3];
for (const element of arr) {
    console.log(element);
}

// 2. [배열] forEach(화살표 함수)
arr.forEach((e)=>{
    console.log(e);
})

arr.forEach((e, index)=>{
    console.log(e, index);
})