import styled from "styled-components";

const StepCircle = styled.div`
 &:first-child{
    background-color: "#66C0F4";
    }
    border-radius: 100px;
    background-color: ${props => props.accomplished ? "#66C0F4" : "#C7D5E0"};
    width: 15px;
    height: 15px;
`

export {
    StepCircle
}