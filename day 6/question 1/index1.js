let person = [{
    name: "Amit",
    age: 150,
    planet: "earth",
    height: "5.2",
  },
  {
    name: "Sahil",
    age: 20,
    planet: "Earth",
    height: "5.1",
  },
  {
    name: "Thakur",
    age: 10,
    planet: "Earth",
    height: "5",
  },];
  
  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (person, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${person.name}</td>
      <td>${person.age}</td>
      <td>${person.planet}</td>
      <td>${person.height}</td>
      <td>
      <button onclick='deleteperson(${index})'>delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display(person);
  
  function addperson(e) {
    e.preventDefault();
    let person = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let planet = document.getElementById("planet").value;
    let height = document.getElementById("height").value;
    person.name = name;
    person.age = Number(age);
    person.planet = planet;
    person.height = height;
  
    person.push(person);
  
    display(person);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("planet").value = "";
    document.getElementById("height").value = "";
  }
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = person.filter(function (person) {
      return (
       person.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deleteperson(index) {
    person.splice(index, 1);
    display(person);
  }
  
  let updateIndex;
  
  function copyperson(index) {
    updateIndex = index;
    let person = person[index];
  
    document.getElementById("upname").value = person.name;
    document.getElementById("upage").value = person.age;
    document.getElementById("upplanet").value = person.planet;
    document.getElementById("upheight").value = person.height;
  }
  
  function updateperson(e) {
    e.preventDefault();
    let superhero = person[updateIndex];
    console.log(person);
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let planet = document.getElementById("upplanet").value;
    let height = document.getElementById("upheight").value;
    person.name = name;
    person.age = Number(age);
    person.planet = planet;
    person.height = height;
    console.log(person);
  
    display(person);
  
    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
  
  
  
 