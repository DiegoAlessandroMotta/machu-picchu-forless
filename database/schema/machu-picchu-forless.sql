-- This scheme is just an early desing (DO NOT RUN THIS SQL CODE IN THE DATABASE)
-- machu-picchu-forless
create table
  empleado (
    ID_Empleado int(11) primary key,
    Nombre varchar(50) not null,
    Apellido varchar(50) not null,
    Correo varchar(100),
    Telefono varchar(20),
    Rol enum('Admin', 'Manager', 'Staff')
  );

create table
  cliente (
    ID_Cliente int(11) primary key,
    Nombre varchar(50) not null,
    Apellido varchar(50) not null,
    Genero enum('Masculino', 'Femenino'),
    Fecha_Nacimiento date,
    Tipo_Documento enum('DNI', 'Pasaporte', 'Otro'),
    Num_Documento varchar(50),
    Pais varchar(50)
  );

create table
  proveedor (
    ID_Proveedor int(11) primary key,
    Nombre varchar(45) not null,
    Tipo varchar(45),
    Telefono varchar(45),
    Correo varchar(45),
    Direccion varchar(45)
  );

create table
  hotel (
    ID_Hotel int(11) primary key,
    Nombre varchar(100) not null,
    Direccion varchar(200),
    Ciudad varchar(100),
    Telefono varchar(50),
    Tipo varchar(50),
    Disponibilidad varchar(50),
    Descripcion text,
    Codigo_Promocion varchar(50)
  );

create table
  proveedorhotel (
    ID int(11) primary key,
    ID_Proveedor int(11),
    ID_Hotel int(11),
    foreign key (ID_Proveedor) references proveedor (ID_Proveedor),
    foreign key (ID_Hotel) references hotel (ID_Hotel)
  );

create table
  tren (
    ID_Tren int(11) primary key,
    Nombre varchar(100) not null,
    Ruta varchar(100),
    Disponibilidad varchar(50),
    Codigo_Promocion varchar(50),
    Detalles_Adicionales varchar(200)
  );

create table
  proveedortren (
    ID int(11) primary key,
    ID_Proveedor int(11),
    ID_Tren int(11),
    foreign key (ID_Proveedor) references proveedor (ID_Proveedor),
    foreign key (ID_Tren) references tren (ID_Tren)
  );

create table
  categoria (
    ID_Categoria int(11) primary key,
    Nombre_Categoria varchar(45) not null,
    Descripcion varchar(255)
  );

create table
  tour (
    ID_Tour int(11) primary key,
    ID_Categoria int(11),
    Nombre varchar(100) not null,
    Dias int(11),
    Noches int(11),
    Precio decimal(10, 2),
    Descripcion text,
    foreign key (ID_Categoria) references categoria (ID_Categoria)
  );

create table
  reserva (
    ID_Reserva int(11) primary key,
    ID_Cliente int(11),
    ID_Tour int(11),
    ID_Empleado int(11),
    Ruta_Extra varchar(250),
    Fecha_Inicio date,
    Fecha_Fin date,
    Comidas_Opcion enum('Ninguna', 'Desayuno', 'Todo Incluido'),
    Informacion_Adicional text,
    Estado enum('Pendiente', 'Confirmada', 'Cancelada'),
    foreign key (ID_Cliente) references cliente (ID_Cliente),
    foreign key (ID_Tour) references tour (ID_Tour),
    foreign key (ID_Empleado) references empleado (ID_Empleado)
  );

create table
  pago (
    ID_Pago int(11) primary key,
    ID_Reserva int(11),
    Monto decimal(10, 2),
    Fecha_Pago timestamp,
    Metodo_Pago varchar(50),
    Estado enum('Pendiente', 'Pagado', 'Fallido'),
    foreign key (ID_Reserva) references reserva (ID_Reserva)
  );

create table
  usuario (
    ID_Usuario int(11) primary key,
    Nombre_Usuario varchar(50) not null,
    Contrasena varchar(255) not null,
    Rol enum('Admin', 'Empleado', 'Cliente'),
    ID_Cliente int(11),
    ID_Empleado int(11),
    foreign key (ID_Cliente) references cliente (ID_Cliente),
    foreign key (ID_Empleado) references empleado (ID_Empleado)
  );
