window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("imageBackToTop").style.display = "block";
  } else {
    document.getElementById("imageBackToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let showEvent = () => {
  fetch('/events').then(res => res.json())
  .then(
    res => console.log(res)
  )
}

let logOut = ()=> {
  window.location.assign('/')
}
