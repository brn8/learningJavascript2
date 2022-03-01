//442. Find All Duplicates in an Array
// var findDuplicates = function(nums) {
// 	let arr =[]
// 	while(nums.length!=0){
// 		let count = 1;
// 		for(let i=1; i<nums.length; i++){
// 			if(nums[0]==nums[i]){
// 				count++;
// 			}
// 		}
// 		if(count==2){
// 			arr.push(nums[0]);
// 		}
// 		nums.shift(); 
// 	}
// 	return arr.sort()
// };
// console.log(findDuplicates([4,3,2,7,8,2,3,1]));
var findDuplicates = function(nums) {
	nums.sort()
	let arr = [];
	for(let i=0; i<nums.length;){
		if(nums[i]==nums[i+1]){
			arr.push(nums[i]);
			i+=2;
		}
		else{
			i+=1;
		}
	}
	return arr
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]));