'use strict';

function getDogImage(breed) {
  fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status == 'success') {
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    );
    $('.results').removeClass('hidden');
  } else {
    alert('Something went wrong. Breed not found.');
  }
}

function watchForm() {
  $('form').submit((event) => {
    event.preventDefault();
    const inputBreed = $('.inputBreed').val();
    getDogImage(inputBreed);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
