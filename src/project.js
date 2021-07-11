export const projectsArr = []

class Project {
    constructor(name){
        this.tasks = []
        this.name = name

        const projectID = `${name}`.toLowerCase().split(" ").join("")
       
        this.id = projectID
    
    }
}

export default Project