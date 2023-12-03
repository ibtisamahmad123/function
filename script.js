/*
function konbarahay(a,b){

    if (a>b){
        console.log("a bara hay")
    }
    else{
        if (b>a){
            console.log("b bara hay")

        }
        else{
            console.log("koi bara nahi hay")

        }
    }
}

konbarahay(5,6)
konbarahay(5,5)
*/

//BMI CALCULATOR 
weight=prompt("enter ur weight")
height=prompt("enter ur height")

function BMI_CALCULATOR(weight,height){
     BMI = weight/(height**2)
    console.log("your bmi is : " , BMI)
}

BMI_CALCULATOR(weight,height)