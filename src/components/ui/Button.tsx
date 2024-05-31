import css from "./Button.module.scss";

interface ButtonTypes {
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    children: any;
}

export default function Button({ size = "md", disabled = false, children, ...rest }: ButtonTypes) {
    return (
        <button className={`${css.button} ${css[size]}`} disabled={disabled} {...rest}>
            {children}
        </button>
    );
}
