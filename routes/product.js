const { Router } = require('express');
const { PrismaClient } = require('@prisma/client');
const route = Router();
const prisma = new PrismaClient();

route.post("/", async (req, res) => {
  const { brand, price, color, name, image } = req.body;
  console.log(req.body);
  try {
    const product = await prisma.pRODUCT.create({
      data: {
        brand,
        color,
        image,
        name,
        price
      }
    })
    res.json(product);

  } catch (error) {
    console.log(error);
  }
});

route.get("/:id?", async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const products = await prisma.pRODUCT.findMany(
    );
    res.json(products);

  } catch (error) {
    console.log(error);
  }
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { brand, price, color, name, image } = req.body;
  console.log(id);
  const updateProduct = await prisma.pRODUCT.update({
    where: {
      id: parseInt(id)
    },
    data: {
      brand: brand,
      price: price,
      color: color,
      name: name,
      image: image
    }
  });
  res.json(updateProduct);
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await prisma.pRODUCT.delete({
    where: {
      id: parseInt(id),
    }
  })
  res.json(deleteProduct);
});
module.exports = route;