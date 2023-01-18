const express = require('express');
const { createToken } = require('../auth/getToken');
const router = express.Router()

const defaultPath = process.env.DEFAULT_PATH_API

router.post(`/${defaultPath}/token/create-token`, createToken);

module.exports = router