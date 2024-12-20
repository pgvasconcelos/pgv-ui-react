import WorkList from './worklist';

// import DropDown from './dropdown';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function Works(){

    const {t, i18n } = useTranslation() 
  
    useEffect(() =>{
      let lng = navigator.language;
      i18n.changeLanguage(lng);
    }, [i18n])
  
    let lng = navigator.language;


return(
    <main className="flex container items-center flex-col m-auto min-h-screen">
        {/* <h1 className='text-4xl font-bold text-center pb-4 pt-12 '>
                     {t('WorksPageTitle')}:
                 

        </h1> */}

        <section className="p-4 lg:p-12 flex justify-between flex-col text-center ">
            {/* <div className="text-xl font-semibold ">
                     {t('WorksTitle')}
            </div> */}
            {/* <div className="text-sm flex mt-4 align-middle  text-center m-auto">
                <div className='pt-2.5 mr-1' > 
                     {t('WorksFilterBy')}
                </div>
                <DropDown></DropDown>
            </div>  */}
        
            <div className='font-bold flex text-lg  m-auto mt-14'>
            {t('PublicPortfolio')}
            </div>

            <WorkList lng={lng}></WorkList>

            
         
        </section>
    </main>
)

}
export default Works