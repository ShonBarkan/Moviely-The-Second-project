import React, {Component} from 'react'
import AllMovies from './allMovies';
import PageButton from './pageButton'


const HomePage = (props) => {
    const {movies ,genreWeAre, deletMovie, isLike, pageButton,moveToPage}=props

    const stylePage={
        display: 'flex',
        flexDirection: 'row',

    }
    
    return(<div className="bg-dark">

        <h1  className="col text-warning text-center">{genreWeAre}</h1>

        <AllMovies {...props} />

        {movies.length===0? <h3 className="text-warning text-center">no movie, please add {genreWeAre==='All Movies'? 'a movie': genreWeAre + ' movie or change genre '}</h3>:null}

        <div style={stylePage}>
        {pageButton.map(page=> <PageButton  key={page} num={page} moveToPage={(num)=>moveToPage(num)}/>)}
        </div>
    </div>);
}

export default HomePage;
