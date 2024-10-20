const express = require("express");
const router = express.Router();


router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Usando  GET dentro da rota de produtos",
  });
});


router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Usando o POST dentro da rota produtos",
  });
});


router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;
  if (id === "especial") {
    res.status(200).send({
      message: "Você descobriu o ID especial",
    });
  } else {
    res.status(200).send({
      message: "Você passou um ID",
    });
  }
  res.status(200).send({
    message: "Usando um GET de um produto exclusivo",
    id: id,
  });
});



module.exports = router;
