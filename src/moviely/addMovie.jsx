import React, {Component} from 'react'
import {useFormik} from 'formik'

const AddMovie = (props) => {

    const {originalMovies ,addNewMovie}=props

    const formik= useFormik({
        initialValues:{
            movieName:'',
            newMovieGanere:'',
            movieGanere:'',
            movieRating:''
        }
    })

    const styleForm={
        width:'60%',
        border: '2px solid wheat'
        }
    



    const a=originalMovies.map(movie=> movie=movie.genre)  
    let a2=[]
    for(let i=0;i<a.length;i++){
        if(!a2.includes(a[i])){
            a2.push(a[i])
        }
    }
    let nextId=null
    {originalMovies.length>0? nextId=originalMovies[originalMovies.length-1].id+1:nextId=1;}


        return (<div>

            <h1 className='text-warning text-center'>Add Movie</h1>

            <h3 className='text-warning text-center'>movie id : #{nextId}</h3>

            <form class="container text-center" style={styleForm}>


                <div class="row">
                    <div className="col form-floating m-3">
                        <input type="text" className="form-control" id="movieName" name='movieName' value={formik.movieName} onChange={formik.handleChange} />
                        <label htmlFor="movieName">Movie Name</label>                   
                    </div>
                    <div className="col form-floating m-3">
                        <input type="number" className="form-control" id="movieRating" name='movieRating' value={formik.movieRating} onChange={formik.handleChange} />
                        <label htmlFor="movieRating">Rating</label>
                    </div>
                </div>



                <div className="row">
                    <div className="col form-floating  m-3">
                        <input type="text" className="form-control" id="newMovieGanere" value={formik.newMovieGanere} onChange={formik.handleChange} />
                        <label htmlFor="newMovieGanere">Add New Ganere</label> 
                    </div>
                    <div class="col">
                        <h3 className='text-warning m-4'> or </h3>
                    </div>
                    <div className="col form-floating m-3">
                        <select className="form-select form-control" id='MovieGanere' name='movieGanere' aria-label="Default select example" value={formik.movieGanere} onChange={formik.handleChange} >
                            <option defaultValue>---choose ganere---</option>
                            {a2.map(ganere=> <option key={ganere} value={ganere}>{ganere}</option>)}
                        </select>
                        <label htmlFor="MovieGanere">Ganere</label>
                    </div>
                </div>



                <div className="row">
                    <div className='col-5'>
                    </div>
                    <div className='col-2'>
                    <button className="btn btn-success"onClick={(event)=>addNewMovie(event,formik,nextId)}>Add Movie</button>
                    </div>
                    <div className='col-5'>
                    </div>
                </div>
            </form>

    </div>)
    
}
 
export default AddMovie ;
