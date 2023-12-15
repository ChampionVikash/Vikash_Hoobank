import { feedback } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";


const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
       <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"/>
           <div className="flex w-full justify-between items-center md:flex-row flex-col ">
              <h2 className={styles.heading2}>What People are saying about us </h2>
              <div className="w-full md:mt-0 mt-6 ">
                <p className={`${styles.paragraph} text-left max-w-[450px] `} >
                  Everything you need to accept card payments and grow your business
                  anywhere on the planet.
                </p>
              </div>
            </div>

           <div className="flex flex-wrap justify-between w-full feedback-container relative z-[1]">
             {feedback.map((card) => 
             <Feedback key={card} {...card}/>
             )}
           </div> 
 
    </section>
  )


export default Testimonials