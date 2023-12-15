import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
    <div className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}>
      <div className={`bg-primary w-[100%] h-[100%] rounded-full flex-col ${styles.flexCenter}`}>
        <div className={`flex-row ${styles.flexStart}`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get </span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrowUp" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started </span>
          </p>
      </div>
    </div>
  )


export default GetStarted