import { useState, useEffect } from 'react'
import api from './../../services/api'
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function WorkPage () {
    const [work, setWork] = useState([])
    const {id} = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(()=> {
        async function getWork(id){

        await api.get(`/works/${id}?populate=*`)
        .then((response) =>{
            setWork(response.data.data)
            setLoading(false)
            // console.log(work)
            // console.log(response.data.data)
    
       })
       .catch(()=>{
            console.log('Error getting data from works')
       })

  
        }

         getWork(id);

        //  return() =>{
        //     console.log("desmontado")
        //  }
    }, [id]) 

    if(loading){
        return(
            <div className=' h-screen'>
                <h2 className='text-2xl m-auto pt-72'>Loading...</h2>
            </div>
        )
        
    }
    return(
       
        <main className="flex  flex-col items-center justify-between ">

            <article className="prose lg lg:prose-xl p-4 pt-12">
            <a href="/works?selected=all" className="flex w-full no-underline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mt-1.5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        <div>Back</div>
                        
                    </a>
                <div className="flex flex-col items-center justify-between">
             
                  
               <img className='p-2'
                        src={work.attributes.image.data.attributes.url}
                        width={500}
                        height={500}
                        alt=""
                    /> 
                    </div>
            <h1 className="text-left">{work.attributes.title}</h1>
            <p className="italic text-gray text-left">{work.attributes.description}</p>
            

            <ReactMarkdown linkTarget="_blank" className="pt-8 text-left">{work.attributes.content}</ReactMarkdown>
        
            </article>
        </main>
    )
}
export default WorkPage;