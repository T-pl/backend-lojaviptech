const { Router } = require('express');
const route = Router();
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multerConfig = require('../multercontroller')


// route.post("/", multer(multerConfig).single("image") , (req, res) => {
//   const newImage = req.file;
//   console.log(newImage);
//   return res.json({ teste: "WORKS!" })
// })

route.post("/", multer(multerConfig).single("image"), async (req, res) => {
  const { brand, price, color, name } = req.body;
  const image = req.file;
  console.log(req.body);
  try {
    const product = await prisma.pRODUCT.create({
      data: {
        brand,
        color,
        image: `${'http://127.0.0.1:8081'}/${image.filename}`,
        name,
        price: parseFloat(price)
      }
    })
    res.json(product);

  } catch (error) {
    console.log(error);
  }
});

route.get("/:id?", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {

    if (req.params.id == undefined) {
      const products = await prisma.pRODUCT.findMany({

      });
      res.json(products);

    } else {
      const products = await prisma.pRODUCT.findUnique({
        where: {
          id: parseInt(id)
        }
      });
      res.json(products);

    }

  } catch (error) {
    console.log(error);
  }
});



route.put("/:id", multer(multerConfig).single("image"), async (req, res) => {
  const { id } = req.params;
  const { brand, price, color, name } = req.body;
  const image = req.file;
  const updateProduct = await prisma.pRODUCT.update({
    where: {
      id: parseInt(id)
    },
    data: {
      brand: brand,
      price: parseFloat(price),
      color: color,
      name: name,
      image: `${'http://127.0.0.1:8081'}/${image.filename}`,

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