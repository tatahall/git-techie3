const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://api.github.com/users/", {
        params
      })
  }
}