/* 31. 자바스크립트 자료형의 복잡도
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오
1) arr[i]
2) arr.push(5)
3) arr.slice()
4) arr.pop()
5) arr.includes(5)  */

//나 3, 5번??
//답은 3, 5

//O(1): 문제를 해결하는데 오직 한 단계만 처리. 입력값이 증가하더라도 시간이 늘어나지 않는다.
//slice(), includes- O(n): 입력값이 증가함에 따라 시간 또한 같은 비율로 증가하는 것을 의미한다.


/* 32. 문자열 만들기
문자열을 입력받으면 단어의 갯수를 출력하는 프로그램 작성해주세요.
ex) 입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
    출력 : 5      */

//나
const input = prompt('문자열을 입력해 주세요').split(' ');
console.log(input.length);


/* 33. 거꾸로 출력하기
한 줄에 여러 개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램 작성해주세요.
ex) 입력 : 1 2 3 4 5
    출력 : 5 4 3 2 1       */

//나
const input = prompt('공백으로 구분해 숫자를 입력하세요').split(' ');
console.log(input.reverse().join(' '));

//답    처럼 반복문 사용도 가능하다.
const data = prompt('숫자를 입력하세요.').split(' ').reverse();
const result = '';

for (let i=0; i<data.length; i++){
  result += data[i];
}

console.log(result);