"use strict";

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}

function searchByVarious(){
    // Values from variousForm input.
    let firstNameInput = document.forms['variousForm']['fname'].value;
    let lastNameInput = document.forms['variousForm']['lname'].value;
    let genderInput = document.forms['variousForm']['gender'].value;
    let dobInput = document.forms['variousForm']['dob'].value;
    let heightInput = document.forms['variousForm']['height'].value;
    let weightInput = document.forms['variousForm']['weight'].value;
    let eyeColorInput = document.forms['variousForm']['eyecolor'].value;
    let jobInput = document.forms['variousForm']['occupation'].value;
    let parentsInput = document.forms['variousForm']['parents'].value;
    let spouseInput = document.forms['variousForm']['spouse'].value;

    let filteredTraits = people.filter(function (traits) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput && person.gender === genderInput){
            return true;
        }
        return false;
    });

}

function renderedTable(){
    let concat = ''
    people.map(function (person){
        return concat += `<tr>
        <td><img src="${person.photo}"></td>
        <td>${person.id}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.gender}</td>
        <td>${person.dob}</td>
        <td>${person.height}</td>
        <td>${person.weight}</td>
        <td>${person.eyeColor}</td>
        <td>${person.occupation}</td>
        <td>${person.parents}</td>
        <td>${person.currentSpouse}</td>
        </tr>`
    })
    document.getElementById("body").innerHTML = concat
}

renderedTable()

function singleSearchBar() {
    document.getElementById("singleDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
