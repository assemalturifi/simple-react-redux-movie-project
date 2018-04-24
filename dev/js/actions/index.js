
export const selectMovie=(movie)=>{
    console.log("You clicked on user: ", movie.name);
    return {
      type: "MOVIE_SELECTED",
      payload:movie
    }
};
