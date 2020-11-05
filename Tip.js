
// initilize function 
function  TipFunction() {

    var Bill = document.getElementById("Bill").value;
    var Service = document.getElementById("Service").value;
    var Sharing = document.getElementById("Sharing").value;
// checking for a wrong input 
    
    if(Bill===''|| Service==0){ // check if bill or service =0
        alert("please enter values");
        return;
    }

    if(Sharing<1|| Sharing===''){ // check if sharing <1
         Sharing=1;
    }

    // logic of the function 
    var total= Bill * Service/ Sharing ;
  var total=Math.ceil(total);

    // calling the function by press on "calculate" 
    
    document.getElementById("tip").innerHTML = total;
    addEventListener("keyup", function(event) { // let enter key run the func
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("calculate").click();
        }
    });
}




