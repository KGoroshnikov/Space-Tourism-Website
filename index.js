let buttonsPlanet = document.getElementsByClassName("btn-planet");
let buttonsPlanet_UNDERLINE = document.getElementsByClassName("btn-planet-underline");
let planetImg = document.getElementById("planet-img-js");
let planetName = document.getElementById("planet-chosen");
let planetDescription = document.getElementById("planet-description");
let planetDist = document.getElementById("distance-planet");
let planeteTravel = document.getElementById("time-planet");

let crewButtons = document.getElementsByClassName("btn-crew");
let crewImage = document.getElementById("crewImg");
let crewState = document.getElementById("crew-status");
let crewName = document.getElementById("crew-name");
let crewDescription = document.getElementById("crew-description");

let vehicleButtons = document.getElementsByClassName("btn-technology");
let vehicleTerm = document.getElementById("terminology-text");
let vehicleName = document.getElementById("name-text");
let vehicleDescription = document.getElementById("description-text");
let vehicleImg = document.getElementById("img-technology-js");

let menuMob = document.getElementById("mobile-menu");

fetch('data.json')
    .then((response) => response.json())
    .then((json) => loadData(json));
var mydata = null;
function loadData(json){
  mydata = json;
}

menuActive = false;
let timeAnimMob = 500;
function menuMobile(){
  menuActive = !menuActive;

  // right: 0;
  // left: 25vw;

  if (menuActive){
    menuMob.style.display = "block";

    const anim = menuMob.animate(
      [{ right: "-125vw", left: "100vw" }, { right: "0", left: "25vw" }],
      {
        fill: "forwards",
        easing: "ease",
        duration: timeAnimMob,
      }
    );
    anim.play();
  }
  else{
    setTimeout(() => {
      menuMob.style.display = "none";
    }, timeAnimMob);
    const anim = menuMob.animate(
      [{ right: "0", left: "25vw" }, { right: "-125vw", left: "100vw" }],
      {
        fill: "forwards",
        easing: "ease",
        duration: timeAnimMob,
      }
    );
    anim.play();
  }
}

function changePage(newPage){
  if (newPage == 0) window.location = "index.html";
  else if (newPage == 1) window.location = "destination-moon.html";
  else if (newPage == 2) window.location = "crew-commander.html";
  else if (newPage == 3) window.location = "technology-vehicle.html";
}

function fadeMe(el, start, end){
  const anim = el.animate(
    [{ opacity: "" + start }, { opacity: "" + end}],
    {
      fill: "forwards",
      easing: "ease",
      duration: 500,
    }
  );
  anim.play();
}

function choosePlanet(newPlanet){
  for(let i = 0; i < buttonsPlanet.length; i++){
    buttonsPlanet[i].style.color = "rgb(208, 214, 249)";
    buttonsPlanet_UNDERLINE[i].style.opacity = "0";
    buttonsPlanet_UNDERLINE[i].style.transform = "scaleX(0)";
  }
  buttonsPlanet[newPlanet].style.color = "white";
  buttonsPlanet_UNDERLINE[newPlanet].style.opacity = "1";
  buttonsPlanet_UNDERLINE[newPlanet].style.transform = "scaleX(1)";

  fadeMe(planetImg, 1, 0);
  fadeMe(planetName, 1, 0);
  fadeMe(planetDescription, 1, 0);
  fadeMe(planetDist, 1, 0);
  fadeMe(planeteTravel, 1, 0);

  setTimeout(changePlanetInfo, 500, newPlanet);
}

function changePlanetInfo(newPlanet){
  if (newPlanet == 0){
    planetImg.style.content = "url(assets/destination/image-moon.webp)";
  }
  else if (newPlanet == 1){
    planetImg.style.content = "url(assets/destination/image-mars.webp)";
  }
  else if (newPlanet == 2){
    planetImg.style.content = "url(assets/destination/image-europa.webp)";
  }
  else if (newPlanet == 3){
    planetImg.style.content = "url(assets/destination/image-titan.webp)";
  }

  planetName.textContent = mydata.destinations[newPlanet].name.toUpperCase();
  planetDescription.textContent = mydata.destinations[newPlanet].description;
  planetDist.textContent = mydata.destinations[newPlanet].distance.toUpperCase();
  planeteTravel.textContent = mydata.destinations[newPlanet].travel.toUpperCase();

  fadeMe(planetImg, 0, 1);
  fadeMe(planetName, 0, 1);
  fadeMe(planetDescription, 0, 1);
  fadeMe(planetDist, 0, 1);
  fadeMe(planeteTravel, 0, 1);
}

function chooseCrew(newCrew){
  for(let i = 0; i < crewButtons.length; i++)
    crewButtons[i].style.opacity = "0.2";
  crewButtons[newCrew].style.opacity = "1";

  fadeMe(crewImage, 1, 0);
  fadeMe(crewState, 1, 0);
  fadeMe(crewName, 1, 0);
  fadeMe(crewDescription, 1, 0);

  setTimeout(changeCrewInfo, 500, newCrew);
}

function changeCrewInfo(newCrew){
  crewImage.style.content = "url(" + mydata.crew[newCrew].images.webp + ")";
  crewState.textContent = mydata.crew[newCrew].role.toUpperCase();
  crewName.textContent = mydata.crew[newCrew].name.toUpperCase();
  crewDescription.textContent = mydata.crew[newCrew].bio;

  fadeMe(crewImage, 0, 1);
  fadeMe(crewState, 0, 1);
  fadeMe(crewName, 0, 1);
  fadeMe(crewDescription, 0, 1);
}

function chooseVehicle(newVehicle){
  for(let i = 0; i < vehicleButtons.length; i++)
  {
    vehicleButtons[i].style.border = "1px solid rgba(255, 255, 255, 0.4)";
    vehicleButtons[i].style.color = "white";
    vehicleButtons[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
  vehicleButtons[newVehicle].style.border = "1px solid rgba(255, 255, 255, 1)";
  vehicleButtons[newVehicle].style.color = "rgb(11, 13, 23)";
  vehicleButtons[newVehicle].style.backgroundColor = "white";
  
  fadeMe(vehicleDescription, 1, 0);
  fadeMe(vehicleName, 1, 0);
  fadeMe(vehicleTerm, 1, 0);
  fadeMe(vehicleImg, 1, 0);

  setTimeout(changeVehicleInfo, 500, newVehicle);
}

function changeVehicleInfo(newVehicle){
  if (window.screen.width <= 1350)
    vehicleImg.style.content = "url(" + mydata.technology[newVehicle].images.landscape + ")";
  else
    vehicleImg.style.content = "url(" + mydata.technology[newVehicle].images.portrait + ")";
  vehicleName.textContent = mydata.technology[newVehicle].name.toUpperCase();
  vehicleDescription.textContent = mydata.technology[newVehicle].description;

  fadeMe(vehicleImg, 0, 1);
  fadeMe(vehicleTerm, 0, 1);
  fadeMe(vehicleName, 0, 1);
  fadeMe(vehicleDescription, 0, 1);
}