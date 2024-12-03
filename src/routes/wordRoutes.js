const {
  createWord,
  getAllWords,
  getWordById,
} = require("../handler/wordHandler");

const wordRoutes = [
  {
    method: "POST",
    path: "/word",
    handler: createWord,
  },
  {
    method: "GET",
    path: "/word",
    handler: getAllWords,
  },
  {
    method: "GET",
    path: "/word/{id}",
    handler: getWordById,
  },
];

module.exports = { wordRoutes };
