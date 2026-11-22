for (let row = 1 ; row <= 8 ; row++){
    pattern = "" ;
        for (let column = 1; column <= 8  ; column++){
	    
		if ((row + column) % 2 ===0){
		    
		    pattern = pattern + " " ; 
		}
		else{
		    
		    pattern = pattern + "#"; 
		}
	}










console.log(pattern);



}
