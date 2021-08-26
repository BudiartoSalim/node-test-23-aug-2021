# Duration: 23 Aug 2021 - 27 Aug 2021 19:00 UTC+7

# Status
1. SQL Queries = done
2. Express Backend = not done
3. Refactor Test = done
4. Logic Test = done

# How to run express backend
1. cd  2-express_backend
2. DO NOT FORGET to set your env variables in .envtemplate and rename it to .env
3. npm run migrate          // this will create the database and table needed
4. npm run dev              // will run in dev mode, using nodemon
5. npm run start            // will run for production
6. npm run test             // runs unit test

# How to use the API
No auth or keys need to be given (except in the .env files)

Endpoints provided:
- GET "/search" 
Have 4 query params => title, page, type, yearOfRelease
Will return an object "Search" with an array of object movies that are found.

- GET "/detail/:imdbID"
Will return 1 exact movie that have matching imdbID with the one specified in the url params
