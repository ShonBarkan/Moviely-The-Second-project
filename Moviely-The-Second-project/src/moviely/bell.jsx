import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = (props) => {
    const {notifications, notificationCounter , restNotifications}=props
    
    const styleTime={
        fontSize:'10px'
    }

    return (<div>

        <Dropdown className='top-0 start-50' onClick={()=>restNotifications()}>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                <i className="fa-regular fa-bell " ></i>
                
            </Dropdown.Toggle>

            { notificationCounter>0 ? 
                  <span className="position-absolute top-20 start-55 translate-middle badge rounded-pill bg-danger">
                  {notificationCounter}
                  </span>
                  :
                  null
            }
            
            <Dropdown.Menu>

                {notifications.map(not => <Dropdown.Item  >{<div> <b>{not.name}</b> was <b>{not.whatHeppened}</b> <span style={styleTime}>  {not.when} </span> </div>}</Dropdown.Item>) }

            </Dropdown.Menu>
        </Dropdown>

    </div>);
}

export default NavBar;