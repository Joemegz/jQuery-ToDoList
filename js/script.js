
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

        
        $('#list').sortable(); //method to reorder elements in list or grid using the mouse
    }
    
    $('#input').keypress(function(e) { //adding a keypress function (e) is event
        if(e.which == 13) { //(e.which) is the property of of the event object, 13 is the numerical value for the enter key
            $('#button').click(); //when pressing the enter key it will act as a mouse click on the button element to add an item to the list
            event.preventDefault(); //cancels the default setting that makes the enter key completely refresh the page each time it is pressed
        }
    });
    
