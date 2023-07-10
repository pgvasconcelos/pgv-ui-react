import { HashLink as Link } from 'react-router-hash-link';

function Header(){
return(
    <header>
        <nav className='m-5' >
            <ul className='container mx-auto px-4 flex items-center justify-center w-screen text-dark-gray flex-wrap '>
                <li 
                className="px-4 hover:text-green italic">
                <Link 
                to='/'
                >
                    pgv
                </Link>
                </li> 
                <li 
                className="px-4 hover:text-green">
                    <Link to='/#services' >
                    Services
                    </Link>
                </li>
                <li 
                className="px-4 hover:text-green">
                    <Link to='/works?selected=all' >
                    Works
                    </Link>
                </li>
                <li className="px-4">
                <Link target='_blank' to='https://www.linkedin.com/in/pedro-gouveia-4843a628/' >LinkedIn</Link>
                </li>
                <li 
                className="px-4 bg-gray border-r-2 border-none rounded hover:text-green hover:bg-trasparentgray hidden lg:block">
                <Link to="mailto:hi@pgv.service">
                hi@pgv.service
                </Link>
                </li>
            </ul>   
        </nav>

    </header>
)

}
export default Header