function solution(name, yearning, photo) {
    let answer = [];

    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        for (let j = 0; j < photo[i].length; j++) {
            let idx = name.indexOf(photo[i][j]);
            if (idx > -1) score += yearning[idx];
        }
        answer.push(score);
    }
    return answer;
}
