CREATE TABLE gestures (
    id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,        -- Primary key
    gesture_name VARCHAR(50) NOT NULL,       -- Nama gesture
    video_url TEXT,                           -- URL video gesture
    video_description TEXT,                   -- Deskripsi video
    detected_gesture VARCHAR(100),            -- Gesture yang terdeteksi
    text_translation TEXT,                    -- Teks hasil translasi
    media_input_type VARCHAR(50),            -- Image / video
    created_at timestamptz DEFAULT now() NOT NULL,
	created_by int4 NOT NULL,
	updated_at timestamptz NULL,
	updated_by int4 NULL
);