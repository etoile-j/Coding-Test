function solution(dartResult) {
    dartResult = dartResult.split('');
    let score = [0, 0, 0];
    let index = 0;
    dart();

    function dart() {
        let num = 0;
        if (isNaN(dartResult[1])) {
            num = dartResult.shift();
        } else {
            num = 10;
            dartResult.shift();
            dartResult.shift();
        }

        if (
            dartResult[0] === 'S' ||
            dartResult[0] === 'D' ||
            dartResult[0] === 'T'
        ) {
            switch (dartResult[0]) {
                case 'S':
                    break;
                case 'D':
                    num = Math.pow(num, 2);
                    break;
                case 'T':
                    num = Math.pow(num, 3);
                    break;
            }
            score[index] = num;
            dartResult.shift();
        }

        if (dartResult[0] === '*' || dartResult[0] === '#') {
            switch (dartResult[0]) {
                case '*':
                    score[index] = score[index] * 2;
                    if (index > 0) score[index - 1] = score[index - 1] * 2;
                    break;
                case '#':
                    score[index] = score[index] * -1;
                    break;
            }
            dartResult.shift();
        }

        if (!isNaN(dartResult[0])) {
            index++;
            dart();
        }
    }
    return score.reduce((pre, cur) => pre + Number(cur), 0);
}
