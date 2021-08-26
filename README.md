# Duration: 23 Aug 2021 - 27 Aug 2021 19:00 UTC+7

# Status
1. SQL Queries = done
2. Express Backend = done
3. Refactor Test = done
4. Logic Test = done

# Instructions to run are only for the express backend, but the other tests can also be tested to work as intended.
Refactor and Logic test have multiple different implementations. It was pretty fun so I ended up trying multiple different ways I can solve the problem with.

# How to run express backend
1. cd  2-express_backend
2. npm install
3. DO NOT FORGET to set your env variables in .envtemplate and rename it to .env
4. npm run migrate          // this will create the database and table needed
5. npm run dev              // will run in dev mode, using nodemon
6. npm run start            // will run for production
7. npm run test             // runs unit test

# How to use the API
No auth or keys need to be given (except in the .env files)

Endpoints provided:
- GET "/search" 
Have 4 query params => title, page, type, yearOfRelease
Will return an object "Search" with an array of object movies that are found.

- GET "/detail/:imdbID"
Will return 1 exact movie that have matching imdbID with the one specified in the url params

# Deployed API
API is deployed in Heroku and can be tested. Since both endpoints are GET methods, you can open it directly from browser and see the json return from it.
- baseUrl: https://warm-beyond-53857.herokuapp.com/ 
- example for detail endpoint with url param https://warm-beyond-53857.herokuapp.com/detail/tt4853102
- example for search endpoint with query param https://warm-beyond-53857.herokuapp.com/search?title=Batman&page=2

Unfortunately since Heroku requires credit card registration to use add-on, MySQL cannot be added to the deployed version, and the deployed version have the database call in Controller commented out.

# Lastly, deployed app might be slow on first run due to cold start from Heroku free hosting.
This ExpressJs is a first attempt to try implementing Clean Code Architecture. The implementation might have some mistakes.
