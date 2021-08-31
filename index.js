var birthDate=document.querySelector('#birthdate');
var luckyNumber=document.querySelector('#lucky-number');
var checkButton=document.querySelector('.check-button');
var outputArea=document.querySelector('.output-area');

checkButton.addEventListener('click', checkButtonHandler)

function calculateSum(birthVal){
    const dob=birthVal.replaceAll('-','');
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+ Number(dob.charAt(i))
    }
    console.log(sum)
    return sum;
}


function checkButtonHandler(){

    if(birthDate.value && luckyNumber.value){
        const sum= calculateSum(birthDate.value);

        if(sum%luckyNumber.value===0){
            outputArea.innerHTML="Your birthday is lucky!🤩❤"
        }else{
            outputArea.innerHTML="Your birthday is not lucky!☹"
        }

    }else{
        outputArea.innerHTML="Please enter right values in both the fields."
    }        

}