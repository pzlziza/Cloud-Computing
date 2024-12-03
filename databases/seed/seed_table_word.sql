-- Seeder for word table
INSERT INTO alphabets (
    id, 
    word_name,
    video_url, 
    image_url, 
    word_description, 
    created_at, 
    created_by, 
    updated_at, 
    updated_by
)
VALUES 
    (
        uuid_generate_v4(),
        'Apple',
        'https://example.com/apple_video',
        'https://example.com/apple_image',
        'Apple is a popular fruit often associated with health.',
        now(),
        1,
        NULL,
        NULL
    ),
    (
        uuid_generate_v4(),
        'Book',
        'https://example.com/book_video',
        'https://example.com/book_image',
        'Books are sources of knowledge and entertainment.',
        now(),
        2,
        NULL,
        NULL
    ),
    (
        uuid_generate_v4(),
        'Car',
        'https://example.com/car_video',
        'https://example.com/car_image',
        'Cars are use for transportation and come in various types.',
        now(),
        3,
        NULL,
        NULL
    );
