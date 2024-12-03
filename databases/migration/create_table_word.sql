CREATE TABLE words (
    id INT AUTO_INCREMENT PRIMARY KEY,         -- Primary key untuk setiap kata
    word_name VARCHAR(100) NOT NULL,                -- Kata yang dipelajari
    video_url TEXT,                            -- URL video penjelasan kata
    image_url TEXT,                            -- URL gambar yang terkait dengan kata
    text_description TEXT,                          -- Penjelasan tambahan tentang kata
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP -- Waktu data dimasukkan
);