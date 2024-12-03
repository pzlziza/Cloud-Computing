const pool = require("../config/databases");

// Create a new gesture entry
const createGesture = async (request, h) => {
  const {
    gesture_name,
    video_url,
    video_description,
    detected_gesture,
    text_translation,
    media_input_type,
    created_by,
  } = request.payload;

  const query = `
    INSERT INTO gestures (
      gesture_name, video_url, video_description, detected_gesture, 
      text_translation, media_input_type, created_by
    ) VALUES ($1, $2, $3, $4, $5, $6, $7) 
    RETURNING *`;

  const values = [
    gesture_name,
    video_url,
    video_description,
    detected_gesture,
    text_translation,
    media_input_type,
    created_by,
  ];

  try {
    const result = await pool.query(query, values);
    return h
      .response({
        status: "success",
        message: "Gesture data created successfully.",
        data: result.rows[0],
      })
      .code(201);
  } catch (error) {
    return h.response({ status: "fail", message: error.message }).code(500);
  }
};

// Get all gestures
const getAllGestures = async (request, h) => {
  try {
    const result = await pool.query("SELECT * FROM gestures");
    return h
      .response({
        status: "success",
        data: result.rows,
      })
      .code(200);
  } catch (error) {
    return h.response({ status: "fail", message: error.message }).code(500);
  }
};

// Get a specific gesture by ID
const getGestureById = async (request, h) => {
  const { id } = request.params;

  try {
    const result = await pool.query("SELECT * FROM gestures WHERE id = $1", [
      id,
    ]);

    if (result.rowCount === 0) {
      return h
        .response({
          status: "fail",
          message: `Gesture with ID ${id} not found.`,
        })
        .code(404);
    }

    return h
      .response({
        status: "success",
        data: result.rows[0],
      })
      .code(200);
  } catch (error) {
    return h.response({ status: "fail", message: error.message }).code(500);
  }
};

// Update a specific gesture by ID
const updateGesture = async (request, h) => {
  const { id } = request.params;
  const {
    gesture_name,
    video_url,
    video_description,
    detected_gesture,
    text_translation,
    media_input_type,
    updated_by,
  } = request.payload;

  const query = `
    UPDATE gestures
    SET 
      gesture_name = $1,
      video_url = $2,
      video_description = $3,
      detected_gesture = $4,
      text_translation = $5,
      media_input_type = $6,
      updated_at = now(),
      updated_by = $7
    WHERE id = $8
    RETURNING *`;

  const values = [
    gesture_name,
    video_url,
    video_description,
    detected_gesture,
    text_translation,
    media_input_type,
    updated_by,
    id,
  ];

  try {
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return h
        .response({
          status: "fail",
          message: `Gesture with ID ${id} not found.`,
        })
        .code(404);
    }

    return h
      .response({
        status: "success",
        message: "Gesture updated successfully.",
        data: result.rows[0],
      })
      .code(200);
  } catch (error) {
    return h.response({ status: "fail", message: error.message }).code(500);
  }
};

// Delete a specific gesture by ID
const deleteGesture = async (request, h) => {
  const { id } = request.params;

  try {
    const result = await pool.query("DELETE FROM gestures WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return h
        .response({
          status: "fail",
          message: `Gesture with ID ${id} not found.`,
        })
        .code(404);
    }

    return h
      .response({
        status: "success",
        message: `Gesture with ID ${id} deleted successfully.`,
      })
      .code(200);
  } catch (error) {
    return h.response({ status: "fail", message: error.message }).code(500);
  }
};

module.exports = {
  createGesture,
  getAllGestures,
  getGestureById,
  updateGesture,
  deleteGesture,
};
