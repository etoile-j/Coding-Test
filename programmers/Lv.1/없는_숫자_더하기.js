function solution(numbers) {
    let total = 45;
    for (let i of numbers) {
        total -= i;
    }
    return total;
}
