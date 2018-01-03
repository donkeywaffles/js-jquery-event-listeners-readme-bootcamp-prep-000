function getIt() {
  $('p').on('click', function() {
  alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').append('.tasty');  
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71) {
      alert('You pressed the "g" key'); 
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    if ($('input:first').val() === 'correct') {
      alert('Your form is going to be submitted now.');
    }
  }); 
}

$(document).ready(function(){

// call functions here

});
