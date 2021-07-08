export const projectsArr = []

class Project {
    constructor(name){
        this.tasks = []
        this.name = name

        const projectID = `${name}`.toLowerCase().split(" ").join("")
       
        this.id = projectID
           
        const generateProjectCard = (() => {
            const sideBarDiv = document.querySelector(".sideBarDiv")
            const projectDiv = document.createElement("div")
            projectDiv.classList.add("projectDiv")
            projectDiv.setAttribute("id", projectsArr.length)
            projectDiv.textContent = this.name
            sideBarDiv.appendChild(projectDiv)
        })()

        

        return generateProjectCard;
    }
}

export default Project