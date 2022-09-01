let example = "오늘은 9월 1일 입니다";

console.log(typeof example);
//1. string 을 array 로 바꿔준다
//from() - 유사배열 객체를 얕게 복사해 새로운 Array 객체로 만든다

// console.log(Array.from(example));
const arr = Array.from(example);
console.log(arr[7]);

// (  index, deleteCount, input_item)
arr.splice(7, 1, "9");

arr.splice(10, 3, "추석연휴");
console.log(arr);

const str1 = arr.join();

console.log(str1);
