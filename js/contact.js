
const contactForm = document.querySelector("#contact-form");
const customerName = document.querySelector("#name")
const nameError = document.querySelector("#nameError")
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const subject = document.querySelector("#subject")
const subjectError = document.querySelector("#subjectError")
const message = document.querySelector("#message")
const messageError = document.querySelector("#messageError")


function validateContactForm(event){
  event.preventDefault()

  if(checkLength(customerName.value,4) === true){
    nameError.style.display = "none";
  } else{
    nameError.style.display = "block";
  }

  if(validateEmail(email.value)=== true){
    emailError.style.display = "none";
  } else{
    emailError.style.display = "block";
  }



  if(checkLength(subject.value,14) === true){
    subjectError.style.display = "none";
  } else{
    subjectError.style.display = "block";
  }


  if(checkLength(message.value,24) === true){
    messageError.style.display = "none";
  } else{
    messageError.style.display = "block";
  }
}



function validateEmail(email){
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email)
  return patternMatches;
}


function checkLength(value, len){
  if(value.trim().length > len){
    return true;
  } else{
    return false;
  }

}

contactForm.addEventListener("submit", validateContactForm)


let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 62.59091, lng: 6.44561 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 17,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "The Tech Blog ™",
  });
}

initMap();
