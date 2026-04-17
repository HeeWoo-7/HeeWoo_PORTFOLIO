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
for (const element of student) {
  console.log(element);
} 
for (const key in student) {
  const element = student[key];
  console.log(element);
}

//4. propertu, method 를 포함한 객체 작성 방법

class Account {
  constructor(owner, account_no, balance) {
    this.owner = owner;
    this.account_no = account_no;
    this.balance = balance;
  }

  deposit(money) {
    console.log("입금이 완료되었습니다.");
    this.balance += money;
  }
  inquiry(){
    console.log("조회처리 되었습니다.", this.balance); 
  }
  withdraw(money){
    console.log("출금이 완료되었습니다.");
   if(this.balance >= money){
    this.balance -= money;
   }else{
    console.log("출금할 수 없습니다.");
   }
  }   
}

let acc1 = new Account("홍길동", "1111", 100000);
let acc2 = new Account("김철수", "2222", 200000);

acc1.deposit(100000);
acc1.inquiry();
acc1.withdraw(200000);
acc1.inquiry();
