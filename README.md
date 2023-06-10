## :shopping_cart: Ecommerce Nestjs API :shopping_cart:

<p align="center">
<img src='https://img.shields.io/github/languages/count/munyrasirio/nestjs-ecommerce-api?style=for-the-badge'>
<img src='https://img.shields.io/github/languages/code-size/munyrasirio/nestjs-ecommerce-api?style=for-the-badge'>
<img src="https://img.shields.io/github/last-commit/munyrasirio/nestjs-ecommerce-api?style=for-the-badge" alt="Last Commit" />
<img src="https://img.shields.io/github/license/munyrasirio/nestjs-ecommerce-api?style=for-the-badge" alt="License" />
</p>

<p align="center"> 
  <a href="#install">Installation</a> | <a href="#quickstart">Quickstart</a> | <a href="#contribute">Contribute</a> | <a href="#license">License</a>
</p>

Simple CRUD with database developed with [NestJS](https://nestjs.com/) for introductory studies to the framework. To handle the data [PostgresSQL](https://www.postgresql.org/) and [TypeORM](https://typeorm.io/) were used.

The initial idea of ​​the prototype was developed in the formation of NestJS on the [Alura](https://www.alura.com.br/) platform.

_Obs.: All test files have been removed._

### :rocket: Quickstart <span id='quickstart'></span>

Install the dependencies

```bash
$ yarn install
```

If you already have Docker installed, you can skip this step, but if you don't, follow the [Docker](https://docs.docker.com/get-docker/) guide to install it on you machine.

After that, create an `.env` file on root folder and add your environment variables:

```bash
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=db_ecommerce
DB_ADMIN_EMAIL=
```

With `.env` ready and Docker running, run on your terminal the command to start the container:

```bash
docker-compose up -d
```

Now `pgAdmin` is running! Open your browser and access it: `http://localhost:8081`. Login with the same values from your `.env`!
On admin, click on "Add New Server", give your server a name and navigate to "Connection" tab. Add the missing values based on the `.env` file as well: Host, Port, Username, Password.

After these steps, just save, expand the options for the created server and right click on Databases. Create the bank using the same name of `.env`.

If everything was done properly, you are ready to run the project:

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### :hugs: Contribute <span id='contribute'></span>

1. Fork this repository
2. Create a branch with your feature: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'feat: my feature'`
4. Push your branch: `git push origin my-feature`

### :page_with_curl: License <span id='license'></span>

This project is under the MIT license. Take a look at the [LICENSE](https://github.com/munyrasirio/nestjs-ecommerce-api/blob/main/LICENSE) file for more details.
