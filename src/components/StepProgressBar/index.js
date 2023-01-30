import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { StepCircle } from "./style";

const StepBar = ({percentage}) => {
    return (
        <ProgressBar
            margin="200px 0 0 0"
            percent={percentage}
            width="300px"
            height="5px"
            unfilledBackground="#C7D5E0"
            filledBackground="#66C0F4"
        >
            <Step>
                {({ accomplished, index }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
                        <StepCircle accomplished={accomplished}/>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
                        <StepCircle accomplished={accomplished}/>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
                        <StepCircle accomplished={accomplished}/>
                    </div>
                )}
            </Step>
        </ProgressBar>
    )
}

export default StepBar;
