import Bell from './bell'
import { Link } from "react-router-dom";

const NavBar = (props) => {
    const {allMovies,moviesToShow,notifications, notificationCounter,restNotifications}=props
    const styleInput={
        width: '15%',
        marginLeft: '10px',
        background: 'transparent',
        fontSize:'20px',
        border:'none'
    }
    const styleInputLabel={
        fontSize:'20px',
    }
    const styleNav={
        border:'none'
    }
 
    return (<div>

    <nav className=" m-3" style={styleNav}>
            <div className="container">
                <div className="row">
                    <div className="col-4 text-left" >
                        <button className="btn btn-primary position-relative m-1" onClick={()=>allMovies()}><Link className='navbar-brand' to="/HomePage">Home Page</Link></button>
                    </div>
                    <div className="col-3" >
                        <button className="btn btn-warning position-relative m-1"><Link className='navbar-brand' to="AddMovie">Add Movie</Link></button>                        

                    </div>
                    <div className="col-4 " >
                        <label className='text-warning' htmlFor="moviesToShow" style={styleInputLabel} ><b>movies you want to present:</b></label>
                        <input className='text-warning' style={styleInput} id="moviesToShow" type="number" onKeyUp={(e)=>moviesToShow(e)} placeholder='5'/>
                    </div>
                    <div className="col text-center ">
                        <Bell notifications={notifications} notificationCounter={notificationCounter} restNotifications={()=>restNotifications()}/>
                    </div>
                </div>
            </div>
    </nav>

    </div>);
}

export default NavBar;