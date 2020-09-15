window.onload = function () {
  let initialperson = [];

  if (localStorage.getItem("person") == null) {
    localStorage.setItem("person", JSON.stringify(initialperson));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let person;
  if (superarray == undefined) {
    person = JSON.parse(localStorage.getItem("person"));
  } else {
    person = superarray;
  }

  person.forEach(function (person, index) {
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

display();

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

  //   person.push(person);

  let person = JSON.parse(localStorage.getItem("person"));
  person.push(person);
  localStorage.setItem("person", JSON.stringify(person));

  display();

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("planet").value = "";
  document.getElementById("height").value = "";
}

function searchByName() {
  let searchValue = document.getElementById("searchName").value;
  let person = JSON.parse(localStorage.getItem("person"));
  let newdata = person.filter(function (person) {
    return (
      person.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}

function deleteperson(index) {
  let person = JSON.parse(localStorage.getItem("person"));
  person.splice(index, 1);
  localStorage.setItem("person", JSON.stringify(person));
  display();
}

let updateIndex;

function copyperson(index) {
  let person = JSON.parse(localStorage.getItem("person"));
  updateIndex = index;
  let person = person[index];

  document.getElementById("upname").value = person.name;
  document.getElementById("upage").value = person.age;
  document.getElementById("upplanet").value = person.planet;
  document.getElementById("upheight").value = person.height;
}

function updateperson(e) {
  e.preventDefault();
  let person = JSON.parse(localStorage.getItem("person"));
  let person = person[updateIndex];
  console.log(person);
  let name = document.getElementById("upname").value;
  let age = document.getElementById("upage").value;
  let planet = document.getElementById("upplanet").value;
  let height = document.getElementById("upheight").value;
  person.name = name;
  person.age = Number(age);
  person.planet = planet;
  person.height = height;

  localStorage.setItem("person", JSON.stringify(person));
  display(person);

  // code for hiding from anywhere
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

