// const button = document.getElementById("test");

// const modal = document.getElementById("modal");

// button.addEventListener("click", (event) => {
//     modal.getAnimations.toggle("circle-animation");
// });


$('button').click(function() {
    $(".circle-animation").addClass('animated');
    setTimeout(function() {
      $(".circle-animation").removeClass('animated');
    }, 1500);
  });