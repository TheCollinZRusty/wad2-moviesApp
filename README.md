# Assignment 1 - ReactJS app.

Name: Owen Collins

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + TMDB API integration - The use of The Movie Database API. 
 + React UI - The use of React UI.
 + Routing - Correct routing for each webpage.
 + 5 Endpoints - 5 endpoints displaying different types of movies. 
 + Firebase Login - The use of Firebase login and Authentication which allows users to create a Account. 
 + filtering - Can filter based on Genre and text. 
 + Cypress E2E testing - Cypress testing that tests the Web App's UI. 
 + Cypress Dashboard Integration - Allow tests to be viewed online using the Cypress Dashboard.
 + Gitlab Integration - Using the Gitlab dashboard with Pipelines. 
 + Branching Policy - Used 3 branches, Development, Staging and master. 
 + Custom Cypress - Used cypress custom command for login. 

## Setup requirements (If required).

npm-
+ npm install 
+ npm start 

cypress- 
+ npm install cypress --save-dev
+ npx cypress open


## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres.
+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies.
+ https://api.themoviedb.org/3/movie/popular - get a list of popular movies.
+ https://api.themoviedb.org/3/movie/now_playing - get a list of movies now playing.
+ https://api.themoviedb.org/3/movie/top_rated - get a list of top rated movies.

## App Design.

### UI Design.


![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

![][login]
>Allows the user to login.

![][signup]
>Allows user to sign up.

![][dashboard]
>Allows user to sign out.

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (public) - displays the user's favorite movies selection.
+ /reviews/:id (private) - displays the full text of a movie review.
+ /login (public) - displays login page to the user. 
+ /update-profile (private) - displays update-profile page to the user. 
+ /signup (public) - displays signup page to the user. 
+ /dashboard (private) - displays dashboard page to the user. 
+ /forgot-password (public) - displays forgotpassword page to the user. 
+ /home (private) - displays home page to the user. 
+ /reviews/form (private) - displays addreview page to the user. 
+ /reviews/:id (private) - displays review page to the user. 
+ /movies/favorites (private) - displays favorites page to the user. 
+ /movies/watchlist (private) - displays watchlist page to the user. 
+ /movies/Upcoming (private) - displays upcoming page to the user. 
+ /movies/Popular (private) - displays popular page to the user. 
+ /movies/Top_Rated (private) - displays top_rated page to the user. 
+ /movies/Now_Playing (private) - displays now_playing page to the user. 

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][loginLink]
>Clicking the 'Login Button' with the correct user inputs will allow the user to login.

![][signoutLink]
>Clicking the signout link will signout the user from the site. 

![][loginLink]
>Clicking the 'Sign up' link will allow the user to create an account.

![][loginLink]
>Clicking the 'Forgot Password' link will allow the user to change password.

## Independent learning (If relevant).

+ Firebase integration - I learned from video Material how to implement Firebase Authentication into the React framework.
- reference = https://www.youtube.com/watch?v=PKwu15ldZ7k&fbclid=IwAR1Vl_JCbrooJKyPHblAYfvTpCJ2JWWY3Cjl8EkoS4NP2uYv_mgTNzY7x6I

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Owen Collins

## App Features.


+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails.spec.js 

![][HomePage]

+ Home Page: Displays thes movies that appear on the homepage.

Tests: cypress/integration/home-page.spec.js 

![][login]

+ Login Page: Allows users to login.

Tests: cypress/integration/login.spec.js 

![][navigation]

+ Site header: Allows user to select required page.

Tests: cypress/integration/navigation.spec.js 

![][nowplaying]

+ Now playing : displays now playing movies.

Tests: cypress/integration/nowplaying.spec.js

![][popular]

+ popular: displays popular movies.

Tests: cypress/integration/popular.spec.js

![][toprated]

+ toprated: displays top rated movies.

Tests: cypress/integration/toprated.spec.js

![][upcoming]

+ upcoming: displays upcoming movies.

Tests: cypress/integration/upcoming.spec.js

![][watchlist]

+ popular: displays user watchlist.

Tests: cypress/integration/watchlist.spec.js

![][favourites]

+ popular: displays user favourites.

Tests: cypress/integration/favourites.spec.js


## Testing.

Cypress Dashboard URL: ... https://dashboard.cypress.io/projects/gtmos8/ .....


---------------------------------

[movieDetail]: ./public/images/movieDetail.png
[HomePage]: ./public/images/homepage.png
[login]: ./public/images/login.png
[dashboard]: ./public/images/dashboard.png
[favourite]: ./public/images/favourite.png
[nowplaying]: ./public/images/now_playing.png
[popular]: ./public/images/popular.png
[toprated]: ./public/images/top_rated.png
[upcoming]: ./public/images/upcoming.png
[updateprofile]: ./public/images/updateprofile.png
[watchlist]: ./public/images/watchlist.png