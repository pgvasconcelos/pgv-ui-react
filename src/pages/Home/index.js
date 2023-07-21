import { useTranslation } from 'react-i18next';
import { useEffect} from 'react';
import ReactMarkdown from "react-markdown";

import { motion } from "framer-motion"
import Reveal  from "./reveal"
import { Link } from 'react-router-dom';



export default function Home() {

  const {t,  i18n } = useTranslation() 
  
  


  useEffect(() =>{
    let lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n])

  let lng = navigator.language;
   
  
  let Linkedinlang = lng

  if(Linkedinlang === "pt-BR" || Linkedinlang === "pt" || Linkedinlang === "pt-pt" ){
    Linkedinlang = "pt"
    }
    else{
      Linkedinlang = "en_US"
    }
  const linkedinUrl = `https://www.linkedin.com/in/pedro-gouveia-4843a628/?locale=${Linkedinlang}`
  return (
    <div>
      <main className="min-h-screen w-screen"
      >

  {/* header   */}
    <section className=' flex  flex-col items-center justify-between'> 

        <div className='max-h-fit text-center max-w-lg  pt-24 '>
  
      
              <h1 className='text-6xl p-4 lg:p-0 lg:text-6xl text-bold h-auto'>  <Reveal>{t('HomeH1')}</Reveal></h1>
      
      
              <h4 className='text-lg mt-24 mb-24 font-semibold pr-8 pl-8'>
              <Reveal>{t('HomeSubtitle')} </Reveal>
              </h4>   
        
                
          <Reveal>
           <img className='m:auto mt-24 -mb-1'
              src="https://res.cloudinary.com/dxbzhze4p/image/upload/v1688987610/profile2_5eca5a98b5.png"
              width={500}
              height={500}
              alt="Pedro Gouveia"
            />
          </Reveal>

        </div> 
    </section>
    
      {/* About me */}

        <section className='bg-light-green h-fit text-darkgray 	w-full'>
          
          <div className='flex w-full flex-col text-black  text-center'>
              <div className='font-bold flex m-auto mt-14'>
              
              <Reveal> {t('HomePedroName')}</Reveal> 
              <Reveal>
                <a target='_blank' href={linkedinUrl} rel="noreferrer">
                      <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="22"
              viewBox="0 0 32 32"
            >
              <path
                fill="#0177b5"
                d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z"
              ></path>
              <path
                fill="#fff"
                d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6A2.752 2.752 0 017.12 9.9a2.76 2.76 0 01-2.754-2.753 2.75 2.75 0 012.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z"
              ></path>
            </svg>
                </a>
              </Reveal>
              </div>
            
              <div className='text-sm '>
              <Reveal> {t('HomePedroDescription')} </Reveal>
              </div>
          </div>
          <div className='flex flex-col max-w-5xl justify-between  m-auto'>
              <div className='text-8xl font-serif -mb-10 xl:-ml-20 text-left hidden xl:block'>
                &quot;
              </div>
              <Reveal> 
              <p className='items-center text-center align-middle text-lg font-serif font-medium  leading-9		p-10'>
            {t('HomeAboutMe')} 
              </p></Reveal>

            
            <Reveal><p className='items-center text-center align-middle text-lg font-serif font-medium  leading-9		p-10 pt-0'>
          {t('HomeAboutMeSecondParagraph')} 
           
            </p> </Reveal>
              <div className='text-8xl items-end text-right font-serif xl:-mr-20 hidden xl:block'>
                &quot;
              </div>
          </div>
          
        </section>
 
        {/* services section  */}
      

        <section id='services' className=' flex w-full flex-col text-center'>
          <h1 className='text-5xl mt-16 mb-4 text-semibold'>
          <Reveal> {t('HomeTitleServices')}       </Reveal>

          </h1>
            <h2 className='text-lg mb-8  '> 
            <Reveal>{t('HomeSubtitleTitleServices')}   </Reveal>
            </h2>
          
          <Reveal>
          <div className='flex text-left max-w-5xl m-auto flex-col'>
              <h2 className='text-2xl font-semibold pl-8 mt-8 flex items-center '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                  <span className='pl-4'>
                        {t('HomeServiceOneDesign')} 
                  </span>
              </h2>
            <div className='flex flex-col md:flex-row max-w-5xl m-auto'> 
                  <div className=''>
                        <img className='mt-8 -mb-1 m-auto max-w-lg w-96 md:w-72 lg:w-fit'
                          src="https://res.cloudinary.com/dxbzhze4p/image/upload/v1688987610/dt_process_05b5256cc2.jpg"
                          width={400}
                          height={400}
                          alt="Design thinking process"
                        /> 
                  </div>
                  <ReactMarkdown className='text-left lg:pr-22 pr-8 pl-8 md:p-8 mt-2 text-sm lg:text-base '> 
                      {t('HomeServiceOneDesignDescription')} 
                </ReactMarkdown> 
            </div>
        </div>
        </Reveal>
        
        {/* ONLINE */}
        <Reveal>
        <div className='flex max-w-5xl m-auto flex-col pt-20 '>
            <h2 className='text-2xl font-semibold pl-8 text-left flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg> 
              <span className='pl-4'> 
              {t('HomeServiceOneBusiness')} 
              <span className="hidden md:inline-block "> - {t('HomeServiceBusinessZeroToSucess')} </span></span>
          </h2>
          <div className='flex flex-col md:flex-row	 max-w-5xl m-auto	'> 
              <div className='md:hidden  '>
                      <img className='mt-8 -mb-1 m-auto max-w-lg w-96 md:hidden  '
                        src="https://res.cloudinary.com/dxbzhze4p/image/upload/v1688987610/small_business_process_97b5352a39.jpg"
                        width={400}
                        height={400}
                        alt="Sales process"
                      />
              </div>
              <ReactMarkdown className='text-left pr-8 pt-4 pl-8 md:p-8 text-sm lg:text-base w-fit '> 
                    {t('HomeServiceOneBusinessDescription')} 
              </ReactMarkdown>  
              <div className='hidden md:block  '>
                  <img className='mt-8 -mb-1 max-w-lg w-full md:w-80 lg:w-fit md:mr-8 '
                    src="https://res.cloudinary.com/dxbzhze4p/image/upload/v1688987610/small_business_process_97b5352a39.jpg"
                    width={400}
                    height={400}
                    alt="Sales process"
                  />
              </div>
          </div>
        </div>
        </Reveal>

        {/* DEV */}
        <Reveal>
      <div className='flex max-w-5xl m-auto flex-col pt-20'>
          <h2 className='text-2xl font-semibold flex pl-8 text-left items-center'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
              <span className='pl-4'>
                {t('HomeServiceDevelopment')} 
              </span>
          </h2>
          <div className='flex flex-col md:flex-row	 max-w-5xl m-auto'> 
                  <div className='pt-8 pb-4 md:p-8 -mt-8  '>
                          <img className='mt-8 -mb-1 m-auto max-w-lg w-96 md:w-72 lg:w-fit'
                              src="https://res.cloudinary.com/dxbzhze4p/image/upload/v1688987610/dev_tech_1598f5b655.jpg"
                              width={400}
                              height={400}
                              alt="Dev"
                            />
                  </div>
                  <ReactMarkdown className='text-left pr-8 pl-8 md:p-8 text-sm lg:text-base '> 
                      {t('HomeServiceDevelopmentDescription')} 
                  </ReactMarkdown> 
          </div>
      </div>
      </Reveal>

  {/* 
            <div className='flex max-w-5xl m-auto flex-col pt-20 '>
            <h2 className='text-2xl font-semibold pl-8 text-left flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg> 
  <span className='pl-4'>
  Workshops and training </span></h2>
            <div className='flex max-w-5xl m-auto'> 
            <div className='p-8 -m-8 lg:ml-8'>
                      <img className='mt-8 -mb-1 max-w-lg hidden lg:block'
                        src="https://res.cloudinary.com/dxbzhze4p/image/upload/v1688987610/dt_sprint_096f45a6a7.jpg"
                        width={400}
                        height={400}
                        alt="Design sprint e Design thinking process"
                      />
                  </div>
                <p className='text-left lg:pl-52 p-8 text-sm lg:text-base '> 
                <span className="font-bold"> 1.Facilitation of a Design Sprint:</span>
                &quot;The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers.&quot; Created by Google Ventures and used in many companies and startups around the world.
    <br></br> <br></br><br></br>
      <span className="font-bold">2.Facilitation of Workshops</span> for the application of Design Thinking to encourage co-creation. Workshops aimed at exercising creativity and co-creation are important tools for design.
                  </p> 
                
                </div>
            </div> */}

        </section>

        {/* cta */}
      <Reveal>
          <section className='flex flex-col max-w-5xl justify-between  m-auto mb-16'>
          <h1 className='lg:text-xl text-lg mb-8 text-center mt-24 pr-12 pl-12'>
            {t('CtaWorksTitle')}
          </h1>
        
           <a  href='/works'>
              <motion.button 
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              className='bg-black border-r-2 border-none rounded text-white hover:text-gray w-62 font-semibold m-auto p-4'
              > 
              {t('CtaWorksTitleButton')}
              </motion.button >
           </a>
             
        
          </section>
      </Reveal>

      </main>
   
    </div>
  )
}
