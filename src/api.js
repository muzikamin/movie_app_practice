const fetch = require("node-fetch");
// 원래 axios를 사용할 때는 import로 사용을 했는데
// 이 버전에서는 require이라는 매서드로 불러오게 됨

const baseUrl = "https://api.themoviedb.org/3/";
// 기본 Url 설정
// 뒤의 3은 버전을 뜻함

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzNkZTVjM2U5MTcyZjIwYTEwZWFiOGU3MmQ3MjFlMyIsIm5iZiI6MTcyMDk2NzgyOS4xMTY1NjYsInN1YiI6IjY2OGY5NjUwZDhiZThlNGZhZWE3YTAzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IIslX2EIZ7QwH-pm3iiAI16_WmXMHMFvDmv5mwI6GyA",
    // 인증에 관련된 것, 인증키
  },
  //   객체 형식으로 가져오기
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upComing = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const movieDetail = (movie_id) =>
  fetch(url(`movie/${movie_id}`), options).then((res) => res.json());

// 식이 한 줄만 나온다면 중괄호 안 열고 바로 적기 (바로 리턴함)
// 기본 URl / 요청하는데 필요한 option
// baseUrl 뒤에 현재 상영작의 링크도 적어줘야 하니 연결연산자인 + 로 "movie/now_playing"붙여주기
// 요청하는 query인 ? 붙이는데, 언어(language)도 요청해야하니 ko-kr 붙이기
// "movie/now_playing?language=ko-kr"
