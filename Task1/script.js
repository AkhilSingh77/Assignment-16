const input1  = document.getElementsByClassName("wrapper--text")[0];

// console.log("ss",input1.value);

// let h ="hhhh";
// let ing = document.getElementsByClassName("dd")[0];

// const button = document.getElementsByClassName("wrapper--button")[0];
// button.addEventListener('click',()=>{


let allTags =[];

const tagContainer = document.getElementsByClassName("tagcontainer")[0];
const input  = document.getElementsByClassName("wrapper--text")[0];


function createTag(){
    tagContainer.querySelectorAll(".sitag").forEach(tag => tag.remove())
    allTags.forEach((tag)=>{
        let singleTag = `<div class="sitag">
          <p>${tag}</p>
          <i class="fa-regular fa-circle-xmark"></i>
        </div>`
        tagContainer.insertAdjacentHTML("afterbegin",singleTag);

    })
}

const button = document.getElementsByClassName("wrapper--button")[0];
button.addEventListener('click',()=>{
    let tag  = input.value;
    console.log(tag);
   if(tag.length>0 && !allTags.includes(tag)){
     tag.split(',').forEach((tag)=>{
        allTags.unshift(tag);
        console.log(allTags)
        createTag();
     })
   }
})