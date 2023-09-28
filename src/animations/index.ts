import { keyframes } from "styled-components";

const animationForm = keyframes`
	from {
		opacity: 0;
		transform: translatey(-50px);
	}

	to {
		opacity: 1;
		transform: translateX(0px);
	}
`;

const animateLoading = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const ldsRingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export { animationForm, animateLoading, ldsRingAnimation };
