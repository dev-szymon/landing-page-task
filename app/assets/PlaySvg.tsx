import React, {SVGProps} from "react";

const PlaySvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M2.70017 15.2961H0.831055V0.35437H2.70017V2.22209H4.56929V5.02367H6.43841V6.89139H8.30752V8.75911H6.43841V10.6268H4.56929V13.4284H2.70017V15.2961Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default PlaySvg;
