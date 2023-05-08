const { Router } = require("express");
const router = Router();

router.route("/").get((req, res) => res.send("TU PTM"));

module.exports = router;
