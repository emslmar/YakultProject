# How to run the project

Download the Yakut project and first of all you will need to run an instance of mysql database. In this case I am using MAMP an running it on port 8888 but if you use another one update the .env file

Install node modules by writing this on the terminal:

```bash
npm i
```

Create the database by writing this on the terminal:

```bash
knex migrate:latest
```

Populate the database by writing this on the terminal:

```bash
knex seed:run  
```

Initialize the project by writing this on the terminal:

```bash
sudo nodemon index.js  
```

And that's it the project should be running on port 3000!
