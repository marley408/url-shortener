const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');
const User = require('../models/User');

const Url = require('../models/Url');

// @route POST /api/url/shorten
// @desc create short URL

// we need to create a short url and add it to a specific users doc
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get('baseUrl');
  console.log(longUrl);

  // check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(422).json('invalid base url');
  }

  // create url code
  const urlCode = shortid.generate();

  // check long url to see if it exists in db, if not create a new short one
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        });
        await url.save();

        const user = await User.findOneAndUpdate(
          { _id: '5d3a0f853d4b9305eefc6c8b' },
          { $push: { urls: url } }
        );

        console.log(user);

        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('server error');
    }
  } else {
    res.status(422).json('invalid long url');
  }
});

module.exports = router;
