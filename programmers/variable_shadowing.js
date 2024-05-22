// 기존 코드
function printTimesTable(a) {
    for (i = 1; i <= 9; i++) {
        // 여기에서 i는 전역으로 선언
        console.log(a + ' * ' + i + ' = ' + a * i);
    }
}
for (var i = 2; i <= 9; i++) {
    printTimesTable(i);
}

// shadowing 효과를 추가해 구구단이 잘 출력되도록 함
function printTimesTable(a) {
    for (let i = 1; i <= 9; i++) {
        // 전역이었던 i를 let으로 선언해 for 내에서만
        console.log(a + ' * ' + i + ' = ' + a * i);
    }
}

for (var i = 2; i <= 9; i++) {
    printTimesTable(i);
}
