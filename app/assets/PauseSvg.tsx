import React, {SVGProps} from "react";

const PauseSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 14.9418H1.86912V0H0V14.9418ZM5.60735 0V14.9418H7.47647V0H5.60735Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default PauseSvg;
