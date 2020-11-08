var info = require("./InfoAndExperiences.js");
var infoController = require("./InfoAndExperiencesController.js"),
assert = require("assert");

var controller = new infoController();
assert(controller, "Creado controlador de testimonios");
assert.equal(controller.getInfoAndExperiencesList().length,0);

var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "");
controller.addInfoAndExperiences(experience);
assert.equal(controller.getInfoAndExperiencesList().length,"1");

controller.modifyInfoAndExperiences(experience, "Cambio descripción");
assert.equal(controller.getInfoAndExperiencesList()[0].getDescription(), "Cambio descripción");
assert.equal(controller.getInfoAndExperiencesList().length,"1");

controller.deleteInfoAndExperiences(experience);
assert.equal(controller.getInfoAndExperiencesList().length,"0");


console.log("El controlador de términos y experiencias ha pasado todos los tests");
