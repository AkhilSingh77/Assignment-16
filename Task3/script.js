
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
    { type: "checkbox", id: "", name: "accept", required: "", checked: "", value: "", label: "" },
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
      label: "",
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

 function createText(element){
    const createInput = document.createElement("input");

    const form = document.getElementsByClassName('form')[0];
   const attri =Object.entries(element);
  const keyss = Object.keys(element);
  console.log("kk",keyss);
//   console.log(element.keyss[9]);
     console.log(attri);
   attri.forEach(([key,value])=>{
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
//   const formElement = document.getElementsByClassName("dynamic__form")[0];


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
    if(whatIsInputElement === "text" || whatIsInputElement === "email"|| whatIsInputElement === "password"){
        createText(singleInputs);
    }
    // else if(whatIsInputElement === "email"){
       
    // }
   })
  })

