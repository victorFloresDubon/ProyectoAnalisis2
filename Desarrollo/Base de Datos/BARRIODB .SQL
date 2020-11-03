DROP TABLE Usuario CASCADE;
DROP TABLE Rol CASCADE ;
DROP TABLE Pedido CASCADE ;
DROP TABLE Producto CASCADE ;
DROP TABLE Categoria_Negocio CASCADE ;
DROP TABLE Tienda CASCADE ;
DROP TABLE Pedido_Detalle CASCADE ;
DROP TABLE Menu CASCADE ;
DROP TABLE Menu_Rol CASCADE ;
DROP TABLE Producto_Tienda CASCADE ;
DROP TABLE Parametro CASCADE ;

CREATE TABLE Usuario (
    id_usuario SERIAL NOT NULL,
    id_rol INTEGER NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(32) NOT NULL,
    CONSTRAINT "usuario_PK" PRIMARY KEY (id_usuario)
);
insert into Usuario (id_rol ,nombre,apellido,direccion,correo,contrasenia) values (3, 'Victor', 'Flores', 'Z.8. San Miguel Petapa, Guatemala', 'vdubon@outlook.com','vdubon');
insert into Usuario (id_rol ,nombre,apellido,direccion,correo,contrasenia) values (1, 'Gari', 'Mendoza', 'Boca del Monte, Villa Canales, Guatemala', 'lester@gmail.com','gmendoza');
insert into Usuario (id_rol ,nombre,apellido,direccion,correo,contrasenia) values (2, 'Selvin', 'Castellanos', 'Z.5. Ciudad Capital', 'selvin@hotmail.com','scastellanos');

CREATE TABLE Rol (
    id_rol SERIAL NOT NULL,
    descripcion VARCHAR(20) NOT NULL,
    CONSTRAINT "rol_PK" PRIMARY KEY (id_rol)
);
insert into Rol (descripcion) values ('Cliente');
insert into Rol (descripcion) values ('Vendedor');
insert into Rol (descripcion) values ('Repartidor');

CREATE TABLE Pedido (
    id_pedido SERIAL NOT NULL,
    id_usuario INTEGER NOT NULL,
    id_tienda INTEGER NOT NULL,
    id_usuario_repartidor INTEGER,
    esDomicilio INTEGER NOT NULL,
    listo INTEGER,
    entregado INTEGER,
    CONSTRAINT "pedido_PK" PRIMARY KEY (id_pedido)
);

insert into pedido (id_usuario, id_tienda, id_usuario_repartidor, esDomicilio, listo, entregado) values (1, 2, 1, 1, 0, 0);
alter table pedido drop column id_repartidor;
alter table pedido add column id_usuario_repartidor integer;

CREATE TABLE Producto (
    id_producto SERIAL NOT NULL,
    id_tienda INTEGER NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    precio NUMERIC(12,2) NOT null,
    foto VARCHAR(255) NOT NULL,
    CONSTRAINT "producto_PK" PRIMARY KEY (id_producto)
);
alter table producto add column foto varchar(255) not null;
alter table producto drop column id_tienda;
insert into producto (id_tienda, nombre, precio, foto) values (12, 'Tamarindo', 200, 'https://cdn2.cocinadelirante.com/sites/default/files/images/2018/04/mojarra-frita-al-mojo-de-ajo.jpg');
insert into producto (id_tienda, nombre, precio, foto) values (12, 'Ponche', 100, 'https://sifu.unileversolutions.com/image/es-MX/recipe-topvisual/2/1260-709/hamburguesa-clasica-50425188.jpg');

CREATE TABLE Categoria_Negocio (
    id_categoria SERIAL NOT NULL,
    des_categoria VARCHAR(255) NOT NULL,
    CONSTRAINT "categoria_negocio_PK" PRIMARY KEY (id_categoria)
);
insert into Categoria_Negocio (DES_CATEGORIA) values ('Restaurantes');
insert into Categoria_Negocio (DES_CATEGORIA) values ('Entretenimiento');

CREATE TABLE Tienda (
    id_tienda SERIAL NOT NULL,
    id_categoria INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    CONSTRAINT "tienda_PK" PRIMARY KEY (id_tienda)
);
insert into Tienda (id_categoria, id_usuario, nombre, direccion, telefono, foto) values (1, 1, 'Doña Lencha', 'zona 3', '33333333', 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg');
insert into Tienda (id_categoria, id_usuario, nombre, direccion, telefono, foto) values (1, 1, 'Bar Moe', 'zona 4', '22222222', 'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/08/comida-arabe.jpg');
alter table tienda drop column foto;
DELETE FROM tienda;

CREATE TABLE Pedido_Detalle (
    id_pedido INTEGER NOT NULL,
    id_producto INTEGER NOT NULL,
    CONSTRAINT "pedido_detalle_PK" PRIMARY KEY (id_pedido,id_linea)
);

CREATE TABLE Menu (
    id_menu SERIAL NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    id_menu_padre INTEGER NOT NULL,
    url VARCHAR(255) NOT NULL,
    CONSTRAINT "menu_PK" PRIMARY KEY (id_menu)
);

CREATE TABLE Menu_Rol (
    id_menu INTEGER NOT NULL,
    id_rol INTEGER NOT NULL
);

CREATE TABLE Producto_Tienda (
    id_producto INTEGER NOT NULL,
    id_tienda INTEGER NOT NULL
);

CREATE TABLE Parametro (
    nombre_aplicacion VARCHAR(50) NOT NULL,
    cuota_fija NUMERIC(12,2) NOT NULL,
    monto_entrega NUMERIC(12,2) NOT NULL
);

/** FOREIGN KEYS BARRIODB */
alter table Usuario add constraint "usuario_rol_FK" foreign key (id_rol) references Rol (id_rol);

alter table Pedido add constraint "usuario_pedido_FK" foreign key (id_usuario) references Usuario (id_usuario) on delete cascade;

alter table Pedido add constraint "tienda_pedido_FK" foreign key (id_tienda) references Tienda (id_tienda);

alter table Pedido_Detalle add constraint "pedido_FK" foreign key (id_pedido) references Pedido (id_pedido);

alter table Pedido_Detalle add constraint "producto_pedido_detalle_FK" foreign key(id_producto) references Producto (id_producto);

alter table Producto_Tienda add constraint "producto_tienda_id_producto_FK" foreign key (id_producto) references Producto (id_producto);

alter table Producto_Tienda add constraint "producto_tienda_id_tienda_FK" foreign key(id_tienda) references Tienda (id_tienda);

alter table Tienda add constraint "tienda_categoria_FK" foreign key(id_categoria) references Categoria_Negocio (id_categoria);

alter table Menu_Rol add constraint "menu_rol_menu_FK" foreign key(id_menu) references Menu (id_menu);

alter table Menu_Rol add constraint "menu_rol_rol_FK" foreign key(id_rol) references Rol (id_rol);

alter table Tienda add constraint "tienda_usuario_FK" foreign key(id_usuario) references Usuario (id_usuario);

/** Data **/
insert into rol (descripcion) values ('Cliente');
insert into rol (descripcion) values ('Vendedor');
insert into rol (descripcion) values ('Repartidor');

insert into usuario (id_rol ,nombre,apellido,direccion,correo,contrasenia) values (3, 'Victor', 'Flores', 'Z.8. San Miguel Petapa, Guatemala', 'vdubon@outlook.com','vdubon');
insert into usuario (id_rol ,nombre,apellido,direccion,correo,contrasenia) values (1, 'Gari', 'Mendoza', 'Boca del Monte, Villa Canales, Guatemala', 'lester@gmail.com','gmendoza');
insert into usuario (id_rol ,nombre,apellido,direccion,correo,contrasenia) values (2, 'Selvin', 'Castellanos', 'Z.5. Ciudad Capital', 'selvin@hotmail.com','scastellanos');




