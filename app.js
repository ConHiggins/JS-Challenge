
 

function isNumPos(event) {

    const num = event.target.value;

    if(num >= 0) 
        {
            
            document.getElementById("answer1").innerHTML = "True!";
            return true;
        }
    else 
        {
            document.getElementById("answer1").innerHTML = "False";
            return false;
        }
}

function daysToAge(event) {

    const days = event.target.value;

    const ans = Math.floor(days/365); ///Flooring to remove decimals

     
    document.getElementById("answer2").innerHTML = String(ans);
    console.log(ans);
    return ans; 
}


function largestNum(i,j,k) {

    console.log(Math.max(i,j,k));
    return Math.max(i,j,k);
}

largestNum(10,15,999);



function getLastName() { 
    
    
    var nameArray = (document.getElementsByName("nameArray")); ///Getting names from input boxes using "name" tag

        var j = nameArray.length - 1; ///Finding end position of array 

        console.log(nameArray[j].value);
        document.getElementById("answer3").innerHTML = nameArray[j].value;
        return nameArray[j].value;

    
}

function posArray() {

    var numArray = (document.getElementsByName("numArray")); ///Getting numbers from input boxes using "name" tag

        for(var i=0; i<numArray.length; i++) { ///Looping through array

            if(numArray[i].value < 0)
                {
                    document.getElementById("answer4").innerHTML = "False..";
                    return false;}
                }
            
            document.getElementById("answer4").innerHTML = "True!";
            return true;

        }

       

        
        


