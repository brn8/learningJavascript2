//LeetCode 1122. Relative Sort Array
function relativeSortArray(arr1, arr2){
	var array = [];
	var newArray = [];
	for(let i=0; i<arr2.length; i++){
		for(let j=0; j<arr1.length; j++){
			if(arr1[j]==arr2[i]){
				array.push(arr2[i]);
				arr1[j]=-1;
			}
		}
	}
	for(let i=0; i<arr1.length; i++){
		if(arr1[i]!=-1){
			newArray.push(arr1[i]);
		}
	}
	newArray.sort(function(a, b){return a - b});
	for(let i=0; i<newArray.length; i++){
		array.push(newArray[i]);
	}
	return array;
}
console.log(relativeSortArray([26,21,11,20,50,34,1,18],[21,11,26,20]));


