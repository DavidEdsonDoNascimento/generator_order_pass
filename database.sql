drop database if exists order_pass_db;
create database if not exists order_pass_db default character set utf8 collate utf8_general_ci;

use order_pass_db;

drop table if exists entity;
create table if not exists entity
(
    id int(11) not null auto_increment primary key,
    name varchar(255) not null,
    email varchar(60) not null unique,
    pass varchar(28) not null,
    use_order_pass tinyint(1) not null default 0,
    type_generator tinyint(1) not null default 1, 
    hrs_to_reset int(2) not null default 0, 
    range_num_min int(11) not null default 1, 
    range_num_max int(11) not null default 0,
    status tinyint(1) not null default 1
)engine=InnoDB default charset=utf8;


drop table if exists order_pass;
create table if not exists order_pass
(
    entity_id int(11) not null,
    pass int(11),
    FOREIGN KEY (entity_id) REFERENCES entities(id)
)engine=InnoDB default charset=utf8;