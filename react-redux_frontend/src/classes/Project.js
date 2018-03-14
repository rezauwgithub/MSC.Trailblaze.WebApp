import uniqid from 'uniqid';

class Project {

  projectId = null;
  projectName = null;
  creationDateTime = null;

  constructor(projectName) {
    this.projectId = uniqid();
    this.projectName = projectName;
    creationDateTime = Date();
  }


  getProjectId() {
    return projectId;
  }


  getProjectName() {
    return this.projectName;
  }


  getCreationDate() {
    return creationDateTime;
  }

}


export default new Project();