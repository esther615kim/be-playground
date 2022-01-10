
CREATE TABLE books(
  book_id INT AUTO_INCREMENT,
     title VARCHAR(100),
     price_in_pence INT,
     quantity_in_stock INT,
     release_date DATETIME,
     is_fiction TINYINT(1),
     PRIMARY KEY(book_id)
  );

INSERT INTO books (title, price_in_pence, quantity_in_stock, release_date, is_fiction)
 values ('The Little Prince',699,1021,'1943-04-06',1),
 ('The Tale of Peter Rabbit',599,1000,'1902-10-01',1);

INSERT INTO books (title, price_in_pence, quantity_in_stock, release_date, is_fiction)
 values ('Emma',522,390,'1815-12-23',1),
 ('Nineteen Eighty-Four: A Novel',799,420,'1949-06-08',1),
 ('The Handmaid\'s Tale',899,10,'1985-08-01',1),
 ('The War of the Worlds',250,17,'1897-04-01',1);
 

INSERT INTO books (title, price_in_pence, quantity_in_stock, release_date, is_fiction)
 values ('Captain Corelli\'s Mandolin ',999,0,'1995-08-29',1),
 ('A Brief History of Time',825,0,'1988-04-01',0),
 ('Pride and Prejudice ',699,4,'1813-01-28',1);


SELECT * FROM books WHERE is_fiction = 0;
SELECT * FROM books WHERE is_fiction = 1;
SELECT * FROM books WHERE quantity_in_stock = 0;
SELECT MAX(price_in_pence) FROM books;
SELECT MIN(price_in_pence) FROM books;
SELECT * FROM books WHERE (release_date>='1899.12.31');
SELECT * FROM books WHERE title LIKE '%the%'; 
SELECT * FROM books ORDER BY title ASC;

- ✅  the books that we have in stock
- ✅  the non-fiction books
- ✅ the books released in the 1900s  
- ✅ the books with "the" in the title 
- ✅ the books released in the 1900s 
- ✅ all of the books sorted in alphabetical order 
- ✅ the most expensive book 


DELETE FROM books WHERE book_id = 5;

INSERT INFO authors(author_name, author_info) 
values('Dan Brown','Favourite colour is not brown'),
('Antoine de Saint-Exupéry','He was a successful commercial pilot before World War II, working airmail routes in Europe, Africa, and South America.'),
('Douglas Adams','He made two appearances in Monty Python's Flying Circus.'),
('Stephen Hawking','Doctors told him he wouldn\'t live past his early 20s\'),
('Eric Carle','When he was a young boy, Carle had a dream that he would build a bridge from Germany to America.
'),
('J. D. Salinger','The Catcher in the Rye was the only novel that J.D. Salinger published during his lifetime, not bad for a first try!'),
('Beatrix Potter','Between 1881 and 1897 Potter kept a journal in which she jotted down her private thoughts in a secret code . This code was so fiendishly difficult it was not cracked and translated until 1958.'),
('C. S. Lewis','Lewis set up a charitable trust to give away whatever money he received from his books.'),
('Roald Dahl','During World War II he passed intelligence to MI6 from Washington.'),
;

INSERT INFO authors(author_name, author_info) 
values('Frank Herbert','While conversing with fungi expert Paul Stamets, Herbert revealed that the world of Dune was influenced by the lifecycle of mushrooms, with his imagination being helped along by a more "magic" variety.'),
('Louis de Bernières','De Bernières is an avid musician who plays flute, mandolin, clarinet and guitar.'),
('H. G. Wells','In 1914 H.G. Wells published a novel titled The World Set Free. In this book he described a weapon that was eerily similar to the first atomic bomb unleashed on the Japanese cities of Hiroshima and Nagasaki in 1945.'),
('George Orwell','Orwell intentionally got himself arrested for being "drunk and incapable."'),
('Jane Austen','The author of her first novel, Sense and Sensibility was simply "A Lady," and her later works like Pride and Prejudice were credited to "the Author of Sense and Sensibility." She wasn't named as the author of her novels until after her death!'),
('Margaret Atwood','Atwood was the first author to contribute to The Future Library Project, which will take one writer's contribution each year for one hundred years to be printed in the year 2114');

UPDATE books SET price_in_pence = 888 WHERE book_id = 6;
SELECT * FROM books WHERE quantity_in_stock > 9;
UPDATE books SET price_in_pence = price_in_pence * 0.9 WHERE quantity_in_stock > 9;
SELECT * FROM books;

SELECT * FROM authors;

SELECT * FROM books;

ALTER TABLE books ADD author VARCHAR(100);
SELECT * FROM books;

CREATE INDEX AIndex ON books(author);
SHOW INDEX FROM books;
ALTER TABLE books ADD FOREIGN KEY (AIndex) 
REFERENCES authors(author_name)
;
ALTER TABLE books ADD COLUMN author_id INT REFERENCES authors(author_id);
SELECT * FROM books;
SELECT * FROM authors;

ALTER TABLE books ADD FOREIGN KEY (author_id)
REFERENCES authors(author_id);
 
 SELECT * FROM authors;
SELECT * FROM books;

ALTER TABLE books DROP COLUMN author;
SELECT * FROM books;

SELECT books.title, authors.author_name
FROM books INNER JOIN authors 
on books.author_id = authors.author_id;

SELECT books.title, authors.author_name
FROM books RIGHT JOIN authors 
on books.author_id = authors.author_id;

CREATE TABLE genres (
  genre_id INT AUTO_INCREMENT,
  genre_name VARCHAR(100),
  PRIMARY KEY(genre_id)
);