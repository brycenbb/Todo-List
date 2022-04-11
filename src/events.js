import todoItem from "./todoList";

let eventSetup = () => {
    // let projectDiv = document.querySelector('.projectList');
    // projectDiv.childNodes.forEach(node => {
    //     node.addEventListener('click', display)
    // });
    console.log('to be completed');
    let test = todoItem("This is a test item", "not implemented yet","Dec 12","high",false);
    let test2 = todoItem("This is a test item", "not implemented yet","Dec 12","high",true);

    test.display();
    test2.display();
}

export default eventSetup;