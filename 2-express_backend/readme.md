2. Please write a small ExpressJS server to search movies from
http://www.omdbapi.com/
The Backend should :
- Have 2 endpoint named "/search" with GET method and "/detail" with GET method
(single movie detail)

- Each API calls should be logged into a MySQL table, specifying DateTime, API
endpoint getting called and the parameters passed
- Contain access credential to call the API as such :
Key : "faf7e5bb&s"
URL : http://www.omdbapi.com/
* Example url call to search is --> GET
http://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page=2
- Be written in ExpressJS framework
Important aspects :
- Readability of code
- Good display on the knowledge of "Separation of Concerns for Codes"
- Write unit tests on some of the important files. Bigger plus points for complete unit
test cases
- Good use of asynchronousy
Plus points:
- Deploy your result to a public URL so we can check the result
- Implementation of Clean Architecture is a BIG plus
- Complete Unit tests