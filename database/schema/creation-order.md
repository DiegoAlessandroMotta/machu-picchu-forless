# Jerarquía de la base de datos

## Contact

- contacts:0

## Tours

- tour_service_types:1
- tour_categories:1
- activity_levels:1
- tours:4 (tour_service_types, tour_categories, activity_levels)
- tour_days:0 (tours)
- tour_images:0 (tours)

## Customers

- genders:1
- document_types:1
- countries:1
- customers:1 (genders, document_types, countries)

## Reservations

- reservation_states:1
- packages:2 (activity_levels)
- reservations:2 (reservation_states, customers, tours?, packages?)
- travelers:0 (genders, document_types, reservations)
- tour_packages:0 (tours, packages)

## Accounts

- user_roles:1
- users:1
- employee_accounts:0 (users, user_roles)

## Payment

- payment_states:1
- payment_methods:1
- payments:0 (payment_states, payment_methods, reservations)
