const InputListconfig = [
  {
    type: "text",
    id: "full_name_id",
    name: "full_name",
    maxLength: "50",
    minLength: "2",
    pattern: "[A-Za-z ]+",
    placeholder: "Enter your full name",
    required: "true",
    value: "",
    label: "Name:",
  },
  {
    type: "email",
    id: "email_id",
    name: "email",
    maxLength: "30",
    minLength: "5",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    placeholder: "Enter your email",
    required: "true",
    value: "",
    label: "Email:",
  },
  {
    type: "checkbox",
    id: "accept_id",
    name: "accept",
    required: "true",
    // checked: undefined,
    value: "",
    label: "Accept Terms",
  },
  {
    type: "password",
    id: "password_id",
    name: "password",
    maxLength: "20",
    minLength: "8",
    pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
    placeholder: "Enter your password",
    required: "true",
    value: "",
    label: "Password:",
  },
  {
    type: "date",
    id: "dob_id",
    name: "dob",
    max: "2023-12-31",
    min: "2000-04-01",
    placeholder: "",
    required: "true",
    value: "",
    label: "Date of Birth:",
  },
  {
    type: "number",
    id: "marks_id",
    name: "marks",
    min: "0",
    max: "100",
    placeholder: "Enter your marks",
    required: "true",
    value: "",
    label: "Marks:",
  },
  {
    type: "radio",
    id: "gender_male_id",
    name: "gender",
    required: "true",
    // checked: "",
    value: "Male",
    label: "Male",
  },
  {
    type: "radio",
    id: "gender_female_id",
    name: "gender",
    required: "true",
    // checked: "",
    value: "Female",
    label: "Female",
  },
  {
    type: "select",
    id: "state_id",
    name: "state",
    required: "true",
    value: "delhi",
    label: "Choose State",
    options: [
      { label: "Delhi", value: "delhi" },
      { label: "Mumbai", value: "mumbai" },
      { label: "UP", value: "up" },
    ],
  },
  {
    type: "submit",
    id: "submit_id",
    name: "submit",
    value: "Submit",

  },
];


  const generateButton = document.getElementsByClassName("generate__form")[0];
  const formContainer = document.getElementsByClassName("form__container")[0];
//  console.log("formcontainer",formContainer);

 function createElementOtherThanSelect(element){
    const createInput = document.createElement("input");
    const createDiv = document.createElement("div");
    createDiv.classList.add("all-elements");
    const elementClass = element.id;
   createDiv.classList.add(`form__${elementClass}`);
    const form = document.getElementsByClassName('form')[0];
   const keyValueArray =Object.entries(element);
    //  console.log(keyValueArray); 
     keyValueArray.forEach(([key,value])=>{
   if(key == "label"){
    const createlabel = document.createElement("label");
    createlabel.innerText = value;
    createDiv.appendChild(createlabel);

   }
   else{
    // console.log("input2",createInput); 
    createInput.setAttribute(key, value);
    // console.log({key,value})
   }
   
   })
  //  console.log(createInput);
   createDiv.append(createInput);
   form.appendChild(createDiv);
  }



function createSelect(element){
  const selectElement = document.createElement("select");
  // console.log("selectss",selectElement);
  const createDiv = document.createElement("div");
  createDiv.classList.add("all-elements")
  const form = document.getElementsByClassName('form')[0];
 const keyValueArray =Object.entries(element);

  //  console.log("select",attri);
   keyValueArray.forEach(([key,value])=>{
 if(key == "label"){
  const createlabel = document.createElement("label");
 
  createlabel.innerText = value;
  createDiv.appendChild(createlabel);

  
 }
 else if(key === "options"){
  
   value.forEach(({label,value})=>{
    
    const createOption = document.createElement("option");
    createOption.innerText = label;
    createOption.setAttribute("value",value);
    selectElement.appendChild(createOption);

   })

 }
 else if(key === "type"){
    return;
 }
 else{
  selectElement .setAttribute(key, value);
 }
 
 })
//  console.log(createInput);
createDiv.append(selectElement);
 form.appendChild(createDiv);

}

function createButton(element){
//  console.log("button",element);
const createInput = document.createElement("input");

const form = document.getElementsByClassName('form')[0];
const keyValueArray =Object.entries(element);
//  console.log(keyValueArray); 
 keyValueArray.forEach(([key,value])=>{
// console.log("input2",createInput); 
createInput.setAttribute(key, value);


})
// //  console.log(createInput);

form.appendChild(createInput);

}

  generateButton.addEventListener("click",()=>{
    //form element create
    generateButton.classList.add('hide');
    const formElement =   document.createElement('form');
    formElement.classList.add("form");
    formContainer.appendChild(formElement);

 
   InputListconfig.forEach((singleInputs)=>{
    // console.log(singleInputs);
    const whatIsInputElement = singleInputs.type;
    // console.log(whatIsInputElement);
    if(whatIsInputElement === "text" || whatIsInputElement === "email"|| whatIsInputElement === "password" || whatIsInputElement === "date"|| whatIsInputElement === "number"|| whatIsInputElement === "radio" || whatIsInputElement === "checkbox"){
        createElementOtherThanSelect(singleInputs);
    }
    else if(whatIsInputElement === "select"){
        createSelect(singleInputs);
    }
    else{
      createButton(singleInputs);
    }
   })
  })

