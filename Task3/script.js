
const InputListconfig = [
    {
      type: "text",
      id: "",
      name: "full_name",
      maxLength: "",
      minLength: "",
      pattern: "",
      placeholder: "",
      required: "",
      value: "",
      label: "Name: ",
    },
    {
      type: "email",
      id: "",
      name: "email",
      maxLength: "",
      minLength: "",
      pattern: "",
      placeholder: "",
      required: "",
      value: "",
      label: "Email: ",
    },
    { type: "checkbox", id: "", name: "accept", required: "", checked: "", value: "", label: "Accept" },
    {
      type: "password",
      id: "",
      name: "password",
      maxLength: "",
      minLength: "",
      pattern: "",
      placeholder: "",
      required: "",
      value: "",
      label: "Password: ",
    },
    { type: "date", id: "", name: "dob", max: "", min: "", placeholder: "", required: "", value: "", label: "Date" },
    { type: "number", id: "", name: "marks", min: "", max: "", placeholder: "", required: "", value: "", label: "Number" },
    { type: "radio", id: "", name: "gender", required: "", checked: "", value: "Male", label: "Male" },
    { type: "radio", id: "", name: "gender", required: "", checked: "", value: "Female", label: "Female" },
    {
      type: "select",
      id: "",
      name: "state",
      required: "",
      value: "delhi",
      label: "Choose Country",
      options: [
        { label: "Delhi", value: "delhi" },
        { label: "Mumbai", value: "mumbai" },
        { label: "UP", value: "Up" },
      ],
    },
  ];

  const generateButton = document.getElementsByClassName("generate__form")[0];
  const formContainer = document.getElementsByClassName("form__container")[0];
//  console.log("formcontainer",formContainer);

 function createElementOtherThanSelect(element){
    const createInput = document.createElement("input");

    const form = document.getElementsByClassName('form')[0];
   const keyValueArray =Object.entries(element);
     console.log(keyValueArray); 
     keyValueArray.forEach(([key,value])=>{
   if(key == "label"){
    const createlabel = document.createElement("label");
    createlabel.innerText = value;
    form.appendChild(createlabel);
    console.log(createlabel);
    console.log("ll",key);

    
   }
   else{
    createInput.setAttribute(key, value);
   }
   
   })
   console.log(createInput);
   form.appendChild(createInput);
  }



function createSelect(element){
  const createSelect = document.createElement("select");
  console.log("selectss",createSelect);

  const form = document.getElementsByClassName('form')[0];
 const keyValueArray =Object.entries(element);

   console.log("select",attri);
   keyValueArray.forEach(([key,value])=>{
 if(key == "label"){
  const createlabel = document.createElement("label");
  createlabel.innerText = value;
  form.appendChild(createlabel);
  
 }
 else if(key === "options"){
  
   value.forEach(({label,value})=>{
    
    const createOption = document.createElement("option");
    createOption.innerText = label;
    createOption.setAttribute("value",value);
    createSelect.appendChild(createOption);

   })

 }
 else if(key === "type"){
    return;
 }
 else{
  createInput.setAttribute(key, value);
 }
 
 })
 console.log(createInput);
 form.appendChild(createInput);

}

  generateButton.addEventListener("click",()=>{
    //form element create
    generateButton.classList.add('hide');
    const formElement =   document.createElement('form');
    formElement.classList.add("form");
    formContainer.appendChild(formElement);

 
   InputListconfig.forEach((singleInputs)=>{
    console.log(singleInputs);
    const whatIsInputElement = singleInputs.type;
    console.log(whatIsInputElement);
    if(whatIsInputElement === "text" || whatIsInputElement === "email"|| whatIsInputElement === "password" || whatIsInputElement === "date"|| whatIsInputElement === "number"|| whatIsInputElement === "radio" || whatIsInputElement === "checkbox"){
        createElementOtherThanSelect(singleInputs);
    }
    else if(whatIsInputElement === "select"){
        createSelect(singleInputs);
    }
   })
  })
