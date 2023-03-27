var a=46; b=100; c=52;
			if(a>b && a>c){
				if(b>c){
					console.log(a,b,c);
				}
				else{
					console.log(a,c,b);
				}
			}
			else if(b>c){
				if(c<a){
					console.log(b,a,c);
				}
				else{
					console.log(b,c,a);
				}
			}
			else{
				if(b>a){
					console.log(c,b,a);
				}
				else{
					console.log(b,c,a);
				}
			}