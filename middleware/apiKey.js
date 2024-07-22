function apikey(req, res, next) {
  const api_key = "12345678";
  const userApiKey = req.query.api_key;
  console.log(userApiKey);
  if (userApiKey && userApiKey === api_key) {
    next();
  } else {
    res.json({
      message: "not vallid api",
    });
  }
}

module.exports = apikey;
