function solution(survey, choices) {
    const frame = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    for (let i = 0; i < survey.length; i++) {
        let score = 4 - choices[i];
        if (score > 0) frame[survey[i][0]] += score;
        else frame[survey[i][1]] += Math.abs(score);
    }

    const first = frame.R === frame.T || frame.R > frame.T ? 'R' : 'T';
    const second = frame.C === frame.F || frame.C > frame.F ? 'C' : 'F';
    const third = frame.J === frame.M || frame.J > frame.M ? 'J' : 'M';
    const fourth = frame.A === frame.N || frame.A > frame.N ? 'A' : 'N';
    return first + second + third + fourth;
}
