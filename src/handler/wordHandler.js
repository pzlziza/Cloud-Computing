const pool = require("../config/databases");

// Create a new word entry
const createWord = async (request, h) => {
  const {
    word_name,
    video_url,
    image_url,
    word_description,
    media_input_type,
    created_by,
  } = request.payload;

  const query = `
      INSERT INTO word (
        word_meaning, video_url, text_url, text_translation,
        media_input_type, created_by
      ) VALUES ($1, $2, $3, $4, $5, $6, $6)
      RETURNING *`;

  const values = [
    word_name,
    video_url,
    image_url,
    word_description,
    media_input_type,
    created_by,
  ];

  try {
    const result = await pool.query(query, values);
    return h
      .response({
        status: "success",
        message: "Word created succesfully",
      })
      .code(201);
  } catch (error) {
    return h.response({ status: "fail", message: error.message }).code(500);
  }
};

// Get all word
const getAllWords = async (request, h) => {
  try {
    const result = await pool.query("SELECT * FROM word");
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

//get spesified word by id
const getWordById = async (request, h) => {
  const { id } = request.params;

  try {
    const result = await pool.query("SELECT * FROM word WHERE id =$1", [id]);

    if (result.rowCount === 0) {
      return h
        .response({
          status: "fail",
          message: `Word with ID ${id} not found.`,
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

module.exports = { createWord, getAllWords, getWordById };
