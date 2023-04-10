const Joi = require("joi");
const express = require("express");
const app = express(); //COnvenção chamar o objeto express() de app

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" },
];

//GET
app.get("/", (request, response) => {
  response.send("Hello World! Novamente!");
});

app.get("/api/courses", (request, response) => {
  response.send(courses);
});

app.get("/api/courses/:id", (request, response) => {
  const result = courses.find(
    (element) => element.id === parseInt(request.params.id)
  );
  result
    ? response.send(result)
    : response.status(404).send("The course with the given ID was not find.");
});

//POST
app.post("/api/courses", (request, response) => {
  const { error } = validateCourse(request.body);

  if (error) {
    // 400 Bad Request
    response.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: request.body.name,
  };
  courses.push(course);

  response.send(course);
});

// PUT
app.put("/api/courses/:id", (request, response) => {
  const course = courses.find(
    (element) => element.id === parseInt(request.params.id)
  );
  if (!course) {
    response.status(404).send("The course with the given ID was not find.");
    return;
  }

  const { error } = validateCourse(request.body);
  if (error) {
    // 400 Bad Request
    response.status(400).send(error.details[0].message);
    return;
  }

  course.name = request.body.name;
  response.send(course);
});

// DELETE
app.delete("/api/courses/:id", (request, response) => {
  const course = courses.find(
    (element) => element.id === parseInt(request.params.id)
  );
  if (!course) {
    response.status(404).send("The course with the given ID was not find.");
    return;
  }

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  response.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

// No Windows usar $env:PORT="5000" no terminal para setar valor de PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
