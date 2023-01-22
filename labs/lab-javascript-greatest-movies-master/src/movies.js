// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let allDirectors = []
    for (let i = 0; i < moviesArray.length; i++){
     allDirectors.push(moviesArray[i].director);
    }
   return [...new Set(allDirectors)];
  };
  console.log(getAllDirectors(movies));

  //second option 

//   function getAllDirectors(moviesArray){
//     return moviesArray.map((movie) => movie.director);
//    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    let filteredMovies = moviesArray.filter( e => {
        return e.director === "Steven Spielberg" && e.genre.includes("Drama")});
    return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length){
        return 0;
    }
        let scores = [];
    for (let i = 0; i < moviesArray.length; i++) {
        if (!moviesArray[i].score){
            scores.push(0);
        } else {
        scores.push(moviesArray[i].score);  
    }
}
    let scoresAverage = scores.reduce((a, b) =>  a + b)/scores.length;
    // console.log(scores);
    return Number(scoresAverage.toFixed(2));
}

//Second shorter version

    const scoresAverage2 = (moviesArray) => {
        if (!movies.length) return 0;
        const totalScore = moviesArray.reduce((accumulator, currentValue) => {
            if (currentValue.score) {
                return accumulator + currentValue.score;
            } else { 
                return accumulator
            }
        }, 0);
        return Number((totalScore/moviesArray.length)).toFixed(2);
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter( e => {
        return e.genre.includes("Drama")});
    return scoresAverage(dramaMovies);
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//WORKS WITHOUT TITLEORDER
// function orderByYear(moviesArray) {
//     let sortedByYear = moviesArray.slice(0).sort((one, two) => one.year > two.year ? 1 : -1);
 //     return sortedByYear;
// }

//Con sort the title si el año falla
function orderByYear(moviesArray) {
let sortedByYear = moviesArray.slice(0).sort((one, two) => {
    if (one.year > two.year) return one.year - two.year
    if (one.year < two.year) return one.year - two.year
    else return one.title.localeCompare(two.title);
  });
  return sortedByYear;
};
console.table(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movieTitles = moviesArray.map((movie) => movie.title);
    let sortByTitle = movieTitles.sort((a, b) => a > b ? 1 : -1);
    return sortByTitle.slice(0,20);
}
console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {
    // let movieHoursToMinutes = moviesArray.map((movie) => movie.duration.substring(0, 1)*60);
    // let minsIsolated = moviesArray.map((movie) => movie.duration.substring(3,5).replace(/[a-z]+/g, ""));
    // let sumMinsAndHs = movieHoursToMinutes.map((num, index) => {
    //     return num + Number(minsIsolated[index]);
    // })
    // return sumMinsAndHs;}

    //SOLUTION

   //Part 001
const convertHours = (hourString) => {
    let calculateHour = hourString.split("h");
    return calculateHour[0] * 60;
  };
  // Part 002
  const convertMinutes = (minuteString) => {
    let calculateMinutes = minuteString.split("min");
    return Number(calculateMinutes[0]);
  };
  // Part 003
  const convertDuration = (duration) => {
    let timePieces = duration.split(" ");
  
    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);
  
    return minutes;
  };
  // Part 004
  const turnHoursToMinutes = (movies) => {
    let newCentArray = movies.map((movie) => {
      let newMovie = {};
      newMovie.title = movie.title;
      newMovie.year = movie.year;
      newMovie.director = movie.director;
      newMovie.duration = convertDuration(movie.duration);
      newMovie.genre = movie.genre;
      newMovie.rate = movie.rate;
  
      return newMovie;
    });
  
    return newCentArray;
  };

console.log(turnHoursToMinutes(movies));
//duration: '2h 22min',




// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    if (!movies.length) return null;

    let masterObject = {};
  
    movies.forEach((movie) => {
      if (!masterObject[movie.year]) {
        masterObject[movie.year] = [movie];
      } else {
        masterObject[movie.year].push(movie);
      }
    });
  
    let highest = 0;
    let theActualYear;
    for (let theYear in masterObject) {
      if (scoresAverage(masterObject[theYear]) > highest) {
        highest = scoresAverage(masterObject[theYear]);
        theActualYear = theYear;
      }
    }
    return `The best year was ${theActualYear} with an average score of ${highest}`;
  };

