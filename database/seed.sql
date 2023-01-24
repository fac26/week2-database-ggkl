BEGIN;

INSERT INTO films (name, year, director, genre_id) VALUES 
(Jaws, 1975, Steven Spielberg, 1),
(Star Wars, 1977, George Lucas, 2),
(The Empire Strikes Back, 1980, Irvin Kershner, 2),
(The Godfather, 1972, Francis Ford Coppola, 3),
(The Godfather: Part II, 1974, Francis Ford Coppola, 3),
ON CONFLICT DO NOTHING;

INSERT INTO genres (name) VALUES
(Horror),
(Sci-Fi),
(Drama),
(Comedy),
(Action),
(Thriller),
(Mystery),
(Crime),
(Adventure),
(Fantasy),
(Biography),
(War),
(History),
(Musical),
(Family),
(Romance),
(Sport),
(Animation),
(Documentary),
(Music),
(Short),
(Adult),
ON CONFLICT DO NOTHING;

COMMIT;