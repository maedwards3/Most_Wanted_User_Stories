"use strict";

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value.toLowerCase();
    let lastNameInput = document.forms['nameForm']['lname'].value.toLowerCase();

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName.toLowerCase() === firstNameInput || person.lastName.toLowerCase() === lastNameInput){
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

function idSearch(){
    // ID Search
    let idInput = document.forms['traitsForm']['id'].value;

    let filteredID = people.filter(function (person) {
        if(person.id === parseInt(idInput)) {
            return true;
        }
        return false;
    });
    console.log(filteredID);
    if(filteredID.length > 0){
        renderedTable(filteredID);
    }else{
    }
}

function genderSearch(){
    // Gender Search
    let genderInput = document.forms['traitsForm']['gender'].value.toLowerCase();

    let filteredGender = people.filter(function (person) {
        if(person.gender.toLowerCase() === genderInput) {
            return true;
        }
        return false;
    });
    console.log(filteredGender);
    if(filteredGender.length > 0){
        renderedTable(filteredGender);
    }else{
    }
}

function dobSearch(){
    // DOB Search
    let dobInput = document.forms['traitsForm']['dob'].value;

    let filteredDOB = people.filter(function (person) {
        if(person.dob === dobInput) {
            return true;
        }
        return false;
    });
    console.log(filteredDOB);
    if(filteredDOB.length > 0){
        renderedTable(filteredDOB);
    }else{
    }
}

function heightSearch(){
    // Height Search
    let heightInput = document.forms['traitsForm']['height'].value;

    let filteredHeight = people.filter(function (person) {
        if(person.height === parseInt (heightInput)) {
            return true;
        }
        return false;
    });
    console.log(filteredHeight);
    if(filteredHeight.length > 0){
        renderedTable(filteredHeight);
    }else{
    }
}

function weightSearch(){
    // Weight Search
    let weightInput = document.forms['traitsForm']['weight'].value;

    let filteredWeight = people.filter(function (person) {
        if(person.weight === parseInt (weightInput)) {
            return true;
        }
        return false;
    });
    console.log(filteredWeight);
    if(filteredWeight.length > 0){
        renderedTable(filteredWeight);
    }else{
    }
}

function eyeColorSearch(){
    // Eye Color Search
    let eyeColorInput = document.forms['traitsForm']['eyeColor'].value.toLowerCase();

    let filteredEyeColor = people.filter(function (person) {
        if(person.eyeColor.toLowerCase() === eyeColorInput) {
            return true;
        }
        return false;
    });
    console.log(filteredEyeColor);
    if(filteredEyeColor.length > 0){
        renderedTable(filteredEyeColor);
    }else{
    }
}

function jobSearch(){
    // Job Search
    let jobInput = document.forms['traitsForm']['occupation'].value.toLowerCase();

    let filteredJob = people.filter(function (person) {
        if(person.occupation.toLowerCase() === jobInput) {
            return true;
        }
        return false;
    });
    console.log(filteredJob);
    if(filteredJob.length > 0){
        renderedTable(filteredJob);
    }else{
    }
}

function parentsSearch(){
    // Parent Search
    let parentsInput = document.forms['traitsForm']['parents'].value;

    let filteredParents = people.filter(function (person) {
        if(person.parents === parseInt (parentsInput)) {
            return true;
        }
        return false;
    });
    console.log(filteredParents);
    if(filteredParents.length > 0){
        renderedTable(filteredParents);
    }else{
    }
}

function spouseSearch(){
    // Spouse Search
    let spouseidInput = document.forms['traitsForm']['currentSpouse'].value;

    let filteredSpouse = people.filter(function (person) {
        if(person.currentSpouse === parseInt (spouseidInput)) {
            return true;
        }
        return false;
    });
    console.log(filteredSpouse);
    if(filteredSpouse.length > 0){
        renderedTable(filteredSpouse);
    }else{
    }
}


function traitsSearch(){
    idSearch();
    genderSearch();
    dobSearch();
    heightSearch();
    weightSearch();
    eyeColorSearch();
    jobSearch();
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

renderedTableMW();

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
