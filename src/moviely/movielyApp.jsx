import React, {Component} from 'react'
import HomePage from './homePage';
import SortsSide from './sortsSide';
import NavBar from './navBar';
import AddMovie from './addMovie';
import { Route, Routes } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import { Link } from "react-router-dom";



class MovieApp  extends Component {
    state = { 
        movies:[
            {id:1,name: 'Bonkules 1',genre: 'Comedy',rating: '4',like:false},
            {id:2,name: 'Sharkanus 2',genre: 'Comedy',rating: '5',like:false},
            {id:3,name: 'The Bon Is Back 3',genre: 'Comedy',rating: '4',like:false},
            {id:4,name: 'The name is Bon , Shon Bon 4',genre: 'Comedy',rating: '5',like:false},
            {id:5,name: 'FizzBuzz 5',genre: 'Comedy',rating: '3',like:false},
            {id:6,name: 'Sharkanus 6',genre: 'Action',rating: '4',like:false},
            {id:7,name: 'The name is Bon , Shon Bon 7',genre: 'Action',rating: '5',like:false},
            {id:8,name: 'The Bon Is Back 8',genre: 'Action',rating: '5',like:false},
            {id:9,name: 'FizzBuzz 9',genre: 'Action',rating: '5',like:false},
            {id:10,name: 'Bonkules 10',genre: 'Action',rating: '5',like:false},
            {id:11,name: 'Sharkanus 11',genre: 'Love',rating: '2',like:false},
            {id:12,name: 'FizzBuzz 12',genre: 'Love',rating: '4',like:false},
            {id:13,name: 'The Bon Is Back 13',genre: 'Love',rating: '3',like:false},
            {id:14,name: 'The name is Bon , Shon Bon 14',genre: 'Love',rating: '2',like:false},
            {id:15,name: 'Bonkules 15',genre: 'Love',rating: '2',like:false},
            {id:16,name: 'Sharkanus 16',genre: 'Fantasy',rating: '5',like:false},
            {id:17,name: 'FizzBuzz 17',genre: 'Fantasy',rating: '2',like:false},
            {id:18,name: 'The Bon Is Back 18',genre: 'Fantasy',rating: '3',like:false},
            {id:19,name: 'The name is Bon , Shon Bon 19',genre: 'Fantasy',rating: '2',like:false},
            {id:20,name: 'Bonkules 20',genre: 'Fantasy',rating: '2',like:false},
            {id:21,name: 'Sharkanus21',genre: 'Horror',rating: '5',like:false},
            {id:22,name: 'The name is Bon , Shon Bon 22',genre: 'Horror',rating: '3',like:false},
            {id:23,name: 'The Bon Is Back 23',genre: 'Horror',rating: '4',like:false},
            {id:24,name: 'FizzBuzz 24',genre: 'Horror',rating: '4',like:false},
            {id:25,name: 'Bonkules 25',genre: 'Horror',rating: '2',like:false},
        ],
        originalMovies:[
            {id:1,name: 'Bonkules 1',genre: 'Comedy',rating: '4',like:false},
            {id:2,name: 'Sharkanus 2',genre: 'Comedy',rating: '5',like:false},
            {id:3,name: 'The Bon Is Back 3',genre: 'Comedy',rating: '4',like:false},
            {id:4,name: 'The name is Bon , Shon Bon 4',genre: 'Comedy',rating: '5',like:false},
            {id:5,name: 'FizzBuzz 5',genre: 'Comedy',rating: '3',like:false},
            {id:6,name: 'Sharkanus 6',genre: 'Action',rating: '4',like:false},
            {id:7,name: 'The name is Bon , Shon Bon 7',genre: 'Action',rating: '5',like:false},
            {id:8,name: 'The Bon Is Back 8',genre: 'Action',rating: '5',like:false},
            {id:9,name: 'FizzBuzz 9',genre: 'Action',rating: '5',like:false},
            {id:10,name: 'Bonkules 10',genre: 'Action',rating: '5',like:false},
            {id:11,name: 'Sharkanus 11',genre: 'Love',rating: '2',like:false},
            {id:12,name: 'FizzBuzz 12',genre: 'Love',rating: '4',like:false},
            {id:13,name: 'The Bon Is Back 13',genre: 'Love',rating: '3',like:false},
            {id:14,name: 'The name is Bon , Shon Bon 14',genre: 'Love',rating: '2',like:false},
            {id:15,name: 'Bonkules 15',genre: 'Love',rating: '2',like:false},
            {id:16,name: 'Sharkanus 16',genre: 'Fantasy',rating: '5',like:false},
            {id:17,name: 'FizzBuzz 17',genre: 'Fantasy',rating: '2',like:false},
            {id:18,name: 'The Bon Is Back 18',genre: 'Fantasy',rating: '3',like:false},
            {id:19,name: 'The name is Bon , Shon Bon 19',genre: 'Fantasy',rating: '2',like:false},
            {id:20,name: 'Bonkules 20',genre: 'Fantasy',rating: '2',like:false},
            {id:21,name: 'Sharkanus21',genre: 'Horror',rating: '5',like:false},
            {id:22,name: 'The name is Bon , Shon Bon 22',genre: 'Horror',rating: '3',like:false},
            {id:23,name: 'The Bon Is Back 23',genre: 'Horror',rating: '4',like:false},
            {id:24,name: 'FizzBuzz 24',genre: 'Horror',rating: '4',like:false},
            {id:25,name: 'Bonkules 25',genre: 'Horror',rating: '2',like:false},
        ],
        moviesFiltered:[
            {id:1,name: 'Bonkules 1',genre: 'Comedy',rating: '4',like:false},
            {id:2,name: 'Sharkanus 2',genre: 'Comedy',rating: '5',like:false},
            {id:3,name: 'The Bon Is Back 3',genre: 'Comedy',rating: '4',like:false},
            {id:4,name: 'The name is Bon , Shon Bon 4',genre: 'Comedy',rating: '5',like:false},
            {id:5,name: 'FizzBuzz 5',genre: 'Comedy',rating: '3',like:false},
            {id:6,name: 'Sharkanus 6',genre: 'Action',rating: '4',like:false},
            {id:7,name: 'The name is Bon , Shon Bon 7',genre: 'Action',rating: '5',like:false},
            {id:8,name: 'The Bon Is Back 8',genre: 'Action',rating: '5',like:false},
            {id:9,name: 'FizzBuzz 9',genre: 'Action',rating: '5',like:false},
            {id:10,name: 'Bonkules 10',genre: 'Action',rating: '5',like:false},
            {id:11,name: 'Sharkanus 11',genre: 'Love',rating: '2',like:false},
            {id:12,name: 'FizzBuzz 12',genre: 'Love',rating: '4',like:false},
            {id:13,name: 'The Bon Is Back 13',genre: 'Love',rating: '3',like:false},
            {id:14,name: 'The name is Bon , Shon Bon 14',genre: 'Love',rating: '2',like:false},
            {id:15,name: 'Bonkules 15',genre: 'Love',rating: '2',like:false},
            {id:16,name: 'Sharkanus 16',genre: 'Fantasy',rating: '5',like:false},
            {id:17,name: 'FizzBuzz 17',genre: 'Fantasy',rating: '2',like:false},
            {id:18,name: 'The Bon Is Back 18',genre: 'Fantasy',rating: '3',like:false},
            {id:19,name: 'The name is Bon , Shon Bon 19',genre: 'Fantasy',rating: '2',like:false},
            {id:20,name: 'Bonkules 20',genre: 'Fantasy',rating: '2',like:false},
            {id:21,name: 'Sharkanus21',genre: 'Horror',rating: '5',like:false},
            {id:22,name: 'The name is Bon , Shon Bon 22',genre: 'Horror',rating: '3',like:false},
            {id:23,name: 'The Bon Is Back 23',genre: 'Horror',rating: '4',like:false},
            {id:24,name: 'FizzBuzz 24',genre: 'Horror',rating: '4',like:false},
            {id:25,name: 'Bonkules 25',genre: 'Horror',rating: '2',like:false},
    ],

        genreWeAre:'All Movies',

        numMovieToShow:5,
        pageButton:[],

        notifications:[],
        notificationCounter:0,

        
     }
     styleSort ={
        marginTop:'61px',
     }
     styleIntro ={
        marginTop:'100px',
     }


    render() { 

        return (<div style={this.styleAll}>
            <div style={this.styleAll}> 
                <div className='row r1'>
                    <div className='col'>
                        <NavBar notifications={this.state.notifications} notificationCounter={this.state.notificationCounter} restNotifications={()=>this.restNotifications()} kamaStarim={()=>this.kamaStarim()} allMovies={()=>this.allMovies()} numMovieToShow={this.state.numMovieToShow} moviesToShow={(e)=>this.moviesToShow(e)}/>
                    </div>
                </div>


                <div className='row r2'>


                        <div className='col-2 text-center' style={this.styleSort}>
                            <Sticky>
                                <SortsSide originalMovies={this.state.originalMovies} sortMovies={(genre)=>this.sortMovies(genre)}/>
                            </Sticky>
                        </div>


                        <div className='col-10'>  
                            <Routes>
                                <Route path="/AddMovie" element ={ <AddMovie originalMovies={this.state.originalMovies} addNewMovie={(event,formik,newId)=>this.addNewMovie(event,formik,newId)}/> } />
                                <Route path="/HomePage" element ={ <HomePage genreWeAre={this.state.genreWeAre}movies={this.state.movies}originalMovies={this.state.originalMovies}pageButton={this.state.pageButton} deletMovie={(id,name)=>this.deletMovie(id,name)} isLike={(id,name)=>this.isLike(id,name)} moveToPage={(num)=>this.moveToPage(num)}/> }/>
                                <Route path="/" element ={<div style={this.styleIntro}><h1 className='text-warning text-center'>Wellcom to Moviely</h1><h1 className='text-warning text-center'> To start press on <span className='text-primary'><Link to="/HomePage" onClick={()=>this.allMovies()}>Home Page</Link></span></h1></div>}/>
                            </Routes>  
                        </div>


                </div>
            </div>

        </div>);




    }
    deletMovie =(id,name)=>{
        this.newNotification(name,'deleted')
    
        this.state.originalMovies=this.state.originalMovies.filter(movie=> movie.id!==id)
        this.setState({originalMovies:this.state.originalMovies})
        this.state.movies=this.state.movies.filter(movie=> movie.id!==id)
        this.setState({movies:this.state.movies})
        this.state.moviesFiltered=this.state.moviesFiltered.filter(movie=> movie.id!==id)
        this.setState({moviesFiltered:this.state.moviesFiltered})
        this.doPage(this.state.numMovieToShow)




    }




    isLike(id,name){
        let likeOrNo=null
        this.state.movies.map(movie=>{
             if(movie.id===id){
                movie.like= !movie.like
                movie.like==true ? likeOrNo=true:likeOrNo=false
             }else{
                movie.like=movie.like
             }
            })
        this.setState({movies:this.state.movies})
        this.state.originalMovies.map(movie=> movie.id===id? movie.like= !movie.like : movie.like=movie.like)
        this.setState({originalMovies:this.state.originalMovies})
        this.state.moviesFiltered.map(movie=> movie.id===id? movie.like= !movie.like : movie.like=movie.like)
        this.setState({moviesFiltered:this.state.moviesFiltered})

        let whatHeppened=null
        if (likeOrNo){
            whatHeppened='liked'
        }else{
            whatHeppened='unliked'

        }
        console.log(name);
        this.newNotification(name,whatHeppened)

    }



    countNotifications(){
        this.state.notificationCounter++;
        this.setState({notificationCounter:this.state.notificationCounter})
    }

    restNotifications(){
        this.state.notificationCounter=0;
        this.setState({notificationCounter:this.state.notificationCounter})
    }
    
    newNotification(name,whatHeppened){
    let note=null
    let date= new Date();
    let time = date.getHours() + ':' +  (date.getMinutes()>10? date.getMinutes(): '0'+date.getMinutes());

        note={name:name, whatHeppened:whatHeppened, when:time}
        this.state.notifications.unshift(note)
        this.setState({notifications:this.state.notifications})
        this.countNotifications();


    }




    sortMovies =(genre)=>{
        this.state.genreWeAre=genre
        this.setState({genreWeAre:this.state.genreWeAre});
        
        this.state.movies=this.state.originalMovies.filter(movie => movie.genre===genre );
        this.setState({movies:this.state.movies});

        this.state.moviesFiltered=this.state.movies;
        this.setState({moviesFiltered:this.state.moviesFiltered});

        this.doPage(this.state.numMovieToShow);
        
    }

    kamaGanere(){
        const a=this.state.originalMovies();
        a=a.map(movie=>movie.genre) ;
        a=a.sort();

    }




    allMovies =()=>{
        this.state.genreWeAre='All Movies';
        this.setState({genreWeAre:this.state.genreWeAre});
        
        this.state.movies=this.state.originalMovies;
        this.setState({movies:this.state.movies});

        this.state.moviesFiltered=this.state.movies;
        this.setState({moviesFiltered:this.state.moviesFiltered});


        this.doPage(this.state.numMovieToShow);

    }




    moviesToShow=(e)=>{
        if(e.key=='Enter'){
            if(e.target.value<=this.state.moviesFiltered.length){
                this.state.numMovieToShow=e.target.value;
                this.setState({numMovieToShow:this.state.numMovieToShow});
                this.doPage(this.state.numMovieToShow)
                
            }else{
                alert('what are doing???????? you dont have enough movies')
            }
        }
    }

    doPage(num){
        const a=[];
                for (let i=0; i<num;i++){
                    if(i<this.state.moviesFiltered.length)
                    a[i]=this.state.moviesFiltered[i];
                }
                this.state.movies=a;
                this.setState({movies:this.state.movies})
                this.pageForMovies(this.state.numMovieToShow);

    }

    pageForMovies=(num)=>{
        this.state.pageButton=[];
        for(let i=0;i<(this.state.moviesFiltered.length/num);i++){
            this.state.pageButton[i]=i+1;
        }
        this.setState({pageButton:this.state.pageButton})
    }
    
    moveToPage=(num)=>{
        const a=[];
        
        let i=0;
        if (num===1){
             i= 0;
        }else{
            i= this.state.numMovieToShow*(num-1);
        }
            for (i; i<(this.state.numMovieToShow*num);i++){
                if(i<this.state.moviesFiltered.length)
                a[i]=this.state.moviesFiltered[i];
            }
            this.state.movies=a;
            this.setState({movies:this.state.movies})
    }




    addNewMovie(event,formik,newId){

        event.preventDefault();
        
        const movieName=formik.values.movieName;
        const newMovieGanere=formik.values.newMovieGanere;
        const movieGanere=formik.values.movieGanere;
        const movieRating=formik.values.movieRating;
        let ganerToAdd=null
        if(newMovieGanere==''){
            ganerToAdd=movieGanere;
        }else{
            ganerToAdd=newMovieGanere;

        }


        const movieToAdd={id:newId ,name:movieName,genre: ganerToAdd ,rating:movieRating,like:false}
    

        this.state.originalMovies.push(movieToAdd)
        this.setState({originalMovies:this.state.originalMovies})

        // this.state.movies.push(movieToAdd)
        // this.setState({movies:this.state.movies})
        // this.state.moviesFiltered.push(movieToAdd)
        // this.setState({moviesFiltered:this.state.moviesFiltered})



        this.newNotification(movieName,'added');
        


    }
}
 
export default MovieApp ;
