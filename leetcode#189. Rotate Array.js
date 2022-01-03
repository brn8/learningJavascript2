//189. Rotate Array

function rotate(nums, k){
	for(let i=0; i<k; i++){
		for(let j=1; j<nums.length; j++){
			var temp = nums[0];
			nums[0]=nums[j];
			nums[j]=temp;
		}
	}
	return nums
}
console.log(rotate([1,2,3,4,5,6,7], 3))