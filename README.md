# Easy Go List

## Setup

To run Easy Go List, you'll need to take the following steps:

* Don't fork or clone this repo! Instead, create a new, empty
  directory on your machine and `git init` (or create an empty repo on
  Github and clone it to your local machine)

* Now you will have to add this project as a remote and merge it into your own repository.

```
git remote add boilermaker git@github.com:FullstackAcademy/fs-app-template.git
git fetch boilermaker
git merge boilermaker/main
git branch -m master main
```

## Database

Now that you've got the code, follow these step up the local database:

* `npm install`
* Create postgres databases (`easy-grocery-list` should match the `name`
  parameter in `package.json`):

```
createdb easy-grocery-list
```

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries
- start:dev:seed will start your server and also seed your database 

Now, you should be deployed!
