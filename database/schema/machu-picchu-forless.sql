/*
 * This scheme is just an early desing (DO NOT RUN THIS SQL CODE IN THE DATABASE)
 */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * [Tablas]:
 * contacts
 * tour_service_types
 * tour_categories
 * activity_levels
 * tours
 * tour_days
 * tour_images
 * genders
 * document_types
 * countries
 * clients
 * reservation_states
 * packages
 * reservations
 * travelers
 * tour_packages
 * user_roles
 * users
 * employee_accounts
 * payment_states
 * payments
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
  tour_service_types (
    id int auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    primary key (id)
  );

create table if not exists
  tour_categories (
    id int auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    description varchar(255),
    primary key (id)
  );

create table if not exists
  activity_levels (
    id int auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    primary key (id)
  );

create table if not exists
  tours (
    id bigint auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    price decimal(10, 2) not null,
    days int not null,
    nights int not null,
    description varchar(1023),
    main_banner varchar(255) not null,
    max_altitude varchar(255) not null,
    service_type_id int not null,
    category_id int not null,
    activity_level_id int not null,
    foreign key (service_type_id) references tour_service_types (id),
    foreign key (category_id) references tour_categories (id),
    foreign key (activity_level_id) references activity_levels (id),
    primary key (id)
  );

create table if not exists
  tour_days (
    id bigint auto_increment,
    title varchar(255) not null,
    day bigint not null default 1,
    img varchar(255) not null,
    description varchar(1023) not null,
    tour_id int not null,
    foreign key (tour_id) references tours (id),
    primary key (id)
  );

create table if not exists
  tour_images (
    id bigint auto_increment,
    path text not null,
    tour_id int not null,
    foreign key (tour_id) references tours (id),
    primary key (id)
  );

/*
 * Segundo grupo
 */
create table if not exists
  genders (
    id int auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    primary key (id)
  );

-- enum ('passport', 'dni-id', 'driver-license')
create table if not exists
  document_types (
    id int auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    primary key (id)
  );

create table if not exists
  countries (
    id int auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    phone_prefix varchar(255) not null unique,
    active_status boolean default true,
    primary key (id)
  );

create table if not exists
  clients (
    id bigint auto_increment,
    full_name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(255),
    birth_date date,
    document_number varchar(255) not null,
    gender_id int not null,
    document_type_id int not null,
    country_id int not null,
    foreign key (gender_id) references genders (id),
    foreign key (document_type_id) references document_types (id),
    foreign key (country_id) references countries (id),
    primary key (id)
  );

/*
 * Tercer grupo
 */
-- estado enum('pendiente', 'confirmada', 'cancelada') not null,
create table if not exists
  reservation_states (
    id int auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    primary key (id)
  );

create table if not exists
  packages (
    id bigint auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    days int not null,
    nights int not null,
    price decimal(10, 2) not null,
    description varchar(1023),
    main_banner varchar(255) not null,
    service_type_id int not null,
    activity_level_id int not null,
    foreign key (activity_level_id) references activity_levels (id),
    primary key (id)
  );

create table if not exists
  reservations (
    id bigint auto_increment,
    start_date date not null,
    alternative_date date not null,
    additional_info varchar(1023) not null,
    heard_about_us varchar(1023) not null,
    reservation_state_id int not null,
    client_id bigint not null,
    tour_id bigint,
    package_id bigint,
    foreign key (reservation_state_id) references reservation_states (id),
    foreign key (client_id) references clients (id),
    foreign key (tour_id) references tours (id),
    foreign key (package_id) references packages (id),
    primary key (id)
  );

create table if not exists
  travelers (
    id bigint auto_increment,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    birth_date date not null,
    document_number varchar(255) not null,
    allergic boolean not null,
    gender_id int not null,
    document_type_id int not null,
    reservation_id bigint not null,
    foreign key (gender_id) references genders (id),
    foreign key (document_type_id) references document_types (id),
    foreign key (reservation_id) references reservations (id),
    primary key (id)
  );

create table if not exists
  tour_packages (
    id bigint auto_increment,
    tour_id bigint not null,
    package_id bigint not null,
    foreign key (tour_id) references tours (id),
    foreign key (package_id) references packages (id),
    primary key (id)
  );

/*
 * Cuarto grupo
 */
-- rol enum('Admin', 'Empleado', 'Cliente') not null,
create table if not exists
  user_roles (
    id int auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    primary key (id)
  );

create table if not exists
  users (
    id bigint auto_increment,
    name varchar(255) not null,
    email varchar(255) not null unique,
    email_verified_at timestamp,
    password varchar(255) not null,
    remember_token varchar(255),
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id)
  );

create table if not exists
  employee_accounts (
    id bigint auto_increment,
    phone varchar(255),
    user_id bigint not null unique,
    employee_id bigint not null unique,
    user_role_id int not null,
    foreign key (user_id) references users (id),
    foreign key (employee_id) references employees (id),
    foreign key (user_role_id) references user_roles (id),
    primary key (id)
  );

/*
 * Quinto grupo
 */
-- estado enum('pendiente', 'pagado', 'fallido') not null,
create table if not exists
  payment_states (
    id int auto_increment,
    code varchar(255) not null unique,
    name varchar(255) not null unique,
    primary key (id)
  );

create table if not exists
  payments (
    id bigint auto_increment,
    amount decimal(10, 2) not null,
    payment_date timestamp not null,
    payment_method varchar(255) not null,
    payment_state_id int not null,
    reservation_id bigint not null,
    foreign key (payment_state_id) references payment_states (id),
    foreign key (reservation_id) references reservations (id),
    primary key (id)
  );
