function solution(people, limit) {
    let answer = 0;
    let leng = people.length - 1;
    people.sort((a, b) => b - a);

    while (answer < leng) {
        if (limit < people[answer] + people[leng]) answer++;
        else {
            answer++;
            leng--;
        }
    }
    if (answer === leng) answer++;

    return answer;
}
