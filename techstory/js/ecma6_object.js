//console.log("Hello World!"); 
// 재활용 가능한 타입
// 1. 프로토타입을 이용하여 객체를 작성하는 방법
let std1 ={
  name: "이순신",
  score: 100,
};
let std2 ={
  name: "정약용",
  score: 90,
};
let std1 = new Student("이순신", 100);
let std2 = new Student("정약용", 90);
console.log(std1, std2);

//2. 생성자를 포함한 ecma6의 객체 작성 방법

class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}
let std3 = new Student("홍길동", 100);
let std4 = new Student("김철수", 90);
console.log(std1, std2, std3, std4);

//3. 객체의 속성을 반복문으로 전부 읽어오기, for in
let student = [std1, std2, std3, std4];
for of (const element of student) {
  console.log(element);
} 
for (const key in student) {
  const element = student[key];
  console.log(element);
}

//4. propertu, method 를 포함한 객체 작성 방법
