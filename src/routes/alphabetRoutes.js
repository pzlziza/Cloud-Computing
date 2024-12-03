const {
  createAlphabet,
  getAllAlphabet,
  getAlphabetById,
} = require("./handler/alphabetHandler");

const alphabetRoutes = [
  {
    method: "POST",
    path: "/alphabet",
    handler: createAlphabet,
  },
  {
    method: "GET",
    path: "/alphabet",
    handler: getAllAlphabet,
  },
  {
    method: "GET",
    path: "/alphabet/{id}",
    handler: getAlphabetById,
  },
];

module.exports = { alphabetRoutes };
