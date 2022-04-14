import svg from './check.svg';
import eventSetup from './events';

const todoItem = (title, description, dueDate, priority, completionStatus) => {
    let initialLoad = true;
   const priorityColor = () => {
        if(priority === "high"){
            return "2px solid red";
        }
        else if(priority === "med") {
            return "2px solid orange";
        }
        else {
            return "2px solid green";
        }
   }
   
    const switchState = (checkBox) => {
        if(completionStatus === false) {
            let img = document.createElement('img');
            img.src = svg;
            checkBox.appendChild(img);
            checkBox.style.border = "2px solid #26580F"
            completionStatus = true;
            checkBox.parentNode.classList.add('crossout');
            checkBox.parentNode.style.borderLeft = "2px solid black";
        }
        else{
            checkBox.style.border = "2px solid red"
            if(checkBox.firstChild){
                checkBox.firstChild.remove();
            }
            checkBox.parentNode.classList.remove('crossout');
            completionStatus = false;
            checkBox.parentNode.style.borderLeft = priorityColor();
        }
    }

    const display = () => {
        const container = document.querySelector('.container');

        let box = document.createElement('div');
        box.classList.add('listItem');
        box.style.borderLeft = priorityColor();
        let checkBox = document.createElement('div');
        checkBox.style.width = "20px";
        checkBox.style.height = "20px";


        box.appendChild(checkBox);
        if(completionStatus) {
            let img = document.createElement('img');
            img.src = svg;
            checkBox.appendChild(img);
            checkBox.style.border = "2px solid #26580F"
            checkBox.parentNode.classList.add('crossout');
            checkBox.parentNode.style.borderLeft = "2px solid black";
        }
        else {
            checkBox.style.border = "2px solid red"
            if(checkBox.firstChild){
                checkBox.firstChild.remove();
            }
            checkBox.parentNode.classList.remove('crossout');
            checkBox.parentNode.style.borderLeft = priorityColor();
        }
    

        checkBox.addEventListener('click', function() {
            switchState(checkBox);
        });
        checkBox.style.cursor = "pointer";

        let text = document.createElement('div');
        text.textContent = title;


        text.style.maxWidth = "500px";
        // text.style.paddingRight = "350px";
        box.appendChild(text);
        text.parentNode.style.overflowX = "scroll";
        let date = document.createElement('div');
        date.classList.add('dateDisplayDiv');
        date.textContent = dueDate;
        date.style.color = "#A288A6";
        box.appendChild(date);
        //delete functionality button
        let deleteButton = document.createElement('button');
        deleteButton.type = "button";
        deleteButton.classList.add('test');
        deleteButton.textContent="X";
        deleteButton.style.opacity="100%";
        box.appendChild(deleteButton);
        
        container.appendChild(box);
        return box;
    }
    console.log("Item created");

    return {display};
}

const todoList = () => {
    let itemArray = [];
    const array = () => {
        console.log(itemArray);
    }
    const addItem = (item) => {
        itemArray.push(item);
        // console.log(itemArray);
        // console.log(itemArray.indexOf(item));
        //Need to implement some sort of sorting of list items
        // restructure(itemArray);
    };

    const removeItem = (index) => {
        console.log('inside remove');
        console.log(itemArray[index]);
        // console.log('index is:');
        // console.log(itemArray.indexOf(itemArray[index]));
        // console.log('object is:');
        // console.log(index);
        itemArray.splice(index,1);
        // itemArray = itemArray.splice(itemArray.indexOf(item),1);
        clearDisplay();
        loadList();
    };

    const loadList = () => {
        itemArray.forEach(element => {
            element.display();
        });
    };

    const clearDisplay = () => {
        const container = document.querySelector('.container');
        let child = container.firstChild;
        while(child) {
            child.remove();
            child = container.firstChild;
        }
    };
    console.log('List created');

    return {addItem,removeItem,loadList,clearDisplay,array};
}

export {todoItem, todoList};
// export function todoList();
// export function todoItem();