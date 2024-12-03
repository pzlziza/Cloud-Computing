const {
  createWord,
  getAllWords,
  getWordById,
} = require("./handler/wordHandler");

const gestureRoutes = [
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
  {
    method: "PUT",
    path: "/word/{id}",
    handler: updateWord,
  },
];

module.exports = { gestureRoutes };
