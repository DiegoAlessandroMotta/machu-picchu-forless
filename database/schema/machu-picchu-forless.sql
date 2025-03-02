/*
 * This scheme is just an early desing (DO NOT RUN THIS SQL CODE IN THE DATABASE)
 */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * [Tablas]:
 * contacts
 * tipos_servicios_tour
 * categorias_tour
 * tours
 * tour_days
 * imagenes_tours
 * roles_empleado
 * personas
 * empleados
 * generos
 * tipos_documento
 * paises
 * clientes
 * estados_reserva
 * packages
 * reservas
 * viajeros
 * tours_packages
 * roles_usuario
 * users
 * estados_pago
 * pagos
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
use machupicchuforless_test;

/*
 * Tablas independientes
 */
create table if not exists
  contacts (
    id bigint auto_increment,
    client_name varchar(255) not null,
    client_phone varchar(255),
    client_email varchar(255) not null,
    subject varchar(255) not null,
    message varchar(1023) not null,
    created_at timestamp not null default current_timestamp,
    primary key (id)
  );

/*
 * Primer grupo
 */
-- tipo_servicio enum('Group', 'Private') not null,
create table if not exists
  tipos_servicios_tour (
    id int auto_increment,
    tipo varchar(255) not null,
    primary key (id)
  );

create table if not exists
  categorias_tour (
    id int auto_increment,
    nombre varchar(45) not null,
    descripcion varchar(511),
    primary key (id)
  );

create table if not exists
  tours (
    id bigint auto_increment,
    nombre varchar(100) not null,
    dias int not null,
    noches int not null,
    precio decimal(10, 2) not null,
    descripcion text,
    banner_principal text not null,
    maxima_altitud varchar(100) not null,
    nivel_actividad varchar(80) not null,
    categoria_id int not null,
    tipo_servicio_id int not null,
    foreign key (categoria_id) references categorias_tour (id),
    foreign key (tipo_servicio_id) references tipos_servicios_tour (id),
    primary key (id)
  );

create table if not exists
  tour_days (
    id bigint auto_increment,
    title varchar(255) not null,
    day bigint not null default 1,
    img varchar(1023) not null,
    description varchar(1023) not null,
    tour_id int not null,
    foreign key (tour_id) references tours (id),
    primary key (id)
  );

create table if not exists
  imagenes_tours (
    id bigint auto_increment,
    url text not null,
    tour_id int not null,
    foreign key (tour_id) references tours (id),
    primary key (id)
  );

/*
 * Segundo grupo
 */
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
    nombre varchar(80) not null,
    apellido varchar(80) not null,
    correo varchar(100) not null unique,
    telefono varchar(20),
    rol_id int not null,
    foreign key (rol_id) references roles_empleado (id),
    primary key (id)
  );

/*
 * Tercer grupo
 */
create table if not exists
  generos (
    id int auto_increment,
    nombre varchar(80) not null,
    codigo varchar(5) not null unique,
    primary key (id)
  );

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
    prefijo_telefonico varchar(10) not null unique,
    estado_activo boolean default true,
    primary key (id)
  );

create table if not exists
  clientes (
    id bigint auto_increment,
    fullname varchar(80) not null,
    email varchar(255) not null,
    telefono varchar(20),
    fecha_nacimiento date,
    numero_documento varchar(50) not null,
    tipo_documento_id int not null,
    pais_id int not null,
    genero_id int not null,
    alergico boolean not null,
    foreign key (tipo_documento_id) references tipos_documento (id),
    foreign key (pais_id) references paises (id),
    foreign key (genero_id) references generos (id),
    primary key (id)
  );

/*
 * Cuarto grupo
 */
-- estado enum('pendiente', 'confirmada', 'cancelada') not null,
create table if not exists
  estados_reserva (
    id int auto_increment,
    estado varchar(255),
    codigo varchar(5) not null unique,
    primary key (id)
  );

create table if not exists
  packages (
    id bigint auto_increment,
    nombre varchar(100) not null,
    dias int not null,
    noches int not null,
    precio decimal(10, 2) not null,
    descripcion text,
    banner_principal text not null,
    nivel_actividad varchar(80) not null,
    tipo_servicio_id int not null,
    primary key (id)
  );

create table if not exists
  reservas (
    id bigint auto_increment,
    fecha_inicio date not null,
    fecha_fin date not null,
    informacion_adicional text not null,
    estado_reserva_id int not null,
    cliente_id bigint not null,
    empleado_id bigint,
    tour_id bigint,
    package_id bigint,
    foreign key (estado_reserva_id) references estados_reserva (id),
    foreign key (cliente_id) references clientes (id),
    foreign key (empleado_id) references empleados (id),
    foreign key (tour_id) references tours (id),
    foreign key (package_id) references packages (id),
    primary key (id)
  );

create table if not exists
  viajeros (
    id bigint auto_increment,
    nombres varchar(80) not null,
    apellidos varchar(80) not null,
    fecha_nacimiento date not null,
    numero_documento varchar(50) not null,
    restricciones_alimenticias_alergias boolean not null,
    genero_id int not null,
    tipo_documento_id int not null,
    reserva_id bigint not null,
    foreign key (genero_id) references generos (id),
    foreign key (tipo_documento_id) references tipos_documento (id),
    foreign key (reserva_id) references reservas (id),
    primary key (id)
  );

create table if not exists
  tours_packages (
    tour_id bigint not null,
    package_id bigint not null,
    foreign key (tour_id) references tours (id),
    foreign key (package_id) references packages (id),
    primary key (tour_id, package_id)
  );

/*
 * Quinto grupo
 */
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
    name varchar(255) not null,
    email varchar(255) not null unique,
    email_verified_at timestamp,
    password varchar(255) not null,
    remember_token varchar(100),
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id)
  );

create table if not exists
  employees_accounts (
    user_id bigint,
    empleado_id bigint not null unique,
    rol_usuario_id int not null,
    foreign key (user_id) references users (id),
    foreign key (empleado_id) references empleados (id),
    foreign key (rol_usuario_id) references roles_usuario (id),
    primary key (user_id)
  );

/*
 * Sexto grupo
 */
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
