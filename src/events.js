import {todoList,todoItem} from "./todoList";
// import todoItem from "./todoList";

let eventSetup = () => {
    function formSubmitted() {
        console.log("form submitted successfully");
        let inputs = document.getElementById("form").elements;
        console.log(inputs);
        let item = todoItem(inputs[0].value,inputs[1].value,inputs[2].value,document.querySelector('input[name="prio"]:checked').value, false);
        console.log(lastLoaded);
        console.log(listArray);
        console.log(listArray[lastLoaded])
        listArray[lastLoaded].addItem(item);
        item.display();
    };

    let lastLoaded = null;
    // console.log('to be completed');
    const listArray = [];
    let testList = todoList();
    listArray.push(testList);
    let test = todoItem("This is a test item", "not implemented yet","Dec 12","high",false);
    let test2 = todoItem("This is also a test item", "not implemented yet","Dec 12","medium",true);
    testList.addItem(test);
    testList.addItem(test2);

    document.getElementById('0').addEventListener('click',function() {
        if(lastLoaded != Number('0')){
            listArray[Number('0')].clearDisplay();
            listArray[Number('0')].loadList();
            lastLoaded = Number('0');
            console.log('default list loaded');
        }
    });
    //New item functionality. Creates a todoItem and adds it to the current project. Uses modal
    document.querySelector('.newListItemButton').addEventListener('click', function() {
        document.getElementById('form').classList.add('clicked');
    });

    //Form submission default action override
    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault();
        event.stopPropagation();
        document.querySelector('.newItemForm').classList.remove('clicked');
        formSubmitted();
    });

    //New List functionality. Creates a div with a name, adds it to listArray, makes a new todoList
    document.getElementById('newList').addEventListener('click', function() {
        let newList = document.createElement('div');
        newList.id = listArray.length;
        newList.textContent = window.prompt('Please give this new list a name:');
        document.getElementById('projects').appendChild(newList);
        let listToAdd = todoList();
        listArray.push(listToAdd);
        listArray[listArray.length - 1].loadList();
        newList.addEventListener('click', function() {
            if(lastLoaded != newList.id){
                listArray[listArray.length - 1].clearDisplay();
                listArray[listArray.length - 1].loadList();
                lastLoaded = newList.id;
            }
        })
    });
}

export default eventSetup;