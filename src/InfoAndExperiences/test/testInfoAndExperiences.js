var info = require("../modelo/InfoAndExperiences.js"),
assert = require("assert");

var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "");
assert(experience, "Creado término");
assert.equal(experience.getEmail(), "");
assert.equal(experience.getName(), "Trans");
assert.equal(experience.getDescription(), "Que no se identifica con el género asignado al nacer");


var experience2 = new info("Experiencia", "Soy una persona gay que al fin ha podido casarse", "k_nl@gmail.com");
assert(experience2, "Creada experiencia");
assert.equal(experience2.getEmail(), "k_nl@gmail.com");
assert.equal(experience2.getName(), "Experiencia");
assert.equal(experience2.getDescription(), "Soy una persona gay que al fin ha podido casarse");

experience2.setDescription("Modificada la descripción");
assert.equal(experience2.getDescription(), "Modificada la descripción");

console.log("Los términos y experiencias han pasado todos los tests");
