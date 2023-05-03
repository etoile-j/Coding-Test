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

function solution2(skill, skill_trees) {
    let answer = 0;
    let regex = new RegExp(`[^${skill}]`, 'g');

    return skill_trees
        .map((v) => v.replace(regex, ''))
        .filter((v) => skill.indexOf(v) === 0 || v === '').length;
}
