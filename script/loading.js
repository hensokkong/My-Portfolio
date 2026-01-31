import { showProject ,showTech } from "./button_show_exper.js";
import { project ,countProject} from "./data/data.js";

//loading screen
window.addEventListener('load', () => {
    const loading = document.getElementById('loadingScreen');
    const main = document.getElementById('mainContent');
    const secondmain = document.getElementById('tab');
    const footer = document.getElementById('footer');
   
    loading.style.transition = 'opacity 1s';
    loading.style.opacity = '0';

    setTimeout(() => {
        loading.style.display = 'none';
        
        main.style.display = 'block'; 
        secondmain.style.display='block';
        footer.style.display='block';
    }, 1000);
});
//load project
let projectItem =  document.querySelector('.js-projects');
let html = '';
    project.forEach((item)=>{
     if(item){
       html =   `<div class="col-md-3 hold-each-item js-item mt-3">
                                <img src="${item.image}" alt="my project"
                                    class="img-fluid my-project-img">
                                <h3 class="mt-2">${item.name}</h3>
                                <p>
                                    ${item.describe}
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <a href="${item.link}" class="d-flex align-items-center gap-2 text-decoration-none">
                                        <span>Live Demo</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                            width="24px" fill="#1f1f1f">
                                            <path
                                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                                        </svg>
                                    </a>
                                    

                                </div>

                            </div> <!--col-5-each-item-->
         `;
         projectItem.innerHTML += html;    
     }
      
    
})

 
const btnProject = document.querySelector('.js-btn-sh-pro');
const btnTech = document.querySelector('.js-btn-sh-tech');

btnProject.addEventListener('click', () => {
       showProject();

})
 btnTech.addEventListener('click', () => {
       showTech();

})
countProject();