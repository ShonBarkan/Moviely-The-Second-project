import SortButton from "./sortButton";

const SortsSide = (props) => {
    const { originalMovies, sortMovies}=props
 
    const a=originalMovies.map(movie=> movie=movie.genre)
    let a2=[]
    for(let i=0;i<a.length;i++){
        if(!a2.includes(a[i])){
            a2.push(a[i])
        }
    }

    return (<div className=" bg-dark">
        {a2.map((genre,index)=> <SortButton key={index} theGanere={genre} sortMovies={(genre)=>sortMovies(genre)} allMoviesGanere={a}/>)}

        {a2.length===0? <p className="text-warning text-center">no movie no genre you genius</p>:null}

    </div>);
}

export default SortsSide;