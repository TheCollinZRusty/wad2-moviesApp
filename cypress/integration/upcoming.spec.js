let Upcoming;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));



// const filterByTitle = (movieList, titleId) =>
//   movieList.filter((m) => m.genre_ids.includes(titleId));


describe("Upcoming ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        Upcoming = response.results
      })
      
  })
  beforeEach(() => {
    cy.visit("movies/Upcoming")
  });

  describe("Base tests", () => {
    describe("Upcoming", () => {
        beforeEach(() => {
          cy.visit("movies/Upcoming");
        });
      
        describe("Base test", () => {
          it("displays page header", () => {
            cy.get("h2").contains("Upcoming Movies");
            cy.get(".badge").contains(20);
          });
        })
      })
  });
  describe("Filtering", () => {
    describe("By movie title" ,() => {
      it("should display movies with 'p ' in the title", () => {
        const searchString = 'p'
        const matchingMovies = filterByTitle(Upcoming, searchString );
        cy.get("input").clear().type(searchString) ;
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
          .find(".card-title")
          .should("have.text", matchingMovies[index].title);
        });
      })
      it("should display movies with 'o' in the title", () => {
        const searchString = "o";
        const matchingMovies = filterByTitle(Upcoming, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
          .find(".card-title")
          .should("have.text", matchingMovies[index].title);
        })
      })
      it("should display no movies when exceptional characters are entered", () => {
        const searchString = "xyz";
        const matchingMovies = filterByTitle(Upcoming, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", null);
      })
    })
    describe("By movie genre", () => {
        it("should display movies with the specified genre only", () => {
          const selectedGenreId = 35;
          const selectedGenreText = "Comedy";
          const matchingMovies = filterByGenre(Upcoming, selectedGenreId);
          cy.get("select").select(selectedGenreText); 
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
          });      
        });
        
    });
    describe("By movie genre and title", () => {
        it("should display movies with the specified genre only", () => {
          const selectedGenreId = 35;
          const selectedGenreText = "Comedy";
          const matchingMovies = filterByGenre(Upcoming, selectedGenreId);
          cy.get("select").select(selectedGenreText); 
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
          });      
        });
        it("should display movies with 'p ' in the title", () => {
            const searchString = 'p'
            const matchingMovies = filterByTitle(Upcoming, searchString );
            cy.get("input").clear().type(searchString) ;
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
            });
          })
    });
  })
})