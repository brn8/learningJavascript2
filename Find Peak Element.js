//162. Find Peak Element

var findPeakElement = function(nums) {
	for(let i=1; i<nums.length-1; i++){
		if(nums[i-1]<nums[i] && nums[i+1]<nums[i]){
			return i
		}
	}
	if(nums[0]>nums[i]){
		return 0;
	}
	else if(nums[nums.length-1]>nums[nums.length-2]){
		return nums.length-1;
	}
	return 0
};
console.log(findPeakElement([1,2,3,1]));