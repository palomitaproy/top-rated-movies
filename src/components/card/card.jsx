import React from 'react';
import StarIcon from '@material-ui/icons/Star';


/* import Rating from '@material-ui/lab/Rating'; */

import './card.css'
const imgUrl= 'https://image.tmdb.org/t/p/w500/';
export const Card = props => (
   
        <div className='card-container'>
            <img className="img-size" alt={props.movie.original_title} src={`${imgUrl}${props.movie.poster_path}`} />
             <h2>{props.movie.title}</h2>
             <p><StarIcon className="start-color"/>{props.movie.vote_average}</p>
              
        </div>
    );

