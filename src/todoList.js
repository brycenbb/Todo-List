const todoItem = (title, description, dueDate, priority, completionStatus) => {

}

const todoList = () => {
    const itemArray = [];

    const addItem = (item) => {
        itemArray.push(item);
        restructure(itemArray);
    }

    return {addItem};
}