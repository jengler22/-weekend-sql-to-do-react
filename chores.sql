CREATE TABLE "chores" (
   "id" SERIAL PRIMARY KEY,
   "task" VARCHAR(200) NOT NULL,
   "due" VARCHAR(50) NOT NULL
);   

INSERT INTO "chores" ("task","due")
   VALUES ('clean the grill', 'End of shift'),
          ('clean bathrooms', 'End of shift'),
          ('sweep and mop floors', 'End of day');