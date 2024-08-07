const input1  = document.getElementsByClassName("wrapper--text")[0];


let allTags =[];

const tagContainer = document.getElementsByClassName("tagcontainer")[0];
const input  = document.getElementsByClassName("wrapper--text")[0];

function removetag(element ,tag){
    let index = allTags.indexOf(tag);

    // console.log('hii');
    // console.log(element,tag);
    // console.log(index);
    allTags.splice(index,1);
    // console.log("new",allTags)
    element.parentElement.remove();
}

function createTag(){
    tagContainer.querySelectorAll(".sitag").forEach(tag => tag.remove())
    allTags.forEach((tag)=>{
        let singleTag = `<div class="sitag">
          <p>${tag}</p>
          <i class="fa-regular fa-circle-xmark cross" onclick ="removetag(this ,'${tag}')" ></i>
        </div>`
        tagContainer.insertAdjacentHTML("afterbegin",singleTag);

    })
}

const body = document.querySelector('body');
function functionality(){
    let value  = input.value;
    const condition =  document.getElementsByClassName("condition")[0];
    if(value=== ""){
        // alert("please enter tag");
    
     condition.textContent ="Please enter a tag"

    }
    else{
        condition.textContent =""  ; 
    }

    let tag = value.replace(/\s+/g, ' ').trim();

    
    // console.log(tag);
   if(tag.length>0 && !allTags.includes(tag)){
     tag.split(',').forEach((tag)=>{
        allTags.unshift(tag);
        // console.log(allTags)
        createTag();
     })
   }
   input.value ="";
}


 body.addEventListener('keydown',(event)=>{
    // console.log("hii")
    if(event.key === 'Enter'){
       functionality();
    }
 })
   
const button = document.getElementsByClassName("wrapper--button")[0];
button.addEventListener('click',()=>{

   functionality();
})