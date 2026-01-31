const textProject = document.getElementById('hold-project-exper');
const textTech = document.getElementById('hold-tech-exper');


export function showProject() {
     textProject.style.display = 'block';
        textTech.style.display = 'none';
    
}
 export function showTech() {
     textTech.style.display = 'block';
        textProject.style.display = 'none';
   
}
