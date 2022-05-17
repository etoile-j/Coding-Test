// 1. 배열의 삭제
// 다음 배열에서 400, 500을 삭제하는 code를 입력하세요
var nums = [100, 200, 300, 400, 500];

//나
//방법1
nums.splice(3,2)
console.log(nums);

//방법2
nums.pop();
nums.pop();
console.log(nums);


// 2. 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요
// 데이터
var arr = [200, 100, 300];
//pass
console.log(arr);

//출력
[200, 100, 10000, 300];

//나
arr.splice(2, 0, 10000);
console.log(arr);


/* 3. 변수의 타입 
다음의 출력값으로 올바른 것은?
var arr = [100, 200, 300];
console.log(typeof(arr));
1) undefined
2) string
3) number
4) object       */
//나 : 4번  정답~ undefined, string, number 는 모두 기본 자료형(primitive type) 입니다.


/* 4. 변수의 타입2
다음의 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
1) 입력: a = 1 , 출력: number
2) 입력: a = 2.22 , 출력: boolean
3) 입력: a = 'p', 출력: string
4) 입력: a = [1,2,3], , 출력: object      */
// 2번! number이다.


/* 5. for문 계산
다음 코드의 출력값으로 알맞은 것은? */
var a = 10;
var b = 2;

for(var i = 1;i < 5;i+=2){
  a += i;
}
console.log(a+b);

//나
//답은 16
//a는 10이었지만 for문을 돌린 후 10+1+3=14가 되었고
//a(14)+b(2)=16