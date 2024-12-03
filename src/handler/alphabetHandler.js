const pool = require("../config/databases");

// create new alphabet
const createAlphabet = async (request, h) => {
  const { letter_name, image_url, letter_description, created_by } =
    request.payload;

  const query = `
     INSERT INTO alphabet (
     letter_name, image_url, letter_description, created_by
    ) VALUES ($1, $2, $3, $4)
    RETURNING *;`;

  const values = [letter_name, image_url, letter_description, created_by];

  try {
    const result = await pool.query(query, values);
    return h
      .response({
        status: "success",
        message: "Alphabet created succesfully",
        data: result.rows[0],
      })
      .code(201);
  } catch (error) {
    return h
      .response({ status: "fail", message: "Failed to create alphabet" })
      .code(500);
  }
};

//Get all Alphabet
const getAllAlphabet = async (request, h) => {
  try {
    const result = await pool.query("SELECT * FROM alphabet");
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

// get spesific alphabet by ID
const getAlphabetById = async (request, h) => {
  const { id } = request.param;

  try {
    const result = await pool.query("SELECT * FROM gestures WHERE id = $1", [
      id,
    ]);

    if (result.rowCount === 0) {
      return h
        .response({
          status: "fail",
          message: `Letter with ID ${id} not found`,
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

//update alphabet by ID

module.exports = { createAlphabet, getAllAlphabet, getAlphabetById };
