var history = require("../HistoricalEvent/HistoricalEventController.js");
var event = require("../HistoricalEvent/HistoricalEvent.js");
var experience = require("../InfoAndExperiences/InfoAndExperiences.js");
var info = require("../InfoAndExperiences/InfoAndExperiencesController.js");
var usersList = require("./UserController.js");
var user = require("./User.js"),
assert = require("assert");

var member = new user("Dylan", "lp_90@gmail.com", true);
var member2 = new user("Laura", "l_jimenez@gmail.com", false);

var listUsers = new usersList();
assert(listUsers, "Creado controlador");

assert.equal(listUsers.isAdded(member), false);
listUsers.addUser(member);
assert.equal(listUsers.getUsersList().length, "1");
assert.equal(listUsers.isAdded(member), true);
assert.equal(member.getSubscription(), true);

listUsers.addUser(member2);
listUsers.deleteUser(member);
assert.equal(member.getSubscription(), false);
assert.equal(listUsers.getUsersList().length, "1");

listUsers.modifyUser(member2, member);
assert.equal(listUsers.getUsersList()[0].name, "Dylan");

var controllerEH = new history();
var historicalEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "");
controllerEH.addHistoricalEvent(historicalEvent);

var controllerIAE = new info();
var experience1 = new experience("Trans", "Que no se identifica con el género asignado al nacer", "lp_90@gmail.com");
controllerIAE.addInfoAndExperiences(experience1);

assert.equal(listUsers.sendInfoToUsers(controllerEH, controllerIAE), "Evento diario: Día del orgullo Día de celebración y reclamación de los derechos del colectivo\n" + "Experiencia diaria: Trans Que no se identifica con el género asignado al nacer \n");



console.log("El controlador de los usuarios ha pasado todos los tests");

