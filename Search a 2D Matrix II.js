//2/3/2022
var searchMatrix = function(matrix, target) {
	for(let i=0; i<matrix.length; i++){
		for(let j=0; j<matrix[i].length; j++){
			if(matrix[i][j]==target){
				return true
			}
		} 
	}
	return false
};
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20));
