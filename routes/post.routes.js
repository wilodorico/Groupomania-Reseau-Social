const express = require("express");
const postController = require("../controllers/post.controller");
const authJwt = require("../middleware/authJwt");
const multer = require("../middleware/multer-config");


const router = express.Router();

router.post("/", authJwt, multer, postController.createPost);



module.exports = router;