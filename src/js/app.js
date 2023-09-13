import { name } from "file-loader";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // conditional for name
  let nombre = `${variables.name}`;
  if (variables.name == null) {
    nombre = "Your Name";
  }

  // conditional for last name
  let apellido = `${variables.lastname}`;
  if (variables.lastname == null) {
    apellido = "Your Last Name";
  }

  // conditional for Rol
  let rol = "valor inicial";
  if (variables.role == null) {
    rol = "Role";
  } else {
    rol = `${variables.role}`;
  }

  // conditional for City
  let ciudad = "ciudad inicial";
  if (variables.city == null) {
    ciudad = "City";
  } else {
    ciudad = `${variables.city}`;
  }

  // conditional for Country
  let pais = "Pais inicial";
  if (variables.country == null) {
    pais = "country";
  } else {
    pais = `${variables.country}`;
  }

  // conditional for twitter
  let twit = "Github inicial";
  if (variables.twitter == null) {
    twit = "4geeksacademy";
  } else {
    twit = `${variables.twitter}`;
  }

  // conditional for Github
  let gith = "Github inicial";
  if (variables.github == null) {
    gith = "4geeksacademy";
  } else {
    gith = `${variables.github}`;
  }
  // conditional for instagram
  let link = "linkedin inicial";
  if (variables.linkedin == null) {
    link = "4geeksacademy";
  } else {
    link = `${variables.linkedin}`;
  }

  // conditional for instagram
  let insta = "instagram inicial";
  if (variables.instagram == null) {
    insta = "4geeksacademy";
  } else {
    insta = `${variables.instagram}`;
  }

  // reset the website body with the new html output

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}

          <img src="${variables.avatarURL}" class="photo" />
          <h1>${nombre}  ${apellido}</h1>
          <h2>${rol}</h2>
          <h3>${ciudad}, ${pais}</h3>
          <ul class='${variables.socialMediaPosition}'>
            <li><a href="https://twitter.com/${twit}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${gith}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${link}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${insta}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
