import {useState} from 'react';

const Movie = (props) => {
    const {movieId,movieName,movieGenre,movieRating,like,deletMovie, isLike} = props

    const styleBtn={
        border: 'none',
        backgroundColor: 'transparent'
    }
    const styleTh1={
        width: '10%',
    }
    const styleTh2={
        width: '30%',
    }
    const styleTh3={
        width: '15%',
    }


      

        return (
                <tr>
                    <th style={styleTh1}>{movieId}</th>

                    <th style={styleTh2}>{movieName}</th>

                    <th style={styleTh3}>{movieGenre}</th>

                    <th style={styleTh3}>{movieRating}</th>

                    <th style={styleTh1}>
                        {like===true?
                        <button style={styleBtn} onClick={()=>isLike(movieId)}>&#129505;</button>
                        :
                        <i className="fa-regular fa-heart" onClick={()=>isLike(movieId,movieName)}></i>
                        }
                    </th>
                    <th style={styleTh1}>
                    <i className="fa-regular fa-circle-xmark" onClick={()=>deletMovie(movieId,movieName)}></i>
                    </th>
                </tr>

        );
}
 
export default Movie;

