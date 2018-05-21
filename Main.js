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
			let SYmbol = mysymbol(1,'@#$%^&');
			// for ambiguous character
			let AmbiGuous =document.getElementById('exclude');
			function ambiguous(length,ambig){
				let Ambiguous = '';
				for (let i =length;i>0;i--)
				  Ambiguous += ambig[Math.floor(Math.random()*ambig.length)]
			    return Ambiguous;
			}
			let Amchar = ambiguous(2,'{<}[];.,/');
			// for excluding similar character 
			let NewPass = document.getElementById('Similar');
			function NewPassword(length,Pass){
			    let WithoutSimilar = '';
				for (let i = length;i>0;--i)
				  WithoutSimilar += Pass[Math.floor(Math.random()*Pass.length)];
			    return WithoutSimilar;
			}
			let NewPasswords = NewPassword(11,'abcdefghijkmnpqrstuvwxyz23456789');
			
			// for checked checkboxes
			if (Uppercase.checked == true && Symbol.checked == true && Number.checked == true && AmbiGuous.checked == true && NewPass.checked == true)
                {
                    document.getElementById('show').value = SYmbol +UpperCaseVal+NewPasswords;
				}
				
		    else if (Symbol.checked==true && Number.checked==true && Uppercase.checked == true && NewPass.checked == true)
			    {
			        document.getElementById('show').value = NewPasswords+SYmbol+Numbers+UpperCaseVal+Amchar;
				}
			else if (Number.checked == true && Uppercase.checked == true && AmbiGuous.checked == true && NewPass.checked == true)
                {
                   document.getElementById('show').value = NewPasswords+Numbers+UpperCaseVal;
                }
            else if (Uppercase.checked == true && Symbol.checked == true && AmbiGuous.checked == true && NewPass.checked == true)
                {
                    document.getElementById('show').value = NewPasswords+SYmbol+UpperCaseVal;
                }
			else if (Number.checked == true && Symbol.checked == true && AmbiGuous.checked == true && NewPass.checked == true)
			    {
					document.getElementById('show').value = NewPasswords+SYmbol+Numbers;
				}
                 
			else if (Symbol.checked == true && Number.checked == true && Uppercase.checked == true && AmbiGuous.checked == true)
				{
				    document.getElementById('show').value = PassWordValue+SYmbol+Numbers+UpperCaseVal;
				}
			else if(Number.checked == true && Uppercase.checked == true && Symbol.checked == true)
				{
				    document.getElementById('show').value = PassWordValue + Numbers+UpperCaseVal+Amchar+SYmbol;
				}
			else if (Symbol.checked == true && Uppercase.checked == true && NewPass.checked == true)
				{
				    document.getElementById('show').value = NewPasswords + UpperCaseVal+SYmbol+Amchar;
			    }
            else if (Symbol.checked == true && AmbiGuous.checked == true && Number.checked == true)
				{
				    document.getElementById('show').value = PassWordValue+SYmbol+Numbers;
				}
			else if (Number.checked == true && AmbiGuous.checked == true && Uppercase.checked == true)
			    {
				    document.getElementById('show').value =PassWordValue+Numbers+UpperCaseVal;
				}
			else if (Number.cheecked == true && Uppercase.checked == true && NewPass.checked == true )
			    {
					document.getElementById('show').value = NewPasswords+UpperCaseVal;
				}
			else if (Number.checked == true && NewPass.checked == true && AmbiGuous.checked == true)
			{
				document.getElementById('show').value =NewPasswords;
			}
			else if (Uppercase.checked == true && NewPass.checked == true && AmbiGuous.checked == true)
			{
				document.getElementById('show').value = NewPasswords+UpperCaseVal;
			}
			else if (Uppercase.checked == true && NewPass.checked == true && Symbol.checked == true)
			{
				document.getElementById('show').value = NewPasswords+SYmbol+UpperCaseVal;
			}
			else if (Uppercase.checked == true && AmbiGuous.checked == true && Symbol.checked == true)
			{
				document.getElementById('show').value = PassWordValue+UpperCaseVal+SYmbol;
			}
			else if (AmbiGuous.checked == true && NewPass.checked == true && Symbol.checked == true )
			{
				document.getElementById('show').value =NewPasswords+SYmbol;
			}
			else if (NewPass.checked == true && Number.checked == true && Symbol.checked == true )
			{
				document.getElementById('show').value = NewPasswords+symbol;
			}
			else if (Symbol.checked == true && Number.checked == true)
			{
				document.getElementById('show').value =PassWordValue+Numbers+SYmbol;
			}
			else if (Symbol.checked == true && Uppercase.checked == true )
			{
				document.getElementById('show').value = PassWordValue+UpperCaseVal+SYmbol+Amchar;
			}
			else if(Symbol.checked == true && NewPass.checked == true)
			{
				document.getElementById('show').value= SYmbol+NewPasswords+Amchar;
			}
			else if (Symbol.checked == true && AmbiGuous.checked == true)
			{
				document.getElementById('show').value = PassWordValue+Symbol;
			}
			else if (Number.checked == true && Uppercase.checked == true)
			{
				document.getElementById('show').value = NewPasswords+Amchar+UpperCaseVal;
			}
			else if (Number.checked == true && NewPass.checked == true )
			{
				document.getElementById('show').value = NewPasswords+Amchar;
			}
			else if (Number.checked == true && AmbiGuous.checked == true)
			{
				document.getElementById('show').value = NewPasswords;
			}
			else if (Uppercase.checked == true && Amchar.checked == true )
			{
				document.getElementById('show').value = NewPasswords+UpperCaseVal;
			}
			else if (Uppercase.checked == true && NewPass.checked == true)
			{
				document.getElementById('show').value = NewPasswords+UpperCaseVal;
			}
			else if (AmbiGuous.checked == true && NewPass.checked == true)
			{
				document.getElementById('show').value = NewPasswords;
			}
			else if (Symbol.checked == true)
			{
				document.getElementById('show').value = SYmbol+NewPasswords;
			}
			else if (Number.checked == true )
			{
				document.getElementById('show').value = NewPasswords+Amchar;
			}
			else if (Uppercase.checked == true )
			{
				document.getElementById('show').value = NewPasswords+UpperCaseVal;
			}
			else if (AmbiGuous.checked == true )
			{
				document.getElementById('show').value = NewPasswords;
			}
			else if (NewPass.checked == true)
			{
				document.getElementById('show').value = NewPasswords;
			}
			else 
			{
				document.getElementById('show').value=PassWordValue+Amchar;
			}
				
				
                 
			}); 