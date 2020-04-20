import React from "react";
import {Card} from '../card/card'

import "./card-list.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
