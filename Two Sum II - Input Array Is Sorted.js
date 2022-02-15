//167. Two Sum II - Input Array Is Sorted
// var twoSum = function(numbers, target) {
// 	var arr=[];
// 	for(let i=0; i<numbers.length; i++){
// 		var count = numbers[i]
// 		for(let j=i+1; j<numbers.length; j++){
// 			count+=numbers[j];
// 			if(count==target){
// 				arr.push(i+1);
// 				arr.push(j+1);
// 				break;
// 			}
// 			else{
// 				count-=numbers[j];
// 			}
// 		}
// 		if(arr.length!=0){
// 			break;
// 		}
// 	}
// 	return arr
// };
// console.log(twoSum([2,7,11,15], 9))
var twoSum = function(numbers, target) {
	let starting = 0;
	while(true){
		for(let i=starting+1; i<numbers.length; i++){
			let sum =numbers[starting]+numbers[i]; 
			if(sum==target){
				return [starting+1,i+1]
			}
			else if(sum>target){
				break;
			}
		}
		starting++;
	}
};
console.log(twoSum([2,7,11,15], 9));