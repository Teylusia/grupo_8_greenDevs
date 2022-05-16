drop database if exists greendevs_db;
create database greendevs_db;

use greendevs_db; 

drop table if exists Users;

create table Users(
id int primary key auto_increment,
name VARCHAR(100),
email VARCHAR(100),
avatar VARCHAR(100),
password VARCHAR(100),
privilege int,
status int,
created_at DATETIME,
updated_at DATETIME
);

drop table if exists Products; 

create table Products(
id int primary key auto_increment,
name VARCHAR(100),
price int,
specs TEXT,
description TEXT,
rating int,
discount int,
image VARCHAR(500),
created_at DATETIME,
updated_at DATETIME
);

LOCK TABLES Products WRITE;
INSERT INTO
    Products (
        id,
        name,
        price,
        specs,
        description,
        discount,
        rating,
        image
    )
VALUES
    (
        1,
        "Grand Theft Auto V",
        16,
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        2,
        4,
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
    ),
    (
        2,
        "The Witcher 3: Wild Hunt",
        50,
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        null,
        1,
        "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
    ),
    (
        3,
        "Portal 2",
        11,
        "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        null,
        2,
        "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
    ),
    (
        4,
        "Tomb Raider (2013)",
        10,
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        17,
        3,
        "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
    ),
    (
        5,
        "The Elder Scrolls V: Skyrim",
        25,
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        null,
        3,
        "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
    ),
    (
        6,
        "Counter-Strike: Global Offensive",
        17,
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        18,
        4,
        "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
    ),
    (
        7,
        "Left 4 Dead 2",
        15,
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        2,
        5,
        "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
    ),
    (
        8,
        "BioShock Infinite",
        26,
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        null,
        5,
        "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
    ),
    (
        9,
        "Life is Strange",
        36,
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        null,
        4,
        "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
    ),
    (
        10,
        "Red Dead Redemption 2",
        50,
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        null,
        5,
        "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
    ),
    (
        11,
        "Cyberpunk 2077",
        45,
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        null,
        1,
        "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
    ),
    (
        12,
        "Fall Guys: Ultimate Knockout",
        24,
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        null,
        4,
        "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg"
    ),
    (
        13,
        "DOOM Eternal",
        49,
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        null,
        5,
        "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
    ),
    (
        14,
        "Ori and the Will of the Wisps",
        40,
        "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        18,
        2,
        "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg"
    ),
    (
        15,
        "Ghost of Tsushima",
        35,
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        18,
        3,
        "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg"
    ),
    (
        16,
        "Final Fantasy VII Remake",
        16,
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        null,
        2,
        "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg"
    ),
    (
        17,
        "Mafia II: Definitive Edition",
        29,
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        1,
        3,
        "https://media.rawg.io/media/games/d73/d7364906c530ccc2d89b0b5d8695e03c.jpg"
    ),
    (
        18,
        "Resident Evil 3",
        26,
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        null,
        2,
        "https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg"
    ),
    (
        19,
        "Dota Underlords",
        38,
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        9,
        3,
        "https://media.rawg.io/media/games/66e/66e90c9d7b9a17335b310ceb294e9365.jpg"
    ),
    (
        20,
        "Forza Horizon 5",
        10,
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        5,
        4,
        "https://media.rawg.io/media/screenshots/6c6/6c69fe99ec23d08b2b0a62feb9d89c65.jpg"
    );
UNLOCK TABLES;

drop table if exists Categories; 

create table Categories(
id int primary key auto_increment,
name VARCHAR(100),
created_at DATETIME,
updated_at DATETIME
);

LOCK TABLES Categories WRITE;
INSERT INTO Categories (id, name)
VALUES
(1, "Acción"),
(2, "Deportes"),
(3, "Rpg"),
(4, "Indie"),
(5, "Aventura"),
(6, "Estrategia"),
(7, "Fps"),
(8, "Casual"),
(9, "Plataforma"),
(10, "Simulación"),
(11, "Arcade"),
(12, "Pelea");
UNLOCK TABLES;
drop table if exists Sales; 

create table Sales(
id int primary key auto_increment,
users_id int,
product_id int,
order_number int,
created_at DATETIME,
updated_at DATETIME,
foreign key (users_id) references Users(id) on delete cascade,
foreign key (product_id) references Products(id) on delete cascade
);

drop table if exists Images; 

create table Images(
id int primary key auto_increment,
address VARCHAR(100),
product_id int,
created_at DATETIME,
updated_at DATETIME,
foreign key (product_id) references Products(id) on delete cascade
);
LOCK TABLES Images WRITE;
INSERT	INTO
	Images (address, product_id)
VALUES
        (
                "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
                1
        ),
        (
                "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
                1
        ),
        (
                "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
                1
        ),
        (
                "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
                1
        ),
        (
                "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
                1
        ),
        (
                "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",
                1
        ),
        (
                "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg",
                1
        ),
        (
                "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
                2
        ),
        (
                "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
                2
        ),
        (
                "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
                2
        ),
        (
                "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
                2
        ),
        (
                "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
                2
        ),
        (
                "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
                2
        ),
        (
                "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
                2
        ),
        (
                "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg",
                2
        ),
        (
                "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
                3
        ),
        (
                "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
                3
        ),
        (
                "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
                3
        ),
        (
                "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
                3
        ),
        (
                "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg",
                3
        ),
        (
                "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg",
                3
        ),
        (
                "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg",
                3
        ),
        (
                "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
                4
        ),
        (
                "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
                4
        ),
        (
                "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg",
                4
        ),
        (
                "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg",
                4
        ),
        (
                "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg",
                4
        ),
        (
                "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg",
                4
        ),
        (
                "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg",
                4
        ),
        (
                "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg",
                4
        ),
        (
                "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
                5
        ),
        (
                "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
                5
        ),
        (
                "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg",
                5
        ),
        (
                "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg",
                5
        ),
        (
                "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg",
                5
        ),
        (
                "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg",
                5
        ),
        (
                "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg",
                5
        ),
        (
                "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg",
                5
        ),
        (
                "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
                6
        ),
        (
                "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
                6
        ),
        (
                "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg",
                6
        ),
        (
                "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg",
                6
        ),
        (
                "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg",
                6
        ),
        (
                "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg",
                6
        ),
        (
                "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg",
                6
        ),
        (
                "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg",
                6
        ),
        (
                "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
                7
        ),
        (
                "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
                7
        ),
        (
                "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg",
                7
        ),
        (
                "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg",
                7
        ),
        (
                "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg",
                7
        ),
        (
                "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg",
                7
        ),
        (
                "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg",
                7
        ),
        (
                "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg",
                7
        ),
        (
                "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
                8
        ),
        (
                "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
                8
        ),
        (
                "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg",
                8
        ),
        (
                "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg",
                8
        ),
        (
                "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg",
                8
        ),
        (
                "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg",
                8
        ),
        (
                "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg",
                8
        ),
        (
                "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg",
                8
        ),
        (
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
                9
        ),
        (
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
                9
        ),
        (
                "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg",
                9
        ),
        (
                "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg",
                9
        ),
        (
                "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg",
                9
        ),
        (
                "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg",
                9
        ),
        (
                "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg",
                9
        ),
        (
                "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg",
                9
        ),
        (
                "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
                10
        ),
        (
                "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
                10
        ),
        (
                "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg",
                10
        ),
        (
                "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg",
                10
        ),
        (
                "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg",
                10
        ),
        (
                "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg",
                10
        ),
        (
                "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg",
                10
        ),
        (
                "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg",
                10
        ),
        (
                "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
                11
        ),
        (
                "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
                11
        ),
        (
                "https://media.rawg.io/media/screenshots/814/814c25d6fd1fd34a4e6dade645a3bda7.jpg",
                11
        ),
        (
                "https://media.rawg.io/media/screenshots/622/6220d4a748fd1abd23ece425111e8149.jpg",
                11
        ),
        (
                "https://media.rawg.io/media/screenshots/2ab/2ab0b67e68b6ede6b19d80094b6f7f2a_qTSfS2g.jpg",
                11
        ),
        (
                "https://media.rawg.io/media/screenshots/cd2/cd22af9d6ac593440defac6082760e4a.jpg",
                11
        ),
        (
                "https://media.rawg.io/media/screenshots/9b5/9b51535beb9d9e416cb9aac874091334.jpg",
                11
        ),
        (
                "https://media.rawg.io/media/screenshots/d84/d84d3a16c1e2cb24dcf73e0108d78455.jpg",
                11
        ),
        (
                "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
                12
        ),
        (
                "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
                12
        ),
        (
                "https://media.rawg.io/media/screenshots/e60/e605ef79d45fcde4afcdbbe8783b7755.jpg",
                12
        ),
        (
                "https://media.rawg.io/media/screenshots/65d/65db880d23d8d9afe59da1a0f4fbc9d1_s0rkn1r.jpg",
                12
        ),
        (
                "https://media.rawg.io/media/screenshots/bb4/bb448b8a9aa51ff3e620d3d4c292214b.jpg",
                12
        ),
        (
                "https://media.rawg.io/media/screenshots/922/922d1b5f0231cf8b0eaa4b78f3935434.jpg",
                12
        ),
        (
                "https://media.rawg.io/media/screenshots/311/311c4a0364dd23e2ccaabe0fef29f467_U6b7UNM.jpg",
                12
        ),
        (
                "https://media.rawg.io/media/screenshots/32a/32abc47d857fffc485b86dcd56cbe3c7.jpg",
                12
        ),
        (
                "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
                13
        ),
        (
                "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
                13
        ),
        (
                "https://media.rawg.io/media/screenshots/e60/e605ef79d45fcde4afcdbbe8783b7755.jpg",
                13
        ),
        (
                "https://media.rawg.io/media/screenshots/65d/65db880d23d8d9afe59da1a0f4fbc9d1_s0rkn1r.jpg",
                13
        ),
        (
                "https://media.rawg.io/media/screenshots/bb4/bb448b8a9aa51ff3e620d3d4c292214b.jpg",
                13
        ),
        (
                "https://media.rawg.io/media/screenshots/922/922d1b5f0231cf8b0eaa4b78f3935434.jpg",
                13
        ),
        (
                "https://media.rawg.io/media/screenshots/311/311c4a0364dd23e2ccaabe0fef29f467_U6b7UNM.jpg",
                13
        ),
        (
                "https://media.rawg.io/media/screenshots/32a/32abc47d857fffc485b86dcd56cbe3c7.jpg",
                13
        ),
        (
                "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg",
                14
        ),
        (
                "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg",
                14
        ),
        (
                "https://media.rawg.io/media/screenshots/85d/85dcab4cda43f9b04a7c266d888b0d2a.jpeg",
                14
        ),
        (
                "https://media.rawg.io/media/screenshots/787/78717a4bd40ff4490bf779903c999807.jpeg",
                14
        ),
        (
                "https://media.rawg.io/media/screenshots/943/943907c512a780b1a4db86cef846ee37.jpeg",
                14
        ),
        (
                "https://media.rawg.io/media/screenshots/1d6/1d692afa0ccd7a5741a5a85859155dfb.jpg",
                14
        ),
        (
                "https://media.rawg.io/media/screenshots/3d1/3d15ad60c52476284fa6ca6a276ba280.jpg",
                14
        ),
        (
                "https://media.rawg.io/media/screenshots/fe0/fe0f31e9e413d2a35df07159916e909d.jpg",
                14
        ),
        (
                "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg",
                15
        ),
        (
                "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg",
                15
        ),
        (
                "https://media.rawg.io/media/screenshots/2e7/2e7a9e16cae5ba5daca74029981029c3.jpg",
                15
        ),
        (
                "https://media.rawg.io/media/screenshots/ba0/ba09edd0dc18e56a3b62aba32b9c3ed6.jpg",
                15
        ),
        (
                "https://media.rawg.io/media/screenshots/7a6/7a6d792781b4ee1414cdb0649a2e56ac.jpg",
                15
        ),
        (
                "https://media.rawg.io/media/screenshots/aa5/aa543c81d5f342a7d3aecc55df89f66e.jpg",
                15
        ),
        (
                "https://media.rawg.io/media/screenshots/547/5476a303d0ec920c29264ff18da5741a.jpg",
                15
        ),
        (
                "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
                16
        ),
        (
                "https://media.rawg.io/media/screenshots/b5d/b5d7f11c81bb76c16b2d82328875f3d0.jpg",
                16
        ),
        (
                "https://media.rawg.io/media/screenshots/eae/eae67ac6787641e0cadcfe1f854c015a.jpg",
                16
        ),
        (
                "https://media.rawg.io/media/screenshots/0eb/0ebeaf82965655f37a71c446263efce5.jpg",
                16
        ),
        (
                "https://media.rawg.io/media/screenshots/96d/96da5da8a2ae31624d70de21f3b9ea64.jpg",
                16
        ),
        (
                "https://media.rawg.io/media/screenshots/281/28166327e5932bb0241a59474bea4dfe.jpg",
                16
        ),
        (
                "https://media.rawg.io/media/screenshots/526/52610354fd15c7c867c81d0db47a2ca3_sHxfvXC.jpg",
                16
        ),
        (
                "https://media.rawg.io/media/games/d73/d7364906c530ccc2d89b0b5d8695e03c.jpg",
                17
        ),
        (
                "https://media.rawg.io/media/games/d73/d7364906c530ccc2d89b0b5d8695e03c.jpg",
                17
        ),
        (
                "https://media.rawg.io/media/screenshots/8d3/8d3f6732ed0eeeb98ca15f05dfcf85bc.jpg",
                17
        ),
        (
                "https://media.rawg.io/media/screenshots/fa8/fa8e7e077b951e341812d1ac5b6c0720.jpg",
                17
        ),
        (
                "https://media.rawg.io/media/screenshots/cce/cce0f823f0b30626f7ea5d0a5fd4a19e.jpg",
                17
        ),
        (
                "https://media.rawg.io/media/screenshots/1f4/1f4045fbc2e0031359a736168fc26e0d.jpg",
                17
        ),
        (
                "https://media.rawg.io/media/screenshots/e07/e077e7c147172781118169e068344971.jpg",
                17
        ),
        (
                "https://media.rawg.io/media/screenshots/7b3/7b363cb7b9e78d15138cbc28963ae371.jpg",
                17
        ),
        (
                "https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg",
                18
        ),
        (
                "https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg",
                18
        ),
        (
                "https://media.rawg.io/media/screenshots/a63/a6318b075a5d8471a510cdeac2ab6a8e.jpg",
                18
        ),
        (
                "https://media.rawg.io/media/screenshots/142/142b55e10c271956150d1dac002fceb6.jpg",
                18
        ),
        (
                "https://media.rawg.io/media/screenshots/e6b/e6b8a7ab4394aa7b819d215eee95d24d.jpg",
                18
        ),
        (
                "https://media.rawg.io/media/screenshots/26d/26de805b7a5e2d7e5a8c28534bfebcc0.jpg",
                18
        ),
        (
                "https://media.rawg.io/media/screenshots/aba/abac76c758df6572c9e7313c6d633b10.jpg",
                18
        ),
        (
                "https://media.rawg.io/media/screenshots/b3c/b3c4607125476d6b438b26575580bdcf.jpg",
                18
        ),
        (
                "https://media.rawg.io/media/games/66e/66e90c9d7b9a17335b310ceb294e9365.jpg",
                19
        ),
        (
                "https://media.rawg.io/media/games/66e/66e90c9d7b9a17335b310ceb294e9365.jpg",
                19
        ),
        (
                "https://media.rawg.io/media/screenshots/9c8/9c89b7175732b292cb5b16fb79415bb7.jpg",
                19
        ),
        (
                "https://media.rawg.io/media/screenshots/6c6/6c69fe99ec23d08b2b0a62feb9d89c65.jpg",
                20
        ),
        (
                "https://media.rawg.io/media/screenshots/312/3122a56932654c304a60e9ef762277a7.jpg",
                20
        ),
        (
                "https://media.rawg.io/media/screenshots/04c/04c7be71d5fd1abace38c90aaa95529d.jpg",
                20
        ),
        (
                "https://media.rawg.io/media/screenshots/797/7979f94d39181787ee248a423191563f.jpg",
                20
        );
UNLOCK TABLES;

drop table if exists Products_Categories;

create table Products_Categories(
id int primary key auto_increment,
product_id int, 
category_id int, 
created_at DATETIME,
updated_at DATETIME,
foreign key (product_id) references Products(id)
on delete cascade,
foreign key (category_id) references Categories(id)
on delete cascade
);
LOCK TABLES Products_Categories WRITE;
INSERT INTO Products_Categories (product_id, category_id) 
VALUES
(1,1),
(2,3),
(3,5),
(4,1),
(5,1),
(6,7),
(7,7),
(8,7),
(9,5),
(10,5),
(11,5),
(12,8),
(13,7),
(14,9),
(15,6),
(16,3),
(17,5),
(18,1),
(19,3),
(20,10);
UNLOCK TABLES;
 
