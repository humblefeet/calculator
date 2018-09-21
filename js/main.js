$(function(){
    /*----- constants -----*/

    /*----- app's state (variables) -----*/
    var firstArr = [];
    var firstDisplayNum;
    var secondDisplayNumber;
    var nextArr = [];
    var answer;
    var $display = $('#answer');

    /*----- cached element references -----*/
    var $clear = $('#ac').click(clearAll);
    // var $neg = $('#neg').click();
    // var $back = $('#back').click();

    // var $divide = $('#divide').click();
    // var $multiply = $('#multi').click();
    // var $minus = $('#minus').click();
    // var $addition = $('#addition').click();
    // var $equals = $('#equals').click();

    var $decimal = $('#decimal').click(numClick);
    var $zero = $('#zero').click(numClick);
    var $one = $('#one').click(numClick);
    var $two = $('#two').click(numClick);
    var $three = $('#three').click(numClick);
    var $four = $('#four').click(numClick);
    var $five = $('#five').click(numClick);
    var $six = $('#six').click(numClick);
    var $seven = $('#seven').click(numClick);
    var $eight = $('#eight').click(numClick);
    var $nine = $('#nine').click(numClick)
    /*----- event listeners -----*/




    /*----- functions -----*/
// User clicks on number
//      number is printed at top
//         number is stored as a variable(sting)
//             this number is added to the answer div
//             number is pushed to an array (as a string?)
    function numClick (evt){
        var num = evt.target.textContent;
        firstArr.push(num);
        firstDisplayNum = concatFirstArr(firstArr);
        console.log(firstDisplayNum);

    }
/*
        user clicks another number to add a digit to end of current displaying number
            update the variable to now hold the value of these 2 numbers (strings) concatenated
                push to end of array(as a string)*/
    function concatFirstArr(array){
        $display.html(array);
        var newInt = parseInt($display.html());
        return newInt;
        }


/*        back button is used to pop() from the end of the array
            this changes the display
//    User clicks on operators (/ * + -)
    // function theOperators(){
    //     switch(item){
    //         case ($multiply):
    //             return 
    //     }
    // }
/*           this is stored in another variable, which is a switch function essentially
        User clicks another number
            number is stored as variable
                this variable replaces the var displayed at top
                    display screen now = 2nd number
            push second number to a different array */

//Clear button
        function clearAll(){
            $display.html = "0";
            firstArr = [];
            nextArr = [];
            answer = [];
        }

            
           console.log("DOM is loaded!");

});