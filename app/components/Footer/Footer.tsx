import clsx from "clsx";
import LogoSvg from "~/assets/LogoSvg";

type FooterProps = {
    className?: string;
};
const Footer: React.FC<FooterProps> = ({className}) => {
    return (
        <footer className={clsx("flex w-full flex-col items-center", className)}>
            <div className="h-2 w-full bg-gradient-primary" />
            <div className="flex w-full max-w-leet gap-16 px-4 py-6">
                <div className="flex shrink-0 items-center gap-6 text-brown">
                    <LogoSvg className="w-12 " />
                    <span className="font-secondary text-2xl font-semibold">Brand Name</span>
                </div>
                <p className="font-primary text-[11px] text-brown-700 tracking-07">
                    © 2024 <strong className="font-bold">Brand Name</strong> All rights reserved.
                    Unauthorized use or copying of this brand is strictly prohibited. No part of
                    this website may be reproduced, distributed, or transmitted in any form or by
                    any means, including photocopying, recording, or other electronic or mechanical
                    methods, without the prior written permission of Brand Name, except in the case
                    of brief quotations embodied in critical reviews and certain other
                    non-commercial uses permitted by copyright law.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
