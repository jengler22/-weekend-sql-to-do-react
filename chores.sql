CREATE TABLE "chores" (
   "id" SERIAL PRIMARY KEY,
   "task" VARCHAR(200) NOT NULL,
   "finished" VARCHAR(50) DEFAULT 'NO'
);   

INSERT INTO "chores" ("task")
   VALUES ('clean the grill'),
          ('clean bathrooms'),
          ('sweep and mop floors');