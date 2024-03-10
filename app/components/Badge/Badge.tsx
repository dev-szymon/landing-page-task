import clsx from "clsx";

type BadgeProps = {
    className?: string;
    text: string;
};
const Badge: React.FC<BadgeProps> = ({text, className}) => {
    return (
        <div
            className={clsx(
                "flex w-fit items-center justify-center rounded-xl border border-brown bg-gray bg-opacity-20 px-6 py-3.5 font-secondary text-xs uppercase",
                className
            )}
        >
            {text}
        </div>
    );
};
export default Badge;
