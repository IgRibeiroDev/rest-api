const express = require("express");
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retorna os pedidos",
  });
});

//INSERIR UM PEDIDO
router.post("/", (req, res, next) => {
  const pedido = {
    id_produto: req.body.id_produto,
    quantidade: req.body.quantidade,
  };
  res.status(201).send({
    message: "O pedido foi criado",
    pedidoCriado: pedido,
  });
});

//RETORNA DADOS DE UM PEDIDO
router.get("/:id_pedido", (req, res, next) => {
  const id = req.params.id_pedido;
  res.status(200).send({
    message: "Detalhes do pedido",
    id: id,
  });
});

//ALTERA UM PEDIDO
router.patch("/", (req, res, next) => {
  res.status(201).send({
    message: "Pedido alterado",
  });
});

//DELETA UM PEDIDO
router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Pedido excluido",
  });
});

module.exports = router;
