# Jerarquía de la base de datos

#### Completamente independientes

- contacts

#### Primer orden:

- tipos_servicios_tour:1
- categorias_tour:1
- roles_empleado:1
- personas:3
- roles_usuario:1
- estados_pago:1
- estados_reserva:1
- opciones_comida:1
- generos:1
- tipos_documento:1
- paises:1
- packages:2

#### Segundo orden:

- tours:4 (tipos_servicios_tour, categorias_tour)
- empleados:1 (roles_empleado, personas)
- users:0 (personas, roles_usuario?)
- clientes:1 (generos, personas, tipos_documento, paises)

#### Tercer orden:

- tour_days:0 (tours)
- imagenes_tours:0 (tours)
- tours_packages:0 (tours, packages)
- reservas:1 (estados_reserva, opciones_comida, clientes, packages?, tours?, empleados?)

#### Cuarto orden:

- pagos:0 (estados_pago, reservas)

# v2

#### Tablas independientes:

- contacts

#### Primer grupo:

- tipos_servicios_tour:1
- categorias_tour:1
- tours:4 (tipos_servicios_tour, categorias_tour)
- tour_days:0 (tours)
- imagenes_tours:0 (tours)

#### Segundo grupo:

- roles_empleado:1
- empleados:1 (roles_empleado)

#### Tercer grupo:

- generos:1
- tipos_documento:1
- paises:1
- clientes:1 (generos, tipos_documento, paises)

#### Cuarto grupo:

- estados_reserva:1
- packages:2
- reservas:1 (estados_reserva, clientes, packages?, tours?, empleados?)
- viajeros:0 (generos, tipos_documento, reservas)
- tours_packages:0 (tours, packages)

#### Quinto grupo:

- roles_usuario:1
- users:1
- employees_accounts:0 (users, empleados, roles_usuario)

#### Sexto grupo:

- estados_pago:1
- pagos:0 (estados_pago, reservas)
