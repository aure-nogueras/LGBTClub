var history = require("../HistoricalEvent/HistoricalEventController.js");
var event = require("../HistoricalEvent/HistoricalEvent.js");
var experience = require("../InfoAndExperiences/InfoAndExperiences.js");
var info = require("../InfoAndExperiences/InfoAndExperiencesController.js");
var usersList = require("./UserController.js");
var user = require("./User.js"),
assert = require("assert");

var member = new user("Dylan", "lp_90@gmail.com", true);
assert(member, "Creado usuario");
assert.equal(member.getUserLGTB(), true);

var historicalEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "lp_90@gmail.com");
var controllerEH = new history();
member.addHistoricalEvent(historicalEvent, controllerEH);
assert.equal(controllerEH.getHistoricalEventsList().length,"1");

member.deleteHistoricalEvent(historicalEvent, controllerEH);
assert.equal(controllerEH.getHistoricalEventsList().length,"0");

var historicalEvent2 = new event("Orgullo bisexual", 23, 9, 2020, "Día de visibilización de la bisexualidad", "d_lara@gmail.com");
controllerEH.addHistoricalEvent(historicalEvent2);
member.deleteHistoricalEvent(historicalEvent2, controllerEH);
assert.equal(controllerEH.getHistoricalEventsList().length,"1");

member.notifyErrorHistoricalEvent(historicalEvent2, controllerEH);
assert.equal(controllerEH.getHistoricalEventsList().length,"0");

var controllerIAE = new info();
var experience1 = new experience("Trans", "Que no se identifica con el género asignado al nacer", "lp_90@gmail.com");
member.addInfoAndExperiences(experience1, controllerIAE);
assert.equal(controllerIAE.getInfoAndExperiencesList().length,"1");

member.modifyInfoAndExperiences(experience1, "Descripción nueva", controllerIAE);
assert.equal(controllerIAE.getInfoAndExperiencesList().length,"1");
assert.equal(experience1.getDescription(),"Descripción nueva");

member.deleteInfoAndExperiences(experience1, controllerIAE);
assert.equal(controllerIAE.getInfoAndExperiencesList().length,"0");

var experience2 = new experience("Bisexual", "Orientación sexual que indica atracción por el propio género y el resto", "");
controllerIAE.addInfoAndExperiences(experience2);
member.deleteInfoAndExperiences(experience2, controllerIAE);
assert.equal(controllerIAE.getInfoAndExperiencesList().length,"1");

var member2 = new user("Laura", "l_jimenez@gmail.com", false);
assert(member2, "Creado usuario");
assert.equal(member2.getUserLGTB(), false);

member2.modifyInfoAndExperiences(experience2, "Cambio en la descripción", controllerIAE);
assert.equal(experience2.getDescription(), "Orientación sexual que indica atracción por el propio género y el resto");


var listUsers = new usersList();
member.addUser(listUsers);
assert.equal(listUsers.getUsersList().length, "1");

member2.addUser(listUsers);
member.deleteUser(listUsers);
assert.equal(listUsers.getUsersList().length, "1");


console.log("Los usuarios han pasado todos los tests");
