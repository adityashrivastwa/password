	//for symbol generate
	function mysymbol(){
    let symbolCheckbox = document.getElementById('symbols');
	  if (symbolCheckbox.checked == true&&generate.onclick)
	     { 
		  function symbolString(length, symbols) {
           var symbolresult = '';
           for (var i = length; i > 0; --i) {
		   symbolresult += symbols[Math.floor(Math.random() * symbols.length)];
		   }
         return symbolresult;
        }
       let SymbolString = symbolString(5, '!@#$%^&');
	   console.log(SymbolString)
		   }
	 else
	    {
		  false
		 } 	
     }
    mysymbol();
	//for number generate
	function mynumber(){
    let numberCheckbox = document.getElementById('numbers');
	  if (numberCheckbox.checked == true && generate.onclick)
	     { 
		  function numberString(length, numbers) {
           var numberresult = '';
           for (var i = length; i > 0; --i) {
		   numberresult += numbers[Math.floor(Math.random() * numbers.length)];
		   }
         return numberresult;
        }
       let NumberString = numberString(4, '0123456789');
		   }
	 else
	    {
		  false
		 } 	
     }
    mynumber();
	//for lowercase generate
	function mylowercase(){
    let lowercaseCheckbox = document.getElementById('lowercase');
	  if (lowercaseCheckbox.checked == true && generate.onclick)
	     { 
		  function lowercaseString(length, lowercase) {
           var lowercaseresult = '';
           for (var i = length; i > 0; --i) {
		   lowercaseresult += lowercase[Math.floor(Math.random() * lowercase.length)];
		   }
         return lowercaseresult;
        }
       let LowercaseString = lowercaseString(4, 'abcdefghijklmnopqrstuvwxyz');
		   }
	 else
	    {
		  false
		 } 	
     }
    mylowercase();
	//for uppercase generate
	function myuppercase(){
    let uppercaseCheckbox = document.getElementById('uppercase');
	  if (uppercaseCheckbox.checked == true && generate.onclick)
	     { 
		  function uppercaseString(length, uppercase) {
           var uppercaseresult = '';
           for (var i = length; i > 0; --i) {
		   uppercaseresult += uppercase[Math.floor(Math.random() * uppercase.length)];
		   }
         return uppercaseresult;
        }
       let UppercaseString = uppercaseString(4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		   }
	 else
	    {
		  false
		 } 	
     }
    myuppercase();
	
	
    document.getElementById('generate').addEventListener ('click', () => {
    
	 function symbolString(length, symbols) {
           var symbolresult = '';
           for (var i = length; i > 0; --i) {
		   symbolresult += symbols[Math.floor(Math.random() * symbols.length)];
		   }
         return symbolresult;
        }
       let SymbolString = symbolString(5, '!@#$%^&');
	    function numberString(length, numbers) {
           var numberresult = '';
           for (var i = length; i > 0; --i) {
		   numberresult += numbers[Math.floor(Math.random() * numbers.length)];
		   }
         return numberresult;
        }
       let NumberString = numberString(4, '0123456789');
	    function lowercaseString(length, lowercase) {
           var lowercaseresult = '';
           for (var i = length; i > 0; --i) {
		   lowercaseresult += lowercase[Math.floor(Math.random() * lowercase.length)];
		   }
         return lowercaseresult;
        }
       let LowercaseString = lowercaseString(4, 'abcdefghijklmnopqrstuvwxyz');
	   function uppercaseString(length, uppercase) {
           var uppercaseresult = '';
           for (var i = length; i > 0; --i) {
		   uppercaseresult += uppercase[Math.floor(Math.random() * uppercase.length)];
		   }
         return uppercaseresult;
        }
       let UppercaseString = uppercaseString(4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
       document.getElementById('show').innerHTML = ('your password is:'+LowercaseString+UppercaseString+SymbolString+NumberString)
 });