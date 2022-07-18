const { Router } = require('express');
const route = Router();

route.get("/:id?", (req, res) => {
  res.send([]);
});

route.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

route.put("/:id", (req, res) => {
  res.send({});
});

route.delete("/:id", (req, res) => {
  res.send({});
});
module.exports = route;