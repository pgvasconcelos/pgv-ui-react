 import { useState, useEffect } from 'react'
 import api from '../../services/api'
 import { useSearchParams } from "react-router-dom";

function WorkList(){
    
    //get the query from url
    let [searchParams] = useSearchParams();
    
    
    const [works, setWorks] = useState([ ])
    const [loading, setLoading] = useState(true)


    useEffect(()=> {
        const query = searchParams.get('selected')

        async function getWorks(type){
            if( type == null || type === "all" ){
                const res = await api.get(`/works?populate=*`) 
    
                setWorks(res.data.data)
            } else{            
            const res = await api.get(`/works?filters[type][$eq]=${type}&populate=*`) 
    
            setWorks(res.data.data)

        }

         setLoading(false)


        }

         getWorks(query);
    }, [searchParams])

    if(loading){
        return(
            <div className='flex h-screen m-auto w-auto'>
                <h2 className='text-2xl m-auto mt-72'>Loading...</h2>
            </div>
        )
        
    }
    return(       
   <div className='grid lg:grid-cols-2 mt-10 gap-4'>              {
                works.map((work) => { 
                    return(
                    <a className=" p-8 border-spacing-3  border border-light-gray rounded-lg block max-w-lg  " href={`works/${work.id}`} id={work.id} key={work.id}>

                
                    { work.attributes.password_requeried ?  
                        <div className='pointer-events-none relative lg:-right-96 lg:-top- z-10 flex items-center justify-center rounded-full bg-darkgray bg-opacity-30 p-1 text-black w-8 '>
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6"><path d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> 

                        </div> : ''
                        }  
                        
                            <img className=''
                                src={work.attributes.image.data.attributes.url}
                                width={500}
                                height={500}
                                alt=""
                            />
                        
                        <h1 className="text-xl pt-8 font-bold pb-4">{work.attributes.title}</h1>
                        
                        <p className='pt-4 pb-4 text-darkgray'>{work.attributes.description}</p>

                        <div className='flex justify-between pt-8'>
                            
                            <h3 className=" text-sm  font-bold ">Ano: {new Date(work.attributes.createdAt).getFullYear()}</h3>
                            
                            <div className=' order-last whitespace-nowrap rounded-lg text-darkgray px-2 py-0.5 text-xs font-semibold leading-6 bg-light-gray block w-fit align-end'>
                            {work.attributes.type}
                            </div>
                            
                        </div>
                        

                    </a>
                
                )})
            } 
         </div>
    )
}


export default WorkList;