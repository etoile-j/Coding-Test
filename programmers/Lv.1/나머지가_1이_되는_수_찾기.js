function solution(n) {
    for (let i = 1; i < n; i++) {
        if (n % i === 1) return i;
    }
    //2안
    //while (x++) {
    //        if (n % x === 1) {
    //            return x;
    //        }
    //    }
}
