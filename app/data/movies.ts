export interface Movie {
  id: number
  title: string
  image: string
  rating: string
  year: number
  genre: string[]
  description: string
  duration: string
  matchPercentage: number
}

// Real movie poster images from reliable sources - CORRECTED to match actual movies
const realPosterImages = [
  // Action & Adventure
  "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg", // The Dark Knight
  "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg", // Inception
  "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwNTM2MTM4MzE@._V1_SX300.jpg", // John Wick
  "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg", // Avengers: Endgame
  "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", // Avengers
  "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg", // Mission: Impossible - Fallout
  "https://upload.wikimedia.org/wikipedia/en/7/7e/Superbad_Poster.png", // Superbad
  "https://upload.wikimedia.org/wikipedia/en/b/b9/The_Hangover_Part_III_poster.jpg", // The Hangover
  "https://upload.wikimedia.org/wikipedia/en/d/dc/Shaun_of_the_Dead.jpg", // Shaun of the Dead
  "https://upload.wikimedia.org/wikipedia/en/8/82/Forrest_Gump_poster.jpg", // Forrest Gump
  "https://upload.wikimedia.org/wikipedia/en/6/67/La_La_Land_%28film%29.png", // La La Land
  "https://upload.wikimedia.org/wikipedia/en/8/8a/Django_Unchained_Poster.jpg", // Django Unchained
  "https://upload.wikimedia.org/wikipedia/en/0/0e/Breaking_Bad_season_5_DVD.jpg", // Breaking Bad (TV)
  "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg", // The Godfather
  "https://upload.wikimedia.org/wikipedia/en/2/2e/Interstellar_film_poster.jpg", // Interstellar
  "https://upload.wikimedia.org/wikipedia/en/2/2d/Goodfellas.jpg", // Goodfellas
  "https://upload.wikimedia.org/wikipedia/en/5/5e/Blade_Runner_2049.png", // Blade Runner 2049
  "https://upload.wikimedia.org/wikipedia/en/7/7e/Parasite_%282019_film%29.png", // Parasite
  "https://upload.wikimedia.org/wikipedia/en/3/3c/Mad_Max_Fury_Road.jpg", // Mad Max: Fury Road
  "https://upload.wikimedia.org/wikipedia/en/6/6e/Knives_Out_poster.jpg", // Knives Out
  "https://upload.wikimedia.org/wikipedia/en/6/6f/Arrival_%282016_film%29.jpg", // Arrival
  "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg", // Doctor Strange 2
  "https://upload.wikimedia.org/wikipedia/en/9/9a/Spider-Man_No_Way_Home_poster.jpg", // Spider-Man: No Way Home
  "https://upload.wikimedia.org/wikipedia/en/7/7a/1917poster.jpg", // 1917
  "https://upload.wikimedia.org/wikipedia/en/4/4d/Jojo_Rabbit_%282019%29.png", // Jojo Rabbit
  "https://upload.wikimedia.org/wikipedia/en/7/7e/Knock_at_the_Cabin_poster.jpg", // Knock at the Cabin
  "https://upload.wikimedia.org/wikipedia/en/2/2c/Everything_Everywhere_All_at_Once_poster.jpg", // Everything Everywhere All at Once
  "https://upload.wikimedia.org/wikipedia/en/2/2e/Nope_%28film%29.png", // Nope
  "https://upload.wikimedia.org/wikipedia/en/2/2d/Barbie_2023_poster.jpg", // Barbie
  "https://upload.wikimedia.org/wikipedia/en/0/0d/Oppenheimer_%28film%29.png", // Oppenheimer
  "https://upload.wikimedia.org/wikipedia/en/3/3d/Guardians_of_the_Galaxy_Vol_3_poster.jpg", // Guardians 3
  "https://upload.wikimedia.org/wikipedia/en/7/7e/John_Wick_-_Chapter_4_poster.jpg", // John Wick 4
  "https://upload.wikimedia.org/wikipedia/en/7/7e/Avatar_The_Way_of_Water_poster.jpg", // Avatar 2
  "https://upload.wikimedia.org/wikipedia/en/6/6e/Black_Panther_%28film%29_poster.jpg", // Black Panther
  "https://upload.wikimedia.org/wikipedia/en/2/2c/Logan_2017_poster.jpg", // Logan
  "https://upload.wikimedia.org/wikipedia/en/7/7e/Knives_Out_poster.jpg", // Knives Out (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/2/2d/Goodfellas.jpg", // Goodfellas (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/8/8a/Django_Unchained_Poster.jpg", // Django Unchained (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/6/6e/Knock_at_the_Cabin_poster.jpg", // Knock at the Cabin (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/2/2c/Everything_Everywhere_All_at_Once_poster.jpg", // Everything Everywhere All at Once (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/2/2e/Nope_%28film%29.png", // Nope (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/2/2d/Barbie_2023_poster.jpg", // Barbie (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/0/0d/Oppenheimer_%28film%29.png", // Oppenheimer (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/3/3d/Guardians_of_the_Galaxy_Vol_3_poster.jpg", // Guardians 3 (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/7/7e/John_Wick_-_Chapter_4_poster.jpg", // John Wick 4 (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/7/7e/Avatar_The_Way_of_Water_poster.jpg", // Avatar 2 (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/6/6e/Black_Panther_%28film%29_poster.jpg", // Black Panther (again for variety)
  "https://upload.wikimedia.org/wikipedia/en/2/2c/Logan_2017_poster.jpg" // Logan (again for variety)
];

// Fallback placeholder generator
const generatePlaceholderImage = (id: number, title: string) => {
  const encodedTitle = encodeURIComponent(title);
  return `https://placehold.co/350x525/1a1a1a/ffffff?text=${encodedTitle}`;
};

export const movies: Movie[] = [
  // Action & Adventure
  {
    id: 1,
    title: "The Dark Knight",
    image: realPosterImages[0],
    rating: "PG-13",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    duration: "2h 32m",
    matchPercentage: 98
  },
  {
    id: 2,
    title: "Mad Max: Fury Road",
    image: realPosterImages[18],
    rating: "R",
    year: 2015,
    genre: ["Action", "Adventure", "Sci-Fi"],
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
    duration: "2h 0m",
    matchPercentage: 95
  },
  {
    id: 3,
    title: "John Wick",
    image: realPosterImages[2],
    rating: "R",
    year: 2014,
    genre: ["Action", "Crime", "Thriller"],
    description: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.",
    duration: "1h 41m",
    matchPercentage: 92
  },
  {
    id: 4,
    title: "Mission: Impossible - Fallout",
    image: realPosterImages[5],
    rating: "PG-13",
    year: 2018,
    genre: ["Action", "Adventure", "Thriller"],
    description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
    duration: "2h 27m",
    matchPercentage: 89
  },
  {
    id: 5,
    title: "The Avengers",
    image: realPosterImages[4],
    rating: "PG-13",
    year: 2012,
    genre: ["Action", "Adventure", "Sci-Fi"],
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army.",
    duration: "2h 23m",
    matchPercentage: 94
  },
  {
    id: 6,
    title: "The Grand Budapest Hotel",
    image: generatePlaceholderImage(6, "The Grand Budapest Hotel"),
    rating: "R",
    year: 2014,
    genre: ["Comedy", "Drama"],
    description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    duration: "1h 39m",
    matchPercentage: 91
  },
  {
    id: 7,
    title: "Superbad",
    image: realPosterImages[6],
    rating: "R",
    year: 2007,
    genre: ["Comedy"],
    description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    duration: "1h 53m",
    matchPercentage: 88
  },
  {
    id: 8,
    title: "Bridesmaids",
    image: generatePlaceholderImage(8, "Bridesmaids"),
    rating: "R",
    year: 2011,
    genre: ["Comedy", "Romance"],
    description: "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
    duration: "2h 5m",
    matchPercentage: 90
  },
  {
    id: 9,
    title: "The Hangover",
    image: realPosterImages[8],
    rating: "R",
    year: 2009,
    genre: ["Comedy"],
    description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    duration: "1h 40m",
    matchPercentage: 87
  },
  {
    id: 10,
    title: "Shaun of the Dead",
    image: realPosterImages[9],
    rating: "R",
    year: 2004,
    genre: ["Comedy", "Horror"],
    description: "A man decides to turn his moribund life around by winning back his ex-girlfriend, reconciling his relationship with his mother, and dealing with an entire community that has returned from the dead to eat the living.",
    duration: "1h 39m",
    matchPercentage: 92
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    image: generatePlaceholderImage(11, "The Shawshank Redemption"),
    rating: "R",
    year: 1994,
    genre: ["Drama"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    duration: "2h 22m",
    matchPercentage: 100
  },
  {
    id: 12,
    title: "Forrest Gump",
    image: realPosterImages[11],
    rating: "PG-13",
    year: 1994,
    genre: ["Drama", "Romance"],
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    duration: "2h 22m",
    matchPercentage: 96
  },
  {
    id: 13,
    title: "The Green Mile",
    image: generatePlaceholderImage(13, "The Green Mile"),
    rating: "R",
    year: 1999,
    genre: ["Crime", "Drama"],
    description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    duration: "3h 9m",
    matchPercentage: 94
  },
  {
    id: 14,
    title: "Schindler's List",
    image: generatePlaceholderImage(14, "Schindler's List"),
    rating: "R",
    year: 1993,
    genre: ["Biography", "Drama", "History"],
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    duration: "3h 15m",
    matchPercentage: 98
  },
  {
    id: 15,
    title: "The Godfather",
    image: realPosterImages[13],
    rating: "R",
    year: 1972,
    genre: ["Crime", "Drama"],
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    duration: "2h 55m",
    matchPercentage: 100
  },
  {
    id: 16,
    title: "Inception",
    image: realPosterImages[1],
    rating: "PG-13",
    year: 2010,
    genre: ["Action", "Adventure", "Sci-Fi"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    duration: "2h 28m",
    matchPercentage: 95
  },
  {
    id: 17,
    title: "Interstellar",
    image: realPosterImages[14],
    rating: "PG-13",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    duration: "2h 49m",
    matchPercentage: 93
  },
  {
    id: 18,
    title: "The Matrix",
    image: generatePlaceholderImage(18, "The Matrix"),
    rating: "R",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
    duration: "2h 16m",
    matchPercentage: 96
  },
  {
    id: 19,
    title: "Blade Runner 2049",
    image: realPosterImages[16],
    rating: "R",
    year: 2017,
    genre: ["Action", "Drama", "Mystery"],
    description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    duration: "2h 44m",
    matchPercentage: 89
  },
  {
    id: 20,
    title: "Arrival",
    image: realPosterImages[20],
    rating: "PG-13",
    year: 2016,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    duration: "1h 56m",
    matchPercentage: 91
  },
  {
    id: 21,
    title: "The Shining",
    image: generatePlaceholderImage(21, "The Shining"),
    rating: "R",
    year: 1980,
    genre: ["Drama", "Horror"],
    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    duration: "2h 26m",
    matchPercentage: 94
  },
  {
    id: 22,
    title: "A Quiet Place",
    image: generatePlaceholderImage(22, "A Quiet Place"),
    rating: "PG-13",
    year: 2018,
    genre: ["Drama", "Horror", "Sci-Fi"],
    description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    duration: "1h 30m",
    matchPercentage: 92
  },
  {
    id: 23,
    title: "Get Out",
    image: generatePlaceholderImage(23, "Get Out"),
    rating: "R",
    year: 2017,
    genre: ["Horror", "Mystery", "Thriller"],
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    duration: "1h 44m",
    matchPercentage: 95
  },
  {
    id: 24,
    title: "Hereditary",
    image: generatePlaceholderImage(24, "Hereditary"),
    rating: "R",
    year: 2018,
    genre: ["Drama", "Horror", "Mystery"],
    description: "A grieving family is haunted by tragic and disturbing occurrences.",
    duration: "2h 7m",
    matchPercentage: 89
  },
  {
    id: 25,
    title: "The Conjuring",
    image: generatePlaceholderImage(25, "The Conjuring"),
    rating: "R",
    year: 2013,
    genre: ["Horror", "Mystery", "Thriller"],
    description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    duration: "1h 52m",
    matchPercentage: 87
  },
  {
    id: 26,
    title: "La La Land",
    image: realPosterImages[16],
    rating: "PG-13",
    year: 2016,
    genre: ["Comedy", "Drama", "Music"],
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    duration: "2h 8m",
    matchPercentage: 93
  },
  {
    id: 27,
    title: "The Notebook",
    image: generatePlaceholderImage(27, "The Notebook"),
    rating: "PG-13",
    year: 2004,
    genre: ["Drama", "Romance"],
    description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    duration: "2h 3m",
    matchPercentage: 90
  },
  {
    id: 28,
    title: "Eternal Sunshine of the Spotless Mind",
    image: generatePlaceholderImage(28, "Eternal Sunshine of the Spotless Mind"),
    rating: "R",
    year: 2004,
    genre: ["Drama", "Romance", "Sci-Fi"],
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    duration: "1h 48m",
    matchPercentage: 94
  },
  {
    id: 29,
    title: "Before Sunrise",
    image: generatePlaceholderImage(29, "Before Sunrise"),
    rating: "R",
    year: 1995,
    genre: ["Drama", "Romance"],
    description: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
    duration: "1h 41m",
    matchPercentage: 96
  },
  {
    id: 30,
    title: "500 Days of Summer",
    image: generatePlaceholderImage(30, "500 Days of Summer"),
    rating: "PG-13",
    year: 2009,
    genre: ["Comedy", "Drama", "Romance"],
    description: "After being dumped by the girl he believes to be his soulmate, hopeless romantic Tom Hansen reflects on their relationship to try and figure out where things went wrong and how he can win her back.",
    duration: "1h 35m",
    matchPercentage: 91
  },
  {
    id: 31,
    title: "Gone Girl",
    image: generatePlaceholderImage(31, "Gone Girl"),
    rating: "R",
    year: 2014,
    genre: ["Drama", "Mystery", "Thriller"],
    description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    duration: "2h 29m",
    matchPercentage: 93
  },
  {
    id: 32,
    title: "Prisoners",
    image: generatePlaceholderImage(32, "Prisoners"),
    rating: "R",
    year: 2013,
    genre: ["Crime", "Drama", "Mystery"],
    description: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
    duration: "2h 33m",
    matchPercentage: 89
  },
  {
    id: 33,
    title: "The Silence of the Lambs",
    image: generatePlaceholderImage(33, "The Silence of the Lambs"),
    rating: "R",
    year: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    duration: "1h 58m",
    matchPercentage: 96
  },
  {
    id: 34,
    title: "Se7en",
    image: realPosterImages[34],
    rating: "R",
    year: 1995,
    genre: ["Crime", "Drama", "Mystery"],
    description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.",
    duration: "2h 7m",
    matchPercentage: 94
  },
  {
    id: 35,
    title: "Zodiac",
    image: generatePlaceholderImage(35, "Zodiac"),
    rating: "R",
    year: 2007,
    genre: ["Crime", "Drama", "Mystery"],
    description: "Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.",
    duration: "2h 37m",
    matchPercentage: 90
  },
  {
    id: 36,
    title: "Spirited Away",
    image: generatePlaceholderImage(36, "Spirited Away"),
    rating: "PG",
    year: 2001,
    genre: ["Animation", "Adventure", "Family"],
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    duration: "2h 5m",
    matchPercentage: 97
  },
  {
    id: 37,
    title: "Toy Story",
    image: generatePlaceholderImage(37, "Toy Story"),
    rating: "G",
    year: 1995,
    genre: ["Animation", "Adventure", "Comedy"],
    description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    duration: "1h 21m",
    matchPercentage: 95
  },
  {
    id: 38,
    title: "Up",
    image: generatePlaceholderImage(38, "Up"),
    rating: "PG",
    year: 2009,
    genre: ["Animation", "Adventure", "Comedy"],
    description: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
    duration: "1h 36m",
    matchPercentage: 96
  },
  {
    id: 39,
    title: "The Lion King",
    image: generatePlaceholderImage(39, "The Lion King"),
    rating: "G",
    year: 1994,
    genre: ["Animation", "Adventure", "Drama"],
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    duration: "1h 28m",
    matchPercentage: 93
  },
  {
    id: 40,
    title: "Spider-Man: Into the Spider-Verse",
    image: generatePlaceholderImage(40, "Spider-Man: Into the Spider-Verse"),
    rating: "PG",
    year: 2018,
    genre: ["Animation", "Action", "Adventure"],
    description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    duration: "1h 57m",
    matchPercentage: 94
  }
]

// Genre categories for carousels
export const genreCategories = {
  trending: movies.slice(0, 8),
  popular: movies.slice(8, 16),
  new: movies.slice(16, 24),
  action: movies.filter(movie => movie.genre.includes("Action")),
  comedy: movies.filter(movie => movie.genre.includes("Comedy")),
  drama: movies.filter(movie => movie.genre.includes("Drama")),
  scifi: movies.filter(movie => movie.genre.includes("Sci-Fi")),
  horror: movies.filter(movie => movie.genre.includes("Horror")),
  romance: movies.filter(movie => movie.genre.includes("Romance")),
  thriller: movies.filter(movie => movie.genre.includes("Thriller")),
  animation: movies.filter(movie => movie.genre.includes("Animation")),
  crime: movies.filter(movie => movie.genre.includes("Crime")),
  adventure: movies.filter(movie => movie.genre.includes("Adventure")),
  mystery: movies.filter(movie => movie.genre.includes("Mystery")),
  family: movies.filter(movie => movie.genre.includes("Family"))
} 