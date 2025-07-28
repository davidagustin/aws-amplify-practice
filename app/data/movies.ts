export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: number;
  genre: string[];
  duration: string;
  description: string;
  director: string;
  cast: string[];
  posterUrl: string;
  backdropUrl: string;
  trailerUrl?: string;
  featured?: boolean;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Sci-Fi", "Action", "Thriller"],
    duration: "2h 28m",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    featured: true
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    duration: "2h 32m",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    featured: true
  },
  {
    id: "3",
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    duration: "2h 49m",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    featured: true
  },
  {
    id: "4",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genre: ["Drama"],
    duration: "2h 22m",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco"
  },
  {
    id: "5",
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: ["Crime", "Drama"],
    duration: "2h 34m",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  },
  {
    id: "6",
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    duration: "2h 16m",
    description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=m8e-FF8MsqU"
  },
  {
    id: "7",
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genre: ["Drama", "Romance"],
    duration: "2h 22m",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=bLvqoHBptjg"
  },
  {
    id: "8",
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: ["Drama"],
    duration: "2h 19m",
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=SUXWAEX2jlg"
  },
  {
    id: "9",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.8,
    genre: ["Action", "Adventure", "Drama"],
    duration: "2h 58m",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjU@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjU@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    featured: true
  },
  {
    id: "10",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genre: ["Crime", "Drama"],
    duration: "2h 55m",
    description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=sY1S34973zA"
  },
  {
    id: "11",
    title: "Goodfellas",
    year: 1990,
    rating: 8.7,
    genre: ["Biography", "Crime", "Drama"],
    duration: "2h 26m",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=qo5jJpHtI1Y"
  },
  {
    id: "12",
    title: "The Silence of the Lambs",
    year: 1991,
    rating: 8.6,
    genre: ["Crime", "Drama", "Thriller"],
    duration: "1h 58m",
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTY@._V1_SX300.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=W6Mm8Sbe__o"
  }
];

export const getFeaturedMovies = () => movies.filter(movie => movie.featured);
export const getMoviesByGenre = (genre: string) => movies.filter(movie => movie.genre.includes(genre));
export const getMovieById = (id: string) => movies.find(movie => movie.id === id);
export const getAllGenres = () => {
  const genres = new Set<string>();
  movies.forEach(movie => movie.genre.forEach(g => genres.add(g)));
  return Array.from(genres).sort();
}; 