// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Input: hours = [5,1,4,2,2], target = 6
// Output: 0

var numberOfEmployeesWhoMetTarget = function (hours, target) {
  // let count = 0;
  // for(let i=0;i<=hours.length;i++){
  //     if(hours[i]>=target){
  //         count++;
  //     }
  // }
  // return count;
  return hours.filter((el) => el >= target).length;
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
