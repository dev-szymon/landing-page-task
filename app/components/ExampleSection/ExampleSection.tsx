import {Link} from "@remix-run/react";
import {Badge} from "../Badge";

const ExampleSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center px-4 pb-17.5 pt-15">
            <Badge text="EXAMPLE SECTION" className="mb-7 text-black-850" />
            <p className="mb-11 max-w-[83rem] text-center font-secondary text-[2rem] font-medium -tracking-wider text-black-850">
                Lorem{" "}
                <span className="bg-clip-text font-semibold text-transparent bg-gradient-primary">
                    ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel
                </span>{" "}
                massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales eros mollis
                eget. Morbi vitae libero in nunc sodales.
            </p>
            <Link
                to="/"
                className="font-primary text-sm font-semibold uppercase text-black-600 underline tracking-07"
            >
                see more
            </Link>
        </div>
    );
};
export default ExampleSection;
