function solution(n) {
    let result = n.toString().split('').reverse();
    return result.map((nums) => Number(nums));
}
