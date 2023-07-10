import WorkList from './worklist';
import DropDown from './dropdown';

function Works(){

return(
    <main className="flex container items-center flex-col m-auto">
        <h1 className='text-4xl text-center pb-4 pt-12 font-light'>
            Works
        </h1>

        <section className="p-12 flex justify-between flex-col text-center">
            <div className="text-xl font-semibold ">
                Would you like to know more about the work I have done?
            </div>
            <div className="text-sm flex mt-4 align-middle  text-center m-auto">
                <div className='pt-2.5 mr-1' > 
                Filter by type:
                </div>
                <DropDown></DropDown>

            </div> 
         
            <WorkList></WorkList>
         
        </section>
    </main>
)

}
export default Works