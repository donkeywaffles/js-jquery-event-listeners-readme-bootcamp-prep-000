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
    if(key.which === parseInt('G')) {
      
    }
  })
}

$(document).ready(function(){

// call functions here

});
