const container=document.querySelector(".task_elmt")
const newTaskInput=document.querySelector("#wrapper input");
const addBtn=document.querySelector("#add-btn");
const tasksContainer=document.querySelector("#tasks");
const task_elmt=document.querySelector(".task_elmt")
const error=document.getElementById("error");
const countValue=document.querySelector(".count-value");
const min=0
const max=100
let   valeur
let count=0

// gerons les valeurs limites du compteur
function champ(valeur){
    return Math.min(Math.max(valeur,min),max)
}
container.style.display="none"

addBtn.addEventListener("click",()=>{
    container.style.display="flex"
    if(newTaskInput.value.length<=4 || newTaskInput.value.trim()==""){
        // ici il faut gere l'effet d'apparition de l'erreur
        alert ("entrez une tache avec plus de caractere non vide")
    }else{
        task_elmt.insertAdjacentHTML('beforeend',`  
        <div class="task_button">
          <div class="check_text">
            <div class="check"></div>
            <div class="text"></div>
          </div>
          <div class="buttons">
            <div title="take value of field" class="edit"><img style="width: 2rem;" src="assets/images/edit.svg" alt="edit"></div>
            <div class="delete"><img style="width: 2rem;" src="assets/images/delete.svg" alt="delete"></div>
          </div>
        </div>`)
        count=count+1
        countValue.innerText=champ(count)
        const lastElmt=task_elmt.lastChild
        const check=lastElmt.querySelector('.check')
        const text=lastElmt.querySelector('.text')
        text.innerText=newTaskInput.value
        // set at first position
        task_elmt.prepend(lastElmt)
        // let manage event in new task
        // check option 
        let i=0
        check.addEventListener('click',()=>{
            i=i+1
            if (i%2==0){
            check.style.backgroundColor="white"
            text.style.textDecoration="none"
            count=count+1
            countValue.innerText=champ(count)
            // alert("pair coché")
            }else{
            check.style.backgroundColor="#5a95ff"
            text.style.textDecoration="line-through"
            // alert("impair decoché")
            count=count-1
            countValue.innerText=champ(count)
            }
        })
        // delete option
        const del=lastElmt.querySelector('.delete')
        del.addEventListener('click',()=>{
            lastElmt.remove()
            count=count-1
            countValue.innerText=champ(count)
            if (container.children.length==0){
                container.style.display="none"
            }  
        })
        countValue.innerText=champ(count)
        // edit option
        const edit =lastElmt.querySelector('.edit')
        edit.addEventListener('click',()=>{
            text.innerText = newTaskInput.value;
        }) 
    }

})