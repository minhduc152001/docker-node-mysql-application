-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sun291514001';
-- flush privileges;
use db_management;

create table users (
	id int AUTO_INCREMENT PRIMARY KEY,
    username varchar(30) not null,
    pwd varchar(200) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
insert into users (username, pwd) values ('minhduc152001', '123');

select * from users;

create table products (
	id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) not null,
    description varchar(100),
    unit_price float,
    addedByUserId int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (addedByUserId) REFERENCES users(id)
);
insert into products (name, description, unit_price) values ('Lid Coffeecup 12oz D9542b', 'Hyposmolality', 10);
insert into products (name, description, unit_price) values ('Chinese Lemon Pork', 'Diseases of nail NEC', 43);
insert into products (name, description, unit_price) values ('Crab - Blue, Frozen', 'Fracture three ribs-open', 80);
insert into products (name, description, unit_price) values ('French Pastries', 'Int thrombos hemorrhoid', 58);
insert into products (name, description, unit_price) values ('Cheese - Cambozola', 'Medullary cystic kidney', 54);
insert into products (name, description, unit_price) values ('Onions - Spanish', 'Heat cramps', 24);
insert into products (name, description, unit_price) values ('Crab - Meat Combo', 'Spontan bact peritonitis', 43);
insert into products (name, description, unit_price) values ('Liners - Baking Cups', 'War inj:aerial bomb', 26);
insert into products (name, description, unit_price) values ('Beef Striploin Aaa', 'Cave-in NOS', 67);
insert into products (name, description, unit_price) values ('Coconut - Creamed, Pure', 'Mycotic arthritis-unspec', 79);
insert into products (name, description, unit_price) values ('Cheese - Comtomme', 'Atrophy mandible-severe', 55);
insert into products (name, description, unit_price) values ('Syrup - Monin, Swiss Choclate', 'Oth spc behavior problem', 76);
insert into products (name, description, unit_price) values ('Cheese - Colby', 'TB in preg-unspecified', 50);
insert into products (name, description, unit_price) values ('Chocolate - Feathers', 'Alkal burn cornea/conjun', 91);
insert into products (name, description, unit_price) values ('Cotton Wet Mop 16 Oz', 'Rheum aortic sten/insuff', 30);
insert into products (name, description, unit_price) values ('Sugar - Individual Portions', 'Acc poisn-petrol solvent', 85);
insert into products (name, description, unit_price) values ('Plate Foam Laminated 9in Blk', 'Chr postrheum arthritis', 97);
insert into products (name, description, unit_price) values ('Kirsch - Schloss', 'W/crft fall NOS-pers NEC', 96);
insert into products (name, description, unit_price) values ('Pastry - Raisin Muffin - Mini', 'Int inf enterovirus NEC', 85);
insert into products (name, description, unit_price) values ('Appetizer - Sausage Rolls', 'Brain lac NEC-proln coma', 11);
insert into products (name, description, unit_price) values ('Cucumber - Pickling Ontario', 'Fx eight/more rib-closed', 81);
insert into products (name, description, unit_price) values ('Ham - Proscuitto', 'Triplets w fet loss-del', 13);
insert into products (name, description, unit_price) values ('Bread - Sour Batard', 'Insulin pump training', 73);
insert into products (name, description, unit_price) values ('Chicken - Whole Roasting', 'Ab ftl hrt rt/rhy NOS', 85);
insert into products (name, description, unit_price) values ('Goulash Seasoning', 'Round hole of retina', 39);
insert into products (name, description, unit_price) values ('Brandy - Bar', 'Adv eff sedat/hypnot NEC', 44);
insert into products (name, description, unit_price) values ('Limes', 'Crushing injury leg NOS', 94);
insert into products (name, description, unit_price) values ('Bread - Corn Muffaleta Onion', 'Gu infection-deliv w p/p', 4);
insert into products (name, description, unit_price) values ('Muffin Hinge - 211n', 'Venomous bite/sting NOS', 35);
insert into products (name, description, unit_price) values ('Pastry - Banana Tea Loaf', 'Benign hyp ht dis w/o hf', 16);
insert into products (name, description, unit_price) values ('Extract Vanilla Pure', 'Travel and motion', 76);
insert into products (name, description, unit_price) values ('Table Cloth 62x120 White', 'Hodg lymph deplet spleen', 48);
insert into products (name, description, unit_price) values ('Marzipan 50/50', 'Syphilitic episcleritis', 79);
insert into products (name, description, unit_price) values ('Beef - Top Butt', 'Mantle cell lymph spleen', 49);
insert into products (name, description, unit_price) values ('Soup - Knorr, Chicken Gumbo', 'Puberty', 94);
insert into products (name, description, unit_price) values ('Chips Potato Swt Chilli Sour', 'Delay conjugat jaund NEC', 84);
insert into products (name, description, unit_price) values ('Water - Tonic', 'Vascular hamartomas', 71);
insert into products (name, description, unit_price) values ('Sauce - Rosee', 'Asthma NOS w (ac) exac', 6);
insert into products (name, description, unit_price) values ('Bread - White Epi Baguette', 'Multiple contusion arm', 47);
insert into products (name, description, unit_price) values ('Bar - Granola Trail Mix Fruit Nut', 'Leukocytosis NOS', 93);

select * from products where WHERE name LIKE '%bar%' OR description LIKE '%bar%'


select * from products