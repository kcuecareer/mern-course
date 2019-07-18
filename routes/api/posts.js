const express = require("express");
const router = express.Router();

// @route GET api/posts
// @description Test route
// @access Public (vs Private route that needs a token)
router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
