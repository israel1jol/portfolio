import { FaPhoenixSquadron, FaTwitter, FaGithubAlt, FaLinkedinIn, FaHome, FaFolderOpen, FaPagelines } from 'react-icons/fa';
import {Link} from "react-router-dom";


const Navbar = () => {
    return(
        <div>
            <div className="navbar mx-2 p-2">
                <div className="navbar-brand width-small d-flex align-items-center justify-content-between"><div className="navbar-brand">DotHatake</div></div>
                <nav className="side-nav">
                    <ul className='navbar-nav vh-100 ln'>
                        <li><Link to='/' className="nav-link"><FaHome color="lightblue" size="50" className='btn btn-outline-primary'/></Link></li>
                        <li><Link to='/projects' className="nav-link"><FaFolderOpen color="yellow" size="50"  className='btn btn-outline-warning'/></Link></li>
                        <li><Link to='/articles' className="nav-link"><FaPagelines color="chartreuse" size="50"  className='btn btn-outline-success' /></Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='nav w-max'>
                        <li><a href='https://www.twitter.com/AdigunJolly/' target="_blank" className="nav-link"><FaTwitter  color="black" size="26"/></a></li>
                        <li><a href='https://www.linkedin.com/in/israel-adigun-3b2876210/' target="_blank" className="nav-link"><FaLinkedinIn color="black" size="26"/></a></li>
                        <li><a href='https://github.com/israel1jol/' target="_blank" className="nav-link"><FaGithubAlt color="black" size="26"/></a></li>
                    </ul>
                </nav>
                
            </div>
        </div>
    )
}

export default Navbar;