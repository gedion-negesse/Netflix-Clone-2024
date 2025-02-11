import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/requests";
const RowList = () => {
  return (
    //passing the (title) and the (fetch url) as aprop to the child component Row.jsx
    <>
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
    </>
  );
};

export default RowList;
