function solution(n, k) {
    let answer = 0;
    const numbers = n
        .toString(k)
        .split('0')
        .filter((num) => num > 1);
    // solution2
    // const numbers = n.toString(k).split('0');

    numbers.forEach((num) => {
        if (check(num)) answer++;
    });
    return answer;

    function check(num) {
        // solution2
        // if(!num || num==1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
}
