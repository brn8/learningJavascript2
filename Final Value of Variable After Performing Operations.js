var finalValueAfterOperations = function(operations) {
	var count =0;
	for(let i=0; i<operations.length; i++){
		if(operations[i]=='--X'){
			count-=1;
		}
		else {
			count++;
		}
		return count
	}
    
};
console.log(finalValueAfterOperations( ["--X","X++","X++"]))