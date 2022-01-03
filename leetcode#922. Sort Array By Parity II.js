// 922. Sort Array By Parity II
function sortArrayByParityII(nums){
	var evenArray = [];
	var oddArray = [];
	var finalArray = [];
	for(let i=0; i<nums.length; i++){
		if(nums[i]%2==0){
			evenArray.push(nums[i]);
		}
		else{
			oddArray.push(nums[i]);
		}
	} 
	var evenCount = 0;
	var oddCount = 0;
	for (let i=0; i<nums.length; i++){
		if(i%2==0){
			finalArray.push(evenArray[evenCount]);
			evenCount++;
		}
		else{
			finalArray.push(oddArray[oddCount]);
			oddCount++;
		}
	}
	return finalArray;
}
console.log(sortArrayByParityII([2,3,5,6]))