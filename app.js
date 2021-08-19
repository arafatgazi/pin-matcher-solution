//   problem number matcing 
  
  
  
  
  function getpin(){
    const pin=Math.round(Math.random()*10000);
    // to set the pin into 4 word 
    // (pin+'empty string ') make a string 
    // pin is a number
    const pinstring=pin+'';
    // length mane koita word ache 
    if(pinstring.length==4){
        return pin;
    }
    else{
        // jdi 3 digit ase tahale abar getpin function chalo hbe 
        return getpin();
    }


  }
  
  
  
  function genaratepin(){
    const pin=getpin();
    document.getElementById('display-pin').value=pin;

}
document.getElementById('keypad').addEventListener('click',function(event){
    // sdu event ke console krle sb details dive kintu parameter event thakte HTMLBaseElement.event.target dile kon div e ba kon tag e ache.event.target.innertext dile oi div er lekha dekhabe.
    const number=event.target.innerText;
    const calcInput= document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number =='C'){
            calcInput.value='';
        }

    }
else{
    
    // const calcInput= document.getElementById('typed-numbers');
 
// sb number eksathe lekte 
const previousnumber=calcInput.value;
const newnumber=previousnumber+number;
calcInput.value=newnumber;
};

});
function verifypin(){
    const pin=document.getElementById('display-pin').value;
    const typednumbers=document.getElementById('typed-numbers').value;
    if(pin == typednumbers){
        const success=document.getElementById('notify-success');
        success.style.display="block";
        
    }
    else{
        const fail=document.getElementById('notify-fail');
        fail.style.display="block";
    }
}