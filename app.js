"use strict";

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput || person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    console.log(filteredPeople);
    if(filteredPeople.length > 0){
        renderedTable(filteredPeople);
    }else{
        alert("There is no one matching that name, try again.");
    }
}

function genderSearch(){
    // Gender Search
    let genderInput = document.forms['variousForm']['gender'].value;
    let filteredGender = people.filter(function (person) {
        if(person.gender === genderInput){
            return true;
        }
        return false;
    });
    console.log(filteredGender);
    if(filteredPeople.length > 0){
        renderedTable(filteredGender);
    }else{
        alert("No gender match");
    }
}

function renderedTable(foundPeople){
    let concat = ''
    foundPeople.map(function (person){
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

function renderedTableMW(){
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
    document.getElementById("listdata").innerHTML = concat
}

renderedTableMW()
















































































































































let idInput = document.forms['snglSearch']['id'].value
let firstNameInput = document.forms['snglSearch']['fname'].value
let lastNameInput = document.forms['snglSearch']['lname'].value
let genderInput = document.forms['snglSearch']['gender'].value
let dobInput = document.forms['snglSearch']['dob'].value
let heightInput = document.forms['snglSearch']['height'].value
let weightInput = document.forms['snglSearch']['weight'].value
let eyeColorInput = document.forms['snglSearch']['eyecolor'].value
let jobInput = document.forms['snglSearch']['occupation'].value
let parentsInput = document.forms['snglSearch']['parents'].value
let spouseInput = document.forms['snglSearch']['spouse'].value

function singleSearchBar(){
    let concat = '';
    people.filter(function(person){
        if(el === idInput || firstNameInput || lastNameInput || genderInput || dobInput || heightInput || weightInput || eyeColorInput || jobInput || parentsInput ||
            spouseInput){
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
            }
    })
    document.getElementById("listdata").innerHTML = concat
}

singleSearchBar();