![Image](/mainpage.png)

<h1 align="center"> Product Filter </h1>

Web app for a technical task which displays products with filters as price range, colors; and also search according to brand name. Preview it [here](https://products-filter.herokuapp.com).

# What is used?

![Image](/drr.png)

- Django Rest Framework (backend server)
- ReactJS (frontend)
- Redux (State management in React)
- [React-Select](https://github.com/JedWatson/react-select) by JedWatson
- [React-Paginate](https://github.com/AdeleD/react-paginate) by AdeleD

# Installation

- `git clone https://github.com/VinayakBagaria/Product-Filter`
- `pip install -r requirements.txt` - installs dependencies for backend server.
- `cd frontend && yarn` - installs dependencies for frontend serve
- `yarn start` - run the app on frontend.
- `python manage.py runserver` - run the app on backend.

Get the frontend like the above screenshot at:

     GET http://localhost:3000

Backend is at:

     GET http://localhost:8000

# Deploy to Heroku

- `cd frontend && yarn run build` - Builds frontend dependencies to generate static files
- `heroku login` - login with heroku credentials
- `heroku create <app_name>` - add Heroku to project with a custom app name
- `git push heroku master` - Deploy to Heroku with the frontend build files rendered by server

Heroku will generate a url for you

      http://<app_name>.herokuapp.com

## TODO and Improvements

- [ ] Docker integration
- [ ] GraphQL (which would reduce & simplify both frontend and backend code by a lot)
- [x] Flow (React dependency for type management - installed but not used)
- [ ] Better development tools and deployment
