import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';


function Header(){

    const {t, i18n } = useTranslation() 
  
  
    useEffect(() =>{
      let lng = navigator.language;
      i18n.changeLanguage(lng);
    }, [i18n])
  
    let lng = navigator.language;
return(
    <header>
        <nav className='mt-5' >
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
                    {t('MenuServices')}
                    </Link>
                </li>
                <li 
                className="px-4 hover:text-green">
                    <Link to='/works?selected=all' >
                      {t('MenuWorks')}
                    </Link>
                </li>
                <li className="px-4">
                <Link target='_blank' rel='noreferrer' to='https://www.linkedin.com/in/pedro-gouveia-4843a628/' >LinkedIn</Link>
                </li>
                {/* <li 
                className="px-4 bg-gray border-r-2 border-none rounded hover:text-green hover:bg-trasparentgray hidden lg:block">
                <Link to="mailto:hi@pgv.service">
                hi@pgv.service
                </Link>
                </li> */}
            </ul>   
        </nav>

    </header>
)

}
export default Header