import eventSetup from './events';
import './style.css';

let home = () => {
    const content = document.getElementById('content');

    //Button to make a new list item, in the top right corner
    let newItemButton = document.createElement('button');
    newItemButton.type = "button";
    newItemButton.textContent = "+";
    // newItemButton.style.zIndex = "2";
    newItemButton.classList.add('newListItemButton');
    content.appendChild(newItemButton);

    //Form to take in new items, attached to content div but sits under it usually.
    let newForm = document.createElement('form');
    newForm.id = "form";
    newForm.classList.add('newItemForm');
    content.appendChild(newForm);

    //Populating form
    let header = document.createElement('div');
    header.textContent = "Create a new event:";
    header.classList.add('formHeader');
    newForm.appendChild(header);    

    let formBody = document.createElement('div');
    formBody.classList.add('formBody');

    let titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.required = true;
    titleInput.placeholder = "Event title";
    titleInput.maxLength = "40";
    formBody.appendChild(titleInput);

    let descriptionInput = document.createElement('textarea');
    descriptionInput.id = "description";
    descriptionInput.required = true;
    descriptionInput.placeholder = "Event description";
    descriptionInput.rows = "3";
    descriptionInput.style.resize = "none";
    formBody.appendChild(descriptionInput);
    

    newForm.appendChild(formBody);

    let taskbar = document.createElement('div');
    taskbar.classList.add('taskbar');

    //Populating taskbar
    let today = document.createElement('div');
    today.textContent = "Today";
    today.classList.add('taskbarItem')

    let week = document.createElement('div');
    week.textContent = "Week";
    week.classList.add('taskbarItem')

    let month = document.createElement('div');
    month.textContent = "Month";
    month.classList.add('taskbarItem')
    month.style.marginBottom = "50px";


    let projects = document.createElement('div');
    projects.id = "projects";
    let projectsHeader = document.createElement('div');
    projectsHeader.classList.add('listHeader');
    projectsHeader.textContent = "Projects";
    projects.appendChild(projectsHeader);

    let projectsNew = document.createElement('button');
    projectsNew.style.width = "fit-content";
    projectsNew.style.height = "fit-content";
    projectsNew.style.padding = "0 2px";
    projectsNew.style.marginLeft = "4px";
    projectsNew.style.fontSize = "0.8rem";
    projectsNew.style.display = "block";
    projectsNew.style.cursor = "pointer";

    projectsNew.type = "button";
    projectsNew.textContent = "+";
    projectsNew.id = "newList";
    projectsHeader.appendChild(projectsNew);

    projects.classList.add('taskbarItem')
    projects.classList.add('projectList')


    taskbar.appendChild(today);
    taskbar.appendChild(week);
    taskbar.appendChild(month);
    taskbar.appendChild(projects);

    //Populating container for task items and list viewing
    let container = document.createElement('div');
    container.classList.add('container');
    
    //Color scheme
    taskbar.classList.add('accent');
    container.classList.add('primary');

    content.appendChild(taskbar);
    content.appendChild(container);

    //Default list load

    let defaultProject = document.createElement('div');
    defaultProject.id = "0";
    defaultProject.textContent = "Default";

    let projectDiv = document.querySelector('.projectList');
    projectDiv.appendChild(defaultProject);

    eventSetup();
}
export default home;