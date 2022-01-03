//896. Monotonic Array
function isMonotonic(nums){
	var arr = [];
	for(let i=1; i<nums.length; i++){
		if(nums[i-1]==nums[i]){
			continue;
		}
		else if(nums[i-1]<=nums[i]){
			arr.push("monotoneIncreasing");
			break;
		}
		else{
			arr.push("monotoneDecreasing");
			break;
		}
	}
	if(arr[0]=="monotoneIncreasing"){
		for(let i=1; i<nums.length; i++){
			if(nums[i-1]<=nums[i]){
			}
			else{
				return false;
			}
		}
		return true;
	}
	else{
		for(let i=1; i<nums.length; i++){
			if(nums[i-1]>=nums[i]){
			}
			else{
				return false;
		}
	}
	return true;
	}
}
console.log(isMonotonic([1,1,0]));