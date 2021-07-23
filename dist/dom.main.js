/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
// dom elements

const domElements = (() => {
  const container = document.createElement('div');
  const headerDiv = document.createElement('div');
  const logo = document.createElement('h1');
  const sideBarDiv = document.createElement('div');
  const projectsHeader = document.createElement('div');
  const projects = document.createElement('div');
  const addProjectButton = document.createElement('button');
  const mainContentContainer = document.createElement('div');
  const projectFormDiv = document.createElement('div');
  const projectInput = document.createElement('input');
  const projectSubBtn = document.createElement('button');
  const modalBlur = document.createElement('div');
  const modal = document.createElement('div');

  return {
    container,
    headerDiv,
    logo,
    sideBarDiv,
    projectsHeader,
    projects,
    addProjectButton,
    mainContentContainer,
    projectFormDiv,
    projectInput,
    projectSubBtn,
    modal,
    modalBlur
  };
})();

// window container

const renderMasterContainer = () => {
  domElements.container.classList.add('container');
  document.body.appendChild(domElements.container);
};

// header

const renderHeader = () => {
  domElements.headerDiv.classList.add('headerDiv');
  domElements.container.appendChild(domElements.headerDiv);
};

//logo

const renderLogo = () => {
  domElements.logo.classList.add('logo');
  domElements.logo.textContent = 'Project TODOs';
  domElements.headerDiv.appendChild(domElements.logo);
};

//sidebar

//sidebar container


const renderSideBarContainer = () => {
  domElements.sideBarDiv.classList.add('sideBarDiv');
  domElements.container.appendChild(domElements.sideBarDiv);
};

//sidebar header

const renderSideBarHeader = () => {
  domElements.projectsHeader.classList.add('projectsHeader');
  domElements.sideBarDiv.appendChild(domElements.projectsHeader);
  domElements.projectsHeader.textContent = 'PROJECTS';
};

//sidebar project nav container

const renderProjectsContainer = () => {
  domElements.projects.classList.add('projectsDiv');
  domElements.sideBarDiv.appendChild(domElements.projects);
};

//sidebar add new project

const renderAddProjectBtn = () => {
  domElements.addProjectButton.textContent = 'ADD PROJECT';
  domElements.addProjectButton.classList.add('addProjectButton');
  domElements.sideBarDiv.appendChild(domElements.addProjectButton);
  domElements.addProjectButton.style.transform = 'scale(0)';
};

//sidebar rendering

const renderSideBar = () => {
  renderSideBarContainer();
  renderSideBarHeader();
  renderProjectsContainer();
  renderAddProjectBtn();

  //refreshProjects();
  domElements.addProjectButton.addEventListener('click', () => {
    generateProjectForm();
  });
}

//main content container

const renderContentContainer = () => {
  
  domElements.mainContentContainer.classList.add('mainContentContainer');
  domElements.container.appendChild(domElements.mainContentContainer);
  generateProjectForm()
}

const generateProjectForm = () => {
  domElements.mainContentContainer.textContent = '';
 
  domElements.projectFormDiv.classList.add('projectFormDiv');
  domElements.mainContentContainer.appendChild(domElements.projectFormDiv);
  
  domElements.projectInput.setAttribute('id', 'projectInput');
  domElements.projectInput.setAttribute('type', 'text');
  domElements.projectInput.setAttribute('placeholder', 'What is the name of your project?');
  domElements.projectInput.classList.add('projectForm');
  domElements.projectInput.querySelector('.projectInput');
  domElements.projectInput.required = true;
  
  domElements.projectSubBtn.setAttribute('type', 'submit');
  domElements.projectSubBtn.textContent = 'CREATE PROJECT';
  domElements.projectSubBtn.classList.add('projectForm');
  domElements.projectSubBtn.setAttribute('id', 'projectSubBtn');
  domElements.projectFormDiv.appendChild(domElements.projectInput);
  domElements.projectFormDiv.appendChild(domElements.projectSubBtn);

  const projectFormInput = () => {
    const name = document.querySelector('#projectInput').value;
    return new Project(name);
  };

  const resetProjectForm = () => {
    const name = document.querySelector('#projectInput');
    name.value = '';
  };

  domElements.projectSubBtn.addEventListener('click', () => {
    projectsArr.push(projectFormInput());
    generateProjectCard(projectFormInput());
    console.table(domElements.projectsArr);
    resetProjectForm();
   // const addProjectButton = document.querySelector('.addProjectButton');
    domElements.addProjectButton.style.transform = 'scale(1)';
    saveToStorage();
  });
};


//modal functions

const renderModalBlur = () => {
domElements.modalBlur.classList.add('modalBlur');
document.body.appendChild(domElements.modalBlur);

}

const renderModal = () => {
  renderModalBlur()
  domElements.modal.classList.add('modal');
  domElements.modalBlur.appendChild(domElements.modal);
}

//full ui render

const renderUI = (() => {
  renderMasterContainer();
  renderHeader();
  renderLogo();
  renderSideBar()
  renderContentContainer()
  renderModal()
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsImZpbGUiOiJkb20ubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRvbSBlbGVtZW50c1xuXG5jb25zdCBkb21FbGVtZW50cyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBwcm9qZWN0U3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1vZGFsQmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGhlYWRlckRpdixcbiAgICBsb2dvLFxuICAgIHNpZGVCYXJEaXYsXG4gICAgcHJvamVjdHNIZWFkZXIsXG4gICAgcHJvamVjdHMsXG4gICAgYWRkUHJvamVjdEJ1dHRvbixcbiAgICBtYWluQ29udGVudENvbnRhaW5lcixcbiAgICBwcm9qZWN0Rm9ybURpdixcbiAgICBwcm9qZWN0SW5wdXQsXG4gICAgcHJvamVjdFN1YkJ0bixcbiAgICBtb2RhbCxcbiAgICBtb2RhbEJsdXJcbiAgfTtcbn0pKCk7XG5cbi8vIHdpbmRvdyBjb250YWluZXJcblxuY29uc3QgcmVuZGVyTWFzdGVyQ29udGFpbmVyID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMuY29udGFpbmVyKTtcbn07XG5cbi8vIGhlYWRlclxuXG5jb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLmhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJEaXYnKTtcbiAgZG9tRWxlbWVudHMuY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLmhlYWRlckRpdik7XG59O1xuXG4vL2xvZ29cblxuY29uc3QgcmVuZGVyTG9nbyA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMubG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gIGRvbUVsZW1lbnRzLmxvZ28udGV4dENvbnRlbnQgPSAnUHJvamVjdCBUT0RPcyc7XG4gIGRvbUVsZW1lbnRzLmhlYWRlckRpdi5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5sb2dvKTtcbn07XG5cbi8vc2lkZWJhclxuXG4vL3NpZGViYXIgY29udGFpbmVyXG5cblxuY29uc3QgcmVuZGVyU2lkZUJhckNvbnRhaW5lciA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMuc2lkZUJhckRpdi5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyRGl2Jyk7XG4gIGRvbUVsZW1lbnRzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5zaWRlQmFyRGl2KTtcbn07XG5cbi8vc2lkZWJhciBoZWFkZXJcblxuY29uc3QgcmVuZGVyU2lkZUJhckhlYWRlciA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMucHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNIZWFkZXInKTtcbiAgZG9tRWxlbWVudHMuc2lkZUJhckRpdi5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5wcm9qZWN0c0hlYWRlcik7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gJ1BST0pFQ1RTJztcbn07XG5cbi8vc2lkZWJhciBwcm9qZWN0IG5hdiBjb250YWluZXJcblxuY29uc3QgcmVuZGVyUHJvamVjdHNDb250YWluZXIgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzRGl2Jyk7XG4gIGRvbUVsZW1lbnRzLnNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMucHJvamVjdHMpO1xufTtcblxuLy9zaWRlYmFyIGFkZCBuZXcgcHJvamVjdFxuXG5jb25zdCByZW5kZXJBZGRQcm9qZWN0QnRuID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5hZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FERCBQUk9KRUNUJztcbiAgZG9tRWxlbWVudHMuYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gIGRvbUVsZW1lbnRzLnNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMuYWRkUHJvamVjdEJ1dHRvbik7XG4gIGRvbUVsZW1lbnRzLmFkZFByb2plY3RCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJztcbn07XG5cbi8vc2lkZWJhciByZW5kZXJpbmdcblxuY29uc3QgcmVuZGVyU2lkZUJhciA9ICgpID0+IHtcbiAgcmVuZGVyU2lkZUJhckNvbnRhaW5lcigpO1xuICByZW5kZXJTaWRlQmFySGVhZGVyKCk7XG4gIHJlbmRlclByb2plY3RzQ29udGFpbmVyKCk7XG4gIHJlbmRlckFkZFByb2plY3RCdG4oKTtcblxuICAvL3JlZnJlc2hQcm9qZWN0cygpO1xuICBkb21FbGVtZW50cy5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdlbmVyYXRlUHJvamVjdEZvcm0oKTtcbiAgfSk7XG59XG5cbi8vbWFpbiBjb250ZW50IGNvbnRhaW5lclxuXG5jb25zdCByZW5kZXJDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xuICBcbiAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRlbnRDb250YWluZXInKTtcbiAgZG9tRWxlbWVudHMuY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyKTtcbiAgZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpXG59XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gXG4gIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtRGl2Jyk7XG4gIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2KTtcbiAgXG4gIGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RJbnB1dCcpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdCBpcyB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3Q/Jyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQucXVlcnlTZWxlY3RvcignLnByb2plY3RJbnB1dCcpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBcbiAgZG9tRWxlbWVudHMucHJvamVjdFN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RTdWJCdG4udGV4dENvbnRlbnQgPSAnQ1JFQVRFIFBST0pFQ1QnO1xuICBkb21FbGVtZW50cy5wcm9qZWN0U3ViQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0U3ViQnRuJyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dCk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLnByb2plY3RTdWJCdG4pO1xuXG4gIGNvbnN0IHByb2plY3RGb3JtSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKS52YWx1ZTtcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuICAgIG5hbWUudmFsdWUgPSAnJztcbiAgfTtcblxuICBkb21FbGVtZW50cy5wcm9qZWN0U3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RzQXJyLnB1c2gocHJvamVjdEZvcm1JbnB1dCgpKTtcbiAgICBnZW5lcmF0ZVByb2plY3RDYXJkKHByb2plY3RGb3JtSW5wdXQoKSk7XG4gICAgY29uc29sZS50YWJsZShkb21FbGVtZW50cy5wcm9qZWN0c0Fycik7XG4gICAgcmVzZXRQcm9qZWN0Rm9ybSgpO1xuICAgLy8gY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgZG9tRWxlbWVudHMuYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG5cbi8vbW9kYWwgZnVuY3Rpb25zXG5cbmNvbnN0IHJlbmRlck1vZGFsQmx1ciA9ICgpID0+IHtcbmRvbUVsZW1lbnRzLm1vZGFsQmx1ci5jbGFzc0xpc3QuYWRkKCdtb2RhbEJsdXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMubW9kYWxCbHVyKTtcblxufVxuXG5jb25zdCByZW5kZXJNb2RhbCA9ICgpID0+IHtcbiAgcmVuZGVyTW9kYWxCbHVyKClcbiAgZG9tRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgZG9tRWxlbWVudHMubW9kYWxCbHVyLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLm1vZGFsKTtcbn1cblxuLy9mdWxsIHVpIHJlbmRlclxuXG5jb25zdCByZW5kZXJVSSA9ICgoKSA9PiB7XG4gIHJlbmRlck1hc3RlckNvbnRhaW5lcigpO1xuICByZW5kZXJIZWFkZXIoKTtcbiAgcmVuZGVyTG9nbygpO1xuICByZW5kZXJTaWRlQmFyKClcbiAgcmVuZGVyQ29udGVudENvbnRhaW5lcigpXG4gIHJlbmRlck1vZGFsKClcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==