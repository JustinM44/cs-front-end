export const environment = {
  production: true,
  paths: {
    auth: {
      login: "/api/authservices/login"
    },
    movieController: {
      getMovie: "/api/movies/getMovie",
      movieList: "/api/movies/getMovies",
      newComment: "/api/movies/submitcomment",
      updatecommentraiting: "/api/movies/submitcommentupdate"
    }
  }
};
