CREATE TABLE alphabets (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- Primary key untuk setiap alfabet
    letter CHAR(1) NOT NULL,                  -- Huruf alfabet (A-Z)
    image_url TEXT,                           -- URL gambar untuk huruf
    letter_description TEXT,                  -- Deskripsi atau detail huruf
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP -- Waktu data dimasukkan
);