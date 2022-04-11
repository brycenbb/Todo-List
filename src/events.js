import todoItem from "./todoList";

let eventSetup = () => {
    // let projectDiv = document.querySelector('.projectList');
    // projectDiv.childNodes.forEach(node => {
    //     node.addEventListener('click', display)
    // });
    console.log('to be completed');
    let test = todoItem("This is a test item", "not implemented yet","Dec 12","high",true);
    test.display();
}

export default eventSetup;