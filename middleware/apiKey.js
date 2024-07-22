function apikey(req, res, next) {
  const api_key = "12345678";
  console.log(req.query);
  next();
}

module.exports = apikey;
