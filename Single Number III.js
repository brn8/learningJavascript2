//260. Single Number III
// var SingleNumber = function(nums){
// 	let arr = [];
// 	let j = 0;
// 	while(j!=nums.length){
// 		let check = true;
// 		for(let i=1; i<nums.length; i++){
// 			if(nums[0]==nums[i]){
// 				console.log(nums[0])
// 				nums.push(nums[0]);
// 				nums.shift();
// 				check=false;
// 				break;
// 			}
// 		}
// 		if(check){
// 			arr.push(nums[0]);
// 			nums.push(nums[0]);
// 			nums.shift();
// 		}
// 		j++;
// 	}
// 	return arr;
// };
// console.log(SingleNumber([0,1]));

var SingleNumber = function(nums){
	let arr = [];
	nums.sort(function(a, b){return a-b});
	for(let i=0; i<nums.length; ){
		if(nums[i]==nums[i+1]){
			i+=2;
		}
		else{
			arr.push(nums[i]);
			i+=1;
		}
	}
	return arr
};
console.log(SingleNumber([1,2,1,3,2,5]));