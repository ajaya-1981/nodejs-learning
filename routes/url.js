const express = require('express');
const urlRouter = express.Router();
const {handleGenerateNewShortURL, handleRedirectShortId, handleGetAnalytics} = require('../controllers/url')

urlRouter.post('/', handleGenerateNewShortURL);
urlRouter.get('/:shortId', handleRedirectShortId);
urlRouter.get('/analytics/:shortId', handleGetAnalytics);

module.exports = urlRouter;