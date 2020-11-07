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
--creamos las tablas
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
    listo INTEGER,
    entregado INTEGER,
    id_usuario_repartidor INTEGER,
    esdomicilio INTEGER NOT NULL,
    id_producto INTEGER not null,
    CONSTRAINT "pedido_PK" PRIMARY KEY (id_pedido)
);

CREATE TABLE Producto (
    id_producto SERIAL NOT NULL,
    id_tienda INTEGER NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    precio NUMERIC(12,2) NOT null,
    foto VARCHAR(255) NOT NULL,
    CONSTRAINT "producto_PK" PRIMARY KEY (id_producto)
);

CREATE TABLE Categoria_Negocio (
    id_categoria SERIAL NOT NULL,
    des_categoria VARCHAR(255) NOT NULL,
    CONSTRAINT "categoria_negocio_PK" PRIMARY KEY (id_categoria)
);
insert into Categoria_Negocio (DES_CATEGORIA) values ('Restaurantes');
insert into Categoria_Negocio (DES_CATEGORIA) values ('Servicios');
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

CREATE TABLE Pedido_Detalle (
    id_pedido INTEGER NOT NULL,
    id_producto INTEGER NOT NULL,
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
--creamos las llaves foraneas
alter table Usuario add constraint "usuario_rol_FK" foreign key (id_rol) references Rol (id_rol);

alter table Pedido add constraint "usuario_pedido_FK" foreign key (id_usuario) references Usuario (id_usuario) on delete cascade;

alter table Pedido add constraint "tienda_pedido_FK" foreign key (id_tienda) references Tienda (id_tienda);

alter table Pedido_Detalle add constraint "pedido_FK" foreign key (id_pedido) references Pedido (id_pedido);

alter table Pedido_Detalle add constraint "producto_pedido_detalle_FK" foreign key(id_producto) references Producto (id_producto);

alter table Producto_Tienda add constraint "producto_tienda_id_producto_FK" foreign key (id_producto) references Producto (id_producto);

alter table Producto_Tienda add constraint "producto_tienda_id_tienda_FK" foreign key(id_tienda) references Tienda (id_tienda);

alter table Tienda add constraint "tienda_categoria_FK" foreign key(id_categoria) references Categoria_Negocio (id_categoria);

alter table Tienda add constraint "tienda_usuario_FK" foreign key(id_usuario) references Usuario (id_usuario);
--creamos los triggers
create function actualizapedidodetalle() returns trigger
as
$$
declare
begin
	--IF old.idproducto = idproductosalida THEN
	insert into pedido_detalle (id_pedido, id_producto) values (NEW.id_pedido, NEW.id_producto);
	--END IF;
return NEW;
end
$$
language plpgsql;
create trigger tractualizapedidodetalle after insert on pedido
for each row
execute procedure actualizapedidodetalle();

create function actualizaproductotienda() returns trigger
as
$$
declare
begin
	--IF old.idproducto = idproductosalida THEN
	insert into producto_tienda (id_producto, id_tienda) values (NEW.id_producto, NEW.id_tienda);
	--END IF;
return NEW;
end
$$
language plpgsql;
create trigger tractualizaproductotienda after insert on producto
for each row
execute procedure actualizaproductotienda();
