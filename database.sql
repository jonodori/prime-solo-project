-- Create Database 'local_e-sports'
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "city" text,
    "zip_code" VARCHAR (5), 
    "organizer" boolean
);


CREATE TABLE "tournaments" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (50) NOT NULL,
    "primary_contact" VARCHAR (255), 
    "start_date" date,
    "end_date" date,
    "city" text, 
    "logo" varchar(255),
    "rules" text,
    "prizes" text, 
    "details" text,
    "schedule" text
);




CREATE TABLE "registrations" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user" NOT NULL,
  "tournaments_id" INT REFERENCES "tournaments" NOT NULL
);

CREATE TABLE "games" (
    "id" SERIAL PRIMARY KEY,
    "games" text NOT NULL
);



CREATE TABLE "tournaments_games" (
  "id" SERIAL PRIMARY KEY,
  "games_id" INT REFERENCES "games" NOT NULL,
  "tournaments_id" INT REFERENCES "tournaments_games" NOT NULL
);

CREATE TABLE "registration_games" (
  "id" SERIAL PRIMARY KEY,
  "registeration_id" INT REFERENCES "registrations" NOT NULL,
  "tournament_game_id" INT REFERENCES "tournaments_games" NOT NULL
);





