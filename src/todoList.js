import svg from './check.svg';

const todoItem = (title, description, dueDate, priority, completionStatus) => {
    console.log("gettging threre");

    const switchState = (checkBox) => {
        if(completionStatus) {
            checkBox.classList.remove('unchecked');
            let img = document.createElement('img');
            img.src = svg;
            checkBox.appendChild(img);
            checkBox.style.border = "2px solid #26580F"
        }
        else {
            checkBox.classList.add('unchecked');
            if(checkBox.firstChild){
                checkBox.firstChild.remove();
            }
      
        }
    }
    const display = () => {
        const container = document.querySelector('.container');
        let box = document.createElement('div');
        box.classList.add('listItem');
        if(priority === "high"){
            box.style.borderLeft = "2px solid red";
        }
        else if(priority === "medium") {
            box.style.borderLeft = "2px solid yellow";
        }
        else {
            box.style.borderLeft = "2px solid green";
        }
        let checkBox = document.createElement('div');
        checkBox.style.width = "20px";
        checkBox.style.height = "20px";
        //Need to add a SVG to checkbox for its 2 states//
        switchState(checkBox);

        box.appendChild(checkBox);
        let text = document.createElement('div');
        text.textContent = title;
        text.style.paddingRight = "350px";
        box.appendChild(text);
        let date = document.createElement('div');
        date.textContent = dueDate;
        date.style.color = "#BB9BB0";
        box.appendChild(date);
        container.appendChild(box);
        return box;
    }
    return {display};
}

const todoList = () => {
    const itemArray = [];

    const addItem = (item) => {
        itemArray.push(item);
        restructure(itemArray);
    }

    return {addItem};
}

export default todoItem;