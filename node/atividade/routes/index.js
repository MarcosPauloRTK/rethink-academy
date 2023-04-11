import express from "express";
import data from "./products.json" assert { type: "json" };
import Joi from "joi";

const router = express.Router();

function validateItem(item, presence = "optional") {
  const schema = Joi.object({
    id: Joi.number().greater(0),
    title: Joi.string().pattern(/([A-Z]{1}[a-z]+\ ?)+/),
    price: Joi.number().greater(0),
    description: Joi.string().min(10),
    category: Joi.string().valid(
      "men's clothing",
      "women's clothing",
      "jewelery",
      "electronics"
    ),
    image: Joi.string().pattern(
      /(?:http||https):\/\/fakestoreapi\.com\/img\/.*.jpg/
    ),
    rating: {
      rate: Joi.number().min(0).max(5),
      count: Joi.number().min(0),
    },
  });

  return schema.validate(item, [{ presence }]);
}

function checkItemExistence(id, response, errorMessage) {
  const item = data.find((item) => item.id === parseInt(id));

  if (item) {
    return item;
  } else {
    response.status(404).send(errorMessage);
    return;
  }
}

//GET
router.get("/", (request, response) => {
  response.send(data);
});

router.get("/:id", (request, response) => {
  response.send(
    data.find((item) => item.id === parseInt(request.params.id)) ||
      "No product found with the given ID."
  );
});

//POST
router.post("/", (request, response) => {
  const id = request.params.id;
  const newItem = {
    id: data.length + 1,
    ...request.body,
  };

  const { value, error } = validateItem(newItem, "required");

  if (error) {
    response.send(error.details[0].message);
    return;
  } else {
    data.push(value);
    response.send(value);
  }
});

//PATCH
router.patch("/:id", (request, response) => {
  const id = request.params.id;
  const item = checkItemExistence(
    id,
    response,
    "No item found with the given ID."
  );

  const { value, error } = validateItem(request.body);

  if (error) {
    response.send(error.details[0].message);
    return;
  } else {
    Object.keys(value)
      .filter((key) => key !== "id")
      .forEach((key) => (item[key] = value[key]));

    response.send(item);
  }
});

//DELETE
router.delete("/:id", (request, response) => {
  const item = data.find(({ id }) => id === parseInt(request.params.id));
  const index = data.indexOf(item);

  const removedItem = item ? data.splice(index, 1)[0] : undefined;
  response.send(removedItem || "No element was removed.");
});

export { router };
