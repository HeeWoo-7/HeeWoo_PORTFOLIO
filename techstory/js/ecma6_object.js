//console.log("Hello World!"); 
// 재활용 가능한 타입
// 1. 프로토타입을 이용하여 객체를 작성하는 방법
function Student(name,score){
  this.name;
  this.score = score;
}

let std1 = new Student("홍길동", 100);
let std2 = new Student("손흥민", 90);

console.log(std1, std2);
//2. 생성자를 포함한 ecma6의 객체 작성 방법