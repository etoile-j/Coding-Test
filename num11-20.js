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