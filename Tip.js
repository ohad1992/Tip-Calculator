// initilize function
function  tipFunction() {

    let Bill = document.getElementById("Bill").value;
    let Service = document.getElementById("Service").value;
    let Sharing = document.getElementById("Sharing").value;
    set(Bill, Service, Sharing);
    
    
}
// checking for a wrong input


    function set(Bill, Service, Sharing) {
        if (Bill === '' || Service === 0) { // check if bill or service =0
            alert("please enter values");
            return;
        }

        if (Sharing < 1 || Sharing === '') { // check if sharing <1
           Sharing = 1;
        }
        let total = logic(Bill, Service, Sharing);

    }

    function logic(Bill, Service, Sharing) {
       var total = Bill * Service / Sharing;
        let total= Math.ceil(total);
        tip(total);
    }

    // calling the function by press on "calculate"


    function tip(total) {
        document.getElementById("tip").innerHTML = total;
        addEventListener("keyup", function (event) { // let enter key run the func
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("calculate").click();
            }
        });
    }







