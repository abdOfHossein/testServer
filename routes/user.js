const express = require('express');
const generalTool = require('../tools/generalTools');
const router = express.Router();

router.post('/user', (req, res) => {
    if (!req.body.userName || !req.body.job) {
        res.json({ message: `userName or job is empty` });
    }
    else {
        res.json({
            ...req.body,
            id: generalTool.getRandomInt(1, 999),
            date:new Date()
        })
    }
});





module.exports = router;