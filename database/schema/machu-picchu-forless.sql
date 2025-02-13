-- This scheme is just an early desing (DO NOT RUN THIS SQL CODE IN THE DATABASE)
-- enum ('passport', 'dni-id', 'driver-license')
create table if not exists
  tipos_documento (
    id int auto_increment,
    tipo varchar(80) not null unique,
    primary key (id)
  );

create table if not exists
  paises (
    id int auto_increment,
    nombre varchar(255) not null,
    codigo_pais char(2) not null unique,
    -- zona_horaria varchar(50),
    prefijo_telefonico varchar(10) not null unique,
    estado_activo boolean default true,
    primary key (id)
  );

create table if not exists
  generos (
    id int auto_increment,
    nombre varchar(80) not null,
    codigo varchar(5) not null unique,
    primary key (id)
  );

create table if not exists
  personas (
    id bigint auto_increment,
    nombre varchar(80) not null,
    apellido varchar(80) not null,
    correo varchar(100) not null unique,
    telefono varchar(20),
    primary key (id)
  );

-- rol enum('Admin', 'Manager', 'Staff')
create table if not exists
  roles_empleado (
    id int auto_increment,
    rol varchar(100) not null unique,
    codigo varchar(5) not null unique,
    primary key (id)
  );

create table if not exists
  empleados (
    id bigint auto_increment,
    persona_id bigint not null unique,
    rol_id int not null,
    foreign key (persona_id) references personas (id),
    foreign key (rol_id) references roles_empleado (id),
    primary key (id)
  );

create table if not exists
  clientes (
    id bigint auto_increment,
    email varchar(255) not null unique,
    fecha_nacimiento date,
    numero_documento varchar(50) not null,
    persona_id bigint not null unique,
    tipo_documento_id int not null,
    pais_id int not null,
    genero_id int not null,
    alergico boolean not null,
    foreign key (persona_id) references personas (id),
    foreign key (tipo_documento_id) references tipos_documento (id),
    foreign key (pais_id) references paises (id),
    foreign key (genero_id) references generos (id),
    primary key (id),
  );

-- rol enum('Admin', 'Empleado', 'Cliente') not null,
create table if not exists
  roles_usuario (
    id int auto_increment,
    rol varchar(100) not null,
    codigo varchar(5) not null unique,
    primary key (id)
  );

create table if not exists
  users (
    id bigint auto_increment,
    email varchar(255) not null unique,
    email_verified_at timestamp not null,
    password varchar(255) not null,
    remember_token varchar(100),
    created_at timestamp,
    updated_at timestamp,
    persona_id int not null unique,
    rol_usuario_id int not null,
    foreign key (persona_id) references personas (id),
    foreign key (rol_usuario_id) references roles_usuario (id),
    primary key (id)
  );

create table if not exists
  categorias_tour (
    id int auto_increment,
    nombre varchar(45) not null,
    descripcion varchar(255) default(''),
    primary key (id)
  );

-- tipo_servicio enum('Group', 'Private') not null,
create table if not exists
  tipos_servicios_tour (
    id int auto_increment,
    tipo varchar(255) not null,
    primary key (id)
  );

create table if not exists
  tours (
    id bigint auto_increment,
    nombre varchar(100) not null,
    dias int not null,
    noches int not null,
    precio decimal(10, 2) not null,
    descripcion text default(''),
    banner_principal text not null,
    maxima_altitud varchar(100) not null,
    nivel_actividad varchar(80) not null,
    categoria_id int not null,
    tipo_servicio_id int not null,
    /*
    agregar mas info
     */
    foreign key (categoria_id) references categorias_tour (id),
    foreign key (tipo_servicio_id) references tipos_servicios_tour (id),
    primary key (id)
  );

create table
  imagenes_tours (
    tour_id,
    url text not null,
    foreign key (tour_id) references tours (id),
    primary key (tour_id)
  );

-- comidas_opcion enum('ninguna', 'desayuno', 'todo incluido') not null,
create table if not exists
  opciones_comida (
    id int auto_increment,
    comida varchar(255),
    primary key (id)
  );

-- estado enum('pendiente', 'confirmada', 'cancelada') not null,
create table if not exists
  estados_reserva (
    id int auto_increment,
    estado varchar(255),
    codigo varchar(5) not null unique,
    primary key (id)
  );

-- falta agregar los viajeros???
create table if not exists
  reservas (
    id bigint auto_increment,
    ruta_extra varchar(250) not null,
    fecha_inicio date not null,
    fecha_fin date not null,
    informacion_adicional text not null,
    opcion_comida_id int not null,
    estado_reserva_id int not null,
    cliente_id bigint not null,
    tour_id bigint not null,
    empleado_id bigint,
    foreign key (opcion_comida_id) references opciones_comida (id),
    foreign key (estado_reserva_id) references estados_reserva (id),
    foreign key (cliente_id) references clientes (id),
    foreign key (tour_id) references tours (id),
    foreign key (empleado_id) references empleados (id),
    primary key (id)
  );

-- estado enum('pendiente', 'pagado', 'fallido') not null,
create table if not exists
  estados_pago (
    id int auto_increment,
    estado varchar(255),
    codigo varchar(5) not null unique,
    primary key (id)
  );

create table if not exists
  pagos (
    id bigint auto_increment,
    monto decimal(10, 2) not null,
    fecha_pago timestamp not null,
    metodo_pago varchar(50) not null,
    estado_pago_id int not null,
    reserva_id bigint not null,
    foreign key (estado_pago_id) references estados_pago (id),
    foreign key (reserva_id) references reservas (id),
    primary key (id)
  );
