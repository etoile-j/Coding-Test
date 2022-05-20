/* 11. for를 이용한 기본 활용
1부터 100까지 모두 더하는 코드를 <pass> 부분에 완성하세요. for를 사용해야 합니다.*/
let s = 0;

//pass

console.log(s);

//나
for (let i = 1; i <= 100; i++) {
    s += i;
}


/* 12. 게임 캐릭터 클래스 만들기
다음 코드에서 클래스를 작성하여 게임 능력치와 '파이어볼'이 출력되게 만드시오.
주어진 코드를 수정해서는 안 된다. */

//데이터
//<여기에 class를 작성하세요>

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

//출력
//545 210 10
//파이어볼

//나
class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼');
    }
}


/* 13. 몇 번째 행성인가요?
태양계는 수금지화목토천해 총 8개다.태양계의 n번째 행성이 무엇인지 알고 싶다.
입력으로 행성의 순서를 나타내는 숫자 n이 입력된다.
출력으로 그 순서에 해당하는 행성의 이름을 출력해줘라.
ex) 입력 : 1, 출력 : 수성     */

//나
const n = parseInt(prompt('태양계 몇 번째 행성을 출력할까요? 숫자만 입력해 주세요'));
const solra = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

if (n === 0 || n >= 9) {
    console.log('숫자 1~8까지만 입력해 주세요');
} else {
    console.log(solra[n - 1]);
}


/* 14. 3의 배수 인가요?
영희는 친구와 게임을 하고 있다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 
그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임이다.
입력으로 랜덤숫자 n이 주어진다.
만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해주세요.
ex) 입력 : 3, 출력 : 짝
    입력 : 2, 출력 : 2    */

//나
const n = prompt('숫자를 입력해주세요');
if(n % 3 === 0) {
    console.log('짝');
} else {
    console.log(n);
}


/* 15. 자기소개
신학기라 자기소개합니다. 만약 입력으로 김다정이라는 이름이 주어지면
"안녕하세요 저는 김다정입니다."라고 출력하게 해주세요
ex) 입력 : 김다정, 출력 : 안녕하세요 저는 김다정입니다.   */

//나
const name = prompt('이름을 입력하세요');
console.log(`안녕하세요 저는 ${name}입니다.`);


/* 16. 로꾸거
문장이 입력되면 거꾸로 출력하는 프로그램 만들어보자.
ex) 입력 : 거꾸로, 출력 : 로꾸거    */

//나
const input = prompt('문장을 입력하세요').split('');

console.log(input.reverse().join(''));


/* 17. 놀이기구 키 제한
놀이기구마다 키 제한이 있다. 유주가 담당하는 놀이기구는 키 150cm이상만 탈 수 있다.
입력으로 키가 주어지고, 키가 150이 넘으면 YES, 틀리면 NO를 출력하는 프로그램 작성 */

//나
const height = prompt('키를 입력하세요');
if (height >= 150) {
    console.log('YES');
} else {
    console.log('NO');
}