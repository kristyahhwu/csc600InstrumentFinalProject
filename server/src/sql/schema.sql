PRAGMA foreign_keys;

CREATE TABLE artists(
  artist_id int NOT NULL PRIMARY KEY,
  artist_name varchar NOT NULL,
);

INSERT INTO artists(artist_id, artist_name) VALUES (1, 'Blue Claw Philharmonic');
INSERT INTO artists(artist_id, artist_name) VALUES (2, 'Nursery Rhymes');

CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL,
	artist int,
);
INSERT INTO songs (id, song_title, notes, artist) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4',1);

INSERT INTO songs (id, song_title, notes, artist) 
VALUES (2, 'Jingle Bells', 'E4 E4 E4 E4 E4 E4 E4 G4 C4 D4 E4 F4 F4 F4 F4 F4 E4 E4', 2);
