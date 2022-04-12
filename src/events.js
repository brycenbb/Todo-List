import {todoList,todoItem} from "./todoList";
// import todoItem from "./todoList";

let eventSetup = () => {
    // let projectDiv = document.querySelector('.projectList');
    // projectDiv.childNodes.forEach(node => {
    //     node.addEventListener('click', display)
    // });
    let lastLoaded = null;
    console.log('to be completed');
    const listArray = [];
    let testList = todoList();
    listArray.push(testList);
    let test = todoItem("This is a test item", "not implemented yet","Dec 12","high",false);
    let test2 = todoItem("This is also a test item", "not implemented yet","Dec 12","medium",true);
    testList.addItem(test);
    testList.addItem(test2);

    document.getElementById('0').addEventListener('click',function() {
        if(lastLoaded != '0'){
            listArray['0'].clearDisplay();
            listArray['0'].loadList();
            lastLoaded = '0';

        }
    });
    //New item functionality. Creates a todoItem and adds it to the current project. Uses modal
    document.querySelector('.newListItemButton').addEventListener('click', function() {
        document.getElementById('form').classList.add('clicked');
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