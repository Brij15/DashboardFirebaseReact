import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(props) {
    //Get route location details for setting up active tab css
    const location = useLocation();
    const {pathname} = location;

    const splitlocation = pathname.split("/");
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <li className={splitlocation[1] === "dashboard" ? "sidebarListItem active" : "sidebarListItem"}>
                            <Link to='/dashboard'>Home</Link>
                        </li>
                        <li className={splitlocation[1] === "stock" ? "sidebarListItem active" : "sidebarListItem"}>
                            <Link to='/stock'>Stock</Link>
                        </li>
                        <li className={splitlocation[1] === "searchweather" ? "sidebarListItem active" : "sidebarListItem"}>
                            <Link to='/searchweather'>Weather</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;