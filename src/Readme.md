Mifration: 

create `sequelize-cli migration:generate --name user`
make migration `npm run sequelize db:migrate:all`
undo migration `npm run sequelize db:migrate:undo`

Seeding:

create `sequelize-cli seed:generate --name user`
make seeds `npm run sequelize db:seed:all`
undo seeds `npm run sequelize db:seed:undo:all`