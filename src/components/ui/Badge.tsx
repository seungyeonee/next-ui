import css from "./Badge.module.scss";

interface BadgeTypes {
    size?: "sm" | "md" | "lg";
    bgColor?: string;
    textColor?: string;
    children: any;
}

export default function Badge({ size = "sm", bgColor = "#333", textColor = "#ddd", children, ...rest }: BadgeTypes) {
    return (
        <span className={`${css.badge} ${css[size]}`} style={{ backgroundColor: bgColor, color: textColor }}{...rest}>
            {children}
        </span>
    );
}
