import {todoList,todoItem} from "./todoList";
// import todoItem from "./todoList";

let eventSetup = () => {
    // let projectDiv = document.querySelector('.projectList');
    // projectDiv.childNodes.forEach(node => {
    //     node.addEventListener('click', display)
    // });
    console.log('to be completed');
    let testList = todoList();
    let test = todoItem("This is a test item", "not implemented yet","Dec 12","high",false);
    let test2 = todoItem("This is also a test item", "not implemented yet","Dec 12","medium",true);
    testList.addItem(test);
    testList.addItem(test2);
    testList.loadList();
    // test.display();
    // test2.display();
}

export default eventSetup;