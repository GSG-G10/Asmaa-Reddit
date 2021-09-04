BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL,
  pass VARCHAR(100) NOT NULL,
  img_url TEXT,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  bio TEXT
);

CREATE TABLE IF NOT EXISTS posts(
  id SERIAL PRIMARY KEY,
  post_text TEXT NOT NULL,
  post_img TEXT,
  likes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS comments(
  id SERIAL PRIMARY KEY,
  comment_text TEXT NOT NULL,
  likes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  post_id INT,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO users (username, email, pass) VALUES ('asmaaamin', 'asmaa@gmail.com', 'Qwer*1234');
INSERT INTO users (username, email, pass) VALUES ('amira', 'amira@gmail.com', 'Qwe*123');

INSERT INTO posts (post_text, likes, user_id) VALUES (
  'The way to get started is to quit talking and begin doing. -Walt Disney',
  2,1
);

INSERT INTO comments (comment_text, likes, user_id, post_id) VALUES (
  'Nice!', 1, 2, 1
);

COMMIT;