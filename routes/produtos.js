const express = require("express");
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retorna os produtos",
  });
});

//INSERE UM PRODUTO
router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "O produto foi adicionado",
  });
});

//RETORNA OS DADOS DE UM PRODUTO
router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;
  if (id === "especial") {
    res.status(200).send({
      message: "Você descobriu o ID especial",
      id: id,
    });
  } else {
    res.status(200).send({
      message: "Você passou um ID",
    });
  }
});

//ALTERA UM PRODUTO
router.patch("/", (req, res, next) => {
  res.status(201).send({
    message: "Altera um produto",
  });
});

//EXCLUI UM PRODUTO
router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Exclui um produto",
  });
});

module.exports = router;
