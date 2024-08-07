const countries = [
  "Brazil",
  "Bramble",
  "Bracelet",
  "Bravery",
  "Brash",
  "Canada",
  "Candy",
  "Candid",
  "Canvas",
  "Canyon",
  "Child",
  "Chill",
  "Chip",
  "China",
  "Chisel",
  "France",
  "Fracture",
  "Fragrance",
  "Frantic",
  "Germany",
  "German",
  "Germ",
  "Germinate",
  "India",
  "Indicate",
  "Individual",
  "Industry",
  "Induce",
  "Iran",
  "Iron",
  "Irate",
  "Irrelevant",
  "Irregular",
  "Japan",
  "Japanese",
  "Jape",
  "Mexico",
  "Mexican",
  "Mexicali",
  "Australia",
  "Dubai",
  "Uniform",
  "Unique",
  "United Kingdom",
  "United States",
];

countries.sort();

const input = document.getElementsByClassName("main__input")[0];
const listContainer = document.getElementsByClassName("main__listcontainer")[0];

// console.log("input",country);

input.addEventListener("input", (event) => {
  const country = Array.from(document.getElementsByClassName("country"));

  const inputvalue = event.target.value.toLowerCase();
  const value = inputvalue.trim();
  // console.log("value",value);
  if (!value.length > 0 || value === "") {
    country.forEach((single) => {
      // console.log("single",single)
      single.remove();
    });

    return;
  }

  //   const newarray = countries.some((country)=>{
  //    return country.includes(value);
  //     // console.log("ans",ans,);
  //     // if(ans){
  //     //     console.log(country);

  //     // }
  //   })\
  country.forEach((single) => {
    // console.log("single",single)
    single.remove();
  });

  const newarray = countries.filter((country) =>
    country.toLowerCase().includes(value)
  );
  // console.log(newarray);
  // if(!newarray.length >0){
  //   alert("word not present");
  //   return;
  // }

  newarray.forEach((country) => {
    const newelement = `<div class="country">${country}</div>`;
    listContainer.insertAdjacentHTML("afterbegin", newelement);
  });
});
