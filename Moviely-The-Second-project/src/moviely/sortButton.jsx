
const SortButton = (props) => {
    const {theGanere,sortMovies,allMoviesGanere}=props

    const len=(allMoviesGanere.filter(genre=> genre===theGanere)).length

    const style={
        width: '80%',
    }
    return (<div>
        <button type="button" style={style} className="btn btn-warning position-relative m-1" onClick={()=>sortMovies(theGanere)}>
            {theGanere}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {len}
            </span>
            </button>
    </div>);
}

export default SortButton;