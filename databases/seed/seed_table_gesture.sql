-- Seeder for gestures table
INSERT INTO gestures (
    id, 
    gesture_name, 
    video_url, 
    video_description, 
    detected_gesture, 
    text_translation, 
    media_input_type, 
    created_at, 
    created_by, 
    updated_at, 
    updated_by
)
VALUES 
    (
        uuid_generate_v4(),
        'Wave',
        'https://example.com/wave.mp4',
        'A waving gesture to say hello.',
        'Wave detected',
        'Hello',
        'video',
        now(),
        1,
        NULL,
        NULL
    ),
    (
        uuid_generate_v4(),
        'Thumbs Up',
        'https://example.com/thumbsup.mp4',
        'A thumbs-up gesture to indicate approval.',
        'Thumbs up detected',
        'Good job!',
        'video',
        now(),
        2,
        NULL,
        NULL
    ),
    (
        uuid_generate_v4(),
        'Pointing',
        'https://example.com/pointing.mp4',
        'A pointing gesture to indicate direction.',
        'Pointing detected',
        'That way',
        'video',
        now(),
        3,
        NULL,
        NULL
    ),
    (
        uuid_generate_v4(),
        'Clapping',
        'https://example.com/clapping.mp4',
        'A clapping gesture to show appreciation.',
        'Clapping detected',
        'Great work!',
        'video',
        now(),
        1,
        NULL,
        NULL
    ),
    (
        uuid_generate_v4(),
        'Stop Sign',
        'https://example.com/stop.mp4',
        'A stop sign gesture to indicate pause or stop.',
        'Stop sign detected',
        'Stop!',
        'video',
        now(),
        2,
        NULL,
        NULL
    );
