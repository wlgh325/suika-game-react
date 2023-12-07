import {keyframes} from "@mui/system";

const floatingEffect = keyframes`
    0% {
      transform: translate(0px, 4px);
    } 
    50% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(0px, 4px);
    }
`;

const transitions = {
   floatingAni: {
       animation: `${floatingEffect} 3000ms infinite`
   }
}

export default transitions;