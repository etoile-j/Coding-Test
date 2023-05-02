function solution(skill, skill_trees) {
    let answer = 0;

    for (i of skill_trees) {
        let skillCheck = [...skill];
        for (let j = 0; j < i.length; j++) {
            if (skill.includes(i[j])) {
                if (i[j] == skillCheck[0]) skillCheck.shift();
                else break;
            }
            if (j === i.length - 1) answer++;
        }
    }
    return answer;
}
