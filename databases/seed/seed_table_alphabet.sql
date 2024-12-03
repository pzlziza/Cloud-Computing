-- Seeder for alphabets table
INSERT INTO alphabets (
    id, 
    letter_name, 
    image_url, 
    letter_description, 
    created_at, 
    created_by, 
    updated_at, 
    updated_by
)
VALUES 
    (
        uuid_generate_v4(),
        'A',
        'https://example.com/a_image',
        'Huruf pertama dalam alphabet.',
        now(),
        1,
        NULL,
        NULL
    ),
    (
        uuid_generate_v4(),
        'B',
        'https://example.com/b_image',
        'Huruf kedua dalam alphabet.',
        now(),
        2,
        NULL,
        NULL
    ),
    (
        uuid_generate_v4(),
        'C',
        'https://example.com/c_image',
        'Huruf ketiga dalam alphabet.',
        now(),
        3,
        NULL,
        NULL
    );
