# cointab-assignment
“Fetch Users button the application should fetch data from the (https://randomuser.me/) api and store it in a table of any name in the database, the data fetch should be in bulk for e.g., if the api returns a single record then the application should be such a way that it will fetch around 50 or 100 records on a single click”


The important part in above problem statement is to make sure that bulk fetch happens. SO even if randomuser.me api give 1 user, then in our node server- our api should run a loop and fetch 50 items and then push them in database + send a success response


The Fetch Users button click should throw an error alert if already some data fetch is going on.
How to achieve the above- Create a global flag (a variable in the controller flag ) and make it true whenever the fetch api is hit. And just before sending back response make this false.
Now whenever the fetch api is hit again, check if the flag is false. If flag is false , then hit the api else respond that another fetch request is ongoing- Try later
