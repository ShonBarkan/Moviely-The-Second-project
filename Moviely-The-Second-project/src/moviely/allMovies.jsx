import React, {Component} from 'react'
import Movie from './movie';

const AllMovies = (props) => {
    const {movies ,genreWeAre, deletMovie, isLike, pageButton,moveToPage}=props

    const style={
        backgroundColor: '#e3f2fd',
        width:'95%'
    }

    return( <div className="position-relative" style={style}>

       

        <table className='table text-center'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>genre</th>
                        <th>rating</th>
                        <th>like</th>
                        <th>delet</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => <Movie key={movie.id} movieId={movie.id} movieName={movie.name} movieGenre={movie.genre} movieRating={movie.rating} like={movie.like} deletMovie={(id,name)=>deletMovie(id,name)} isLike={(id,name)=>isLike(id,name)} ></Movie>)}
                </tbody>
        </table>
            

    </div>)
}
 
export default AllMovies


