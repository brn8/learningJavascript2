//540. Single Element in a Sorted Array
function singleNonDuplicate(nums){
	for(let i=0; i<nums.length; i+=2){
		if(nums[i]!=nums[i+1]){
			return nums[i];
		}
	}
	// var i=0;
	// while(nums[i]==nums[i+1]){
	// 	i+=2;
	// }
	// return nums[i];
}
console.log(singleNonDuplicate([3,3,7,7,10,10,11]));