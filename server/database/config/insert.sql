INSERT INTO users (username, email, password) VALUES ('asmaaamin', 'asmaa@gmail.com', 'Qwe*123');
INSERT INTO users (username, email, password) VALUES ('amira', 'amira@gmail.com', 'Qwe*123');

INSERT INTO posts (post_text, likes, user_id) VALUES (
  'The way to get started is to quit talking and begin doing. -Walt Disney',
  2,1
);

INSERT INTO comments (comment_text, likes, user_id, post_id) VALUES (
  'Nice!', 1, 2, 1
);