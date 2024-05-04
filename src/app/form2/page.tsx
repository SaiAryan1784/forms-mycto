import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./Steppercontrol";
import Account from "./steps/Account";
import Details from "./steps/Details";
import Final from "./steps/Final";
import Payment from "./steps/Payment";



function page(){
    const [currentStep, setcurrentstep] = useState(1);
    const steps=["Account information","Personal Details","Complete"];

    const displayStep=(step) =>{
        switch(step){
            case 1:
                return <Account/>
            case 2:
                return <Details/>
            case 3:
                return <Final/>
            default:
        }
    }
    return(
        <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white mt-20'>
            <div className="container horizontal mt-5">
                <Stepper
                steps={steps}
                currentStep={currentStep}/>
            </div>
            <StepperControl/>
        </div>
    )
}
