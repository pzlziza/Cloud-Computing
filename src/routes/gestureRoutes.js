const {
  createGesture,
  getAllGestures,
  getGestureById,
  updateGesture,
  deleteGesture,
} = require("./handler/gestureHandler");

const gestureRoutes = [
  {
    method: "POST",
    path: "/gesture",
    handler: createGesture,
  },
  {
    method: "GET",
    path: "/gesture",
    handler: getAllGestures,
  },
  {
    method: "GET",
    path: "/gesture/{id}",
    handler: getGestureById,
  },
  {
    method: "PUT",
    path: "/gesture/{id}",
    handler: updateGesture,
  },
  {
    method: "DELETE",
    path: "/gesture/{id}",
    handler: deleteGesture,
  },
];

module.exports = { gestureRoutes };
