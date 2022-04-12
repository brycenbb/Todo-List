import svg from './check.svg';

const todoItem = (title, description, dueDate, priority, completionStatus) => {
    console.log("gettging threre");

   const priorityColor = () => {
        if(priority === "high"){
            return "2px solid red";
        }
        else if(priority === "medium") {
            return "2px solid orange";
        }
        else {
            return "2px solid green";
        }
   }
   
   
    const switchState = (checkBox) => {
        if(completionStatus) {
            checkBox.classList.remove('unchecked');
            let img = document.createElement('img');
            img.src = svg;
            checkBox.appendChild(img);
            checkBox.style.border = "2px solid #26580F"
            completionStatus = false;
            checkBox.parentNode.classList.add('crossout');
            checkBox.parentNode.style.borderLeft = "2px solid black";
        }
        else {
            checkBox.style.border = "2px solid red"
            if(checkBox.firstChild){
                checkBox.firstChild.remove();
            }
            checkBox.parentNode.classList.remove('crossout');
            completionStatus = true;
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
        switchState(checkBox);
        checkBox.addEventListener('click', function() {
            switchState(checkBox);
        });
        checkBox.style.cursor = "pointer";

        let text = document.createElement('div');
        text.textContent = title;
        //This is a note about aligning the various components inside each listItem
        //As different text lengths change the alignment, maxWidth is not helping
        //By itself.
        text.style.maxWidth = "500px";
        text.style.paddingRight = "350px";
        box.appendChild(text);
        text.parentNode.style.overflowX = "scroll";
        let date = document.createElement('div');
        date.textContent = dueDate;
        date.style.color = "#A288A6";
        box.appendChild(date);
        container.appendChild(box);
        return box;
    }
    return {display};
}

const todoList = () => {
    console.log('really getting there');
    const itemArray = [];

    const addItem = (item) => {
        itemArray.push(item);
        //Need to implement some sort of sorting of list items
        // restructure(itemArray);
    };

    const removeItem = (item) => {
        itemArray.splice(itemArray.indexOf(item),1);
    };

    const loadList = () => {
        itemArray.forEach(element => {
            element.display();
        });
    };

    return {addItem,removeItem,loadList};
}

export {todoItem, todoList};
// export function todoList();
// export function todoItem();