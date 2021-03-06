CREATE TYPE borough_options AS ENUM ('Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island');

CREATE TABLE worst_of_users (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    borough borough_options,
    date_created TIMESTAMPTZ DEFAULT now() NOT NULL
);