
const skillsApi = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';

const fetchSkills = ()=> fetch(skillsApi).then(response=> response.json());

export {fetchSkills};