function solution(nums) {
    const count = [...new Set(nums)].length;
    return nums.length / 2 > count ? count : nums.length / 2;
}
