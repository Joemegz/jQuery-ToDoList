
function newItem() {
    
    let li = $('<li></li>'); 
    let inputValue = $('#input').val(); //pulling the value thru the ID from html
    li.append(inputValue); //appending the inputValue to the list node
    

    if (inputValue=== '') { //if the value is null we alert the message, or else we append it to the li
        alert ("You must write something!");
     } else {
        $('#list').append(li);
    }


 function crossOut() { //adding event handler click, triggers function when we click , it applies the strike
     li.toggleClass("strike"); //takes the style from css on how it deletes
}


li.on("dblclick", function crossOut() {  //adding event handler click, triggers function when we click , it applies the strike
    li.toggleClass("strike"); //takes the style from css on how it deletes
});

    let crossOutButton = $('<crossOutButton></crossOutButton>'); // adding empty crossOut button to the DOM
        crossOutButton.append(document.createTextNode('X')); //appending x to the crossOut button
        li.append(crossOutButton); // appends the crossOutButton the the li
        



    crossOutButton.on("click", deleteListItem); //adding event handler click, triggers function when we click , it applies the strike
        function deleteListItem() { //declaring the function to delete item from the list
            li.addClass("delete"); //takes the style from css on how it deletes
        }

        $('#list').sortable();
}