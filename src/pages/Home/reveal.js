import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect , useRef} from 'react';

const variants = {
    hidden: { opacity: 0 , y:72 },
    visible: { opacity: 1, y:0 }
  }

function Reveal(props) {
const ref = useRef(null)
const isInView = useInView(ref , {once:true} )

const mainControls = useAnimation();
// const slideControls = useAnimation();

useEffect(() =>{
    console.log(isInView)
    if(isInView){
        mainControls.start("visible")
        // slideControls.start("visible")
    }
  
    }, [isInView, mainControls])

return(
    <div ref={ref} style={{position: "relative, over"}}>
        <motion.div
            variants={variants}
            initial="hidden"
            animate={mainControls}
            transition = {{duration:1, type: "spring", damping: 30, stiffness: 200}}  
        >
               {props.children}
                {/* <motion.div
                variants={{
                    hidden: { left:0 },
                    visible: { left: "100%" }
                }}
                initial="hidden"
                animate={slideControls}
                transition = {{duration:0.5, ease:"easeIn"}}
                style={{
                    position:"absolute",
                    top:4,
                    bottom:4,
                    left:0,
                    right:0,
                    background: "#ccc",
                    zIndex: 200,
                }}  
            >
            </motion.div> */}
        </motion.div>
      

    </div>
)

}

export default Reveal