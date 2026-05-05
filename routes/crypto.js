const express = require("express");

const {
  listAll,
  listGainers,
  listNew,
  createCrypto,
} = require("../controllers/cryptoController");

const router = express.Router();

router.get("/crypto", listAll);
router.get("/crypto/gainers", listGainers);
router.get("/crypto/new", listNew);
router.post("/crypto", createCrypto);

module.exports = router;
