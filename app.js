(() => {

    // stating the variables 
    let toDoListArray = [];

    const form = document.querySelector(".form");
    const input = form.querySelector(".form_input");
    const ul = document.querySelector(".toDolist");

    // adding event listeners
    form.addEventListener('submit', e => {
        // preventing default behavior - page reload
        e.preventDefault();
        // giving the item a unique ID
        let itemId = String(Date.now());
        //assigning input value
        let toDoItem = input.value;
        // passing the ID an item into a function
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        
        // clearing the input box. (this is a default behavior but we have gotten rid of that)
        input.value = '';
    });

    ul.addEventListener('click', e => {
        let id = e.target.getAttribute ('data-id')
        if (!id) return // if the user click in something else
        // pass id through to functions
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    //functions
    function addItemToDOM(itemId, toDoItem){
        //creating an li
        const li = document.createElement('li')
        li.setAttribute("data-id", itemId);
        //adding todoitem text to li
        li.innerText = toDoItem
        // adding li to the DOM
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem){
        // adding item to array as an object with an ID so we can find and delete later
        toDoListArray.push({itemId, toDoItem});
        console.log(toDoListArray)
    }
    function removeItemFromDOM(id){
        // get the list item by data ID
        var li = document.querySelectorAll('[data-id="' + id + '"]');
        //remove list item
        ul.remove.appendChild(li);
    }
    function removeItemFromArray(id) {
        // creating a new toDolistArray with all the li that don't match the ID
        toDoListArray = toDoListArray.filter(item => item.itemId !== id);
        console.log (toDoListArray);
    }
})();