
# Book Your Book

It's a CRUD appplication based on django for backend and react for frontend. First user has to register himself and then login so that he access the books he added. Then he can add a book with it's name, description and price and can also delete , edit or read that information.



## Authors

- [@AnjaliChauhan](https://github.com/2511anjali/Book-Your-Book)


 ##Setup
  -First you need to create a root directory and create a virtual environment inside it and activate it
  ```
  python -m venv env
  env/Scripts/activate
  ```
  Then create a requirements.txt file as mentioned in frontend directory and run
  ```
  pip install -r requirements.txt
  ``` 
  it will install all the required packages.
  -Then for backend setup run
  ```
  django-admin startproject backend
  cd backend
  python manage.py startapp api
  python manage.py runserver
  ```
  -And for frontend run
  ```
  npm create vite@latest frontend -- --template react
  cd frontend
  npm run dev
  ```


## Installation
Install the project from the github repo - https://github.com/2511anjali/Book-Your-Book


and run following commands
```bash
  npm install 
  npm run build
```
    
## To run the project

run the command
```
npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

