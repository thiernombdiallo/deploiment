// let rating_star = document.getElementById("rating-star");
let stars = document.querySelectorAll("#star");

function starPosition(id) {
  let note={
    
  }
  stars.forEach((star) => {
    star.setAttribute("class", "bi bi-star");
  });
  // alert('etoile '+id+" cliquée");
  for (let i = 0; i < id; i++) {
    stars[i].setAttribute("class", "bi bi-star-fill");
  }

}
