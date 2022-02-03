//2/3/2022
var productExceptSelf = function(nums) {
	let arr = [];
	let leftOver= [];
	let product = [];
	for(let i=0; i<nums.length; i++){
		let cal = 1;
		for(let j=i+1; j<nums.length; j++){
			cal*=nums[j];
		}
		for(let i=0; i<leftOver.length; i++){
			cal*=leftOver[i];
		}
		leftOver.push(nums[i]);
		if(cal=="-0"){
			product.push(0);
		}
		else{
			product.push(cal);
		}
		
	}
	return product
    
};
console.log(productExceptSelf([-1,1,0,-3,3]));

// var productExceptSelf = function(nums) {
// 	let s = 0;
// 	let arr = [];
// 	while(nums.length!=s){
// 		let product = 1;
// 		for(let i=1; i<nums.length; i++){
// 			product=product*nums[i];
			
// 		}
// 		s++;
// 		let store = nums[0];
// 		if(product=="-0"){
// 			product=0;
// 		}
// 		nums.shift();
// 		nums.push(store);
// 		arr.push(product);
// 	}
// 	return arr
    
// };
// console.log(productExceptSelf([-1,1,0,-3,3]));