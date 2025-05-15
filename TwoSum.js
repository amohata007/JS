// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

//using Hash
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

const nums = [2, 7, 11, 15, 20];
const target = 22;
console.log(twoSum(nums, target));

//Brute Force - O(n)²
// function twoSum(nums, target) {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push([nums[i], nums[j]]);
//       }
//     }
//   }
//   return result;
// }

// const nums = [2, 7, 11, 15, 20];
// const target = 22;
// console.log(twoSum(nums, target));
