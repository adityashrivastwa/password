         document.getElementById('generate').addEventListener('click', () =>{
			function mypassword(length,password){
				let PassWord = '';
				for (let i = length;i>0;--i)
				PassWord +=  password[Math.floor(Math.random()*password.length)];
				return PassWord;
				}
			let PassWordValue = mypassword(9,'abcdefghijklmnopqrstuvwxyz');
						
			let Uppercase = document.getElementById('uppercase');
			function myuppercase(length,uppercasE){
				let UpperCase = '';
				for (let i = length;i>0;--i)
				UpperCase += uppercasE[Math.floor(Math.random()*uppercasE.length)];
				return UpperCase;
				}
			let UpperCaseVal = myuppercase(3,'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
					//For number generation
			let Number = document.getElementById('numbers');		 
	        function mynumber(length,number){
			    let result = '';
			    for (let i = length;i>0;--i)
			    result += number[Math.floor(Math.random()*number.length)];
			    return result;
		       }
		    let Numbers = mynumber(2,'0123456789');
			   //for symbols generation
			let Symbol = document.getElementById('symbols');
			function mysymbol(length,symbol){
			    let Symbols = '';
				for (let i =length;i>0;--i)
				Symbols += symbol[Math.floor(Math.random()*Symbols.length)]
				return Symbols;
				}
			let SYmbol = mysymbol(1,'!@#$%^&');
			if (Uppercase.checked == true && Symbol.checked == true && Number.checked == true)
                {
                    document.getElementById('show').innerHTML = PassWordValue + SYmbol +Numbers+UpperCaseVal;
				}
				
		    else if (Symbol.checked==true && Number.checked==true)
			    {
			        document.getElementById('show').innerHTML = PassWordValue+SYmbol+Numbers;
				}
			else if (Number.checked == true && Uppercase.checked == true)
                {
                   document.getElementById('show').innerHTML = PassWordValue+Numbers+UpperCaseVal;
                }
            else if (Uppercase.checked == true && Symbol.checked == true)
                {
                    document.getElementById('show').innerHTML = PassWordValue+SYmbol+UpperCaseVal;
                }
                 
			else if (Symbol.checked == true )
				{
				    document.getElementById('show').innerHTML = PassWordValue+SYmbol;
				}
			else if(Number.checked == true)
				{
				    document.getElementById('show').innerHTML = PassWordValue + Numbers;
				}
			else if (Uppercase.checked == true)
				{
				    document.getElementById('show').innerHTML = PassWordValue + UpperCaseVal;
			    }
                  else
				{
				    document.getElementById('show').innerHTML = PassWordValue;
				}
                 
			}); 