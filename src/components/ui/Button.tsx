import { Suspense } from "react";
import css from "./Button.module.scss";
import BaseItem from "../skeleton/BaseItem";

interface ButtonTypes {
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    spacing?: number;
    bgColor?: string;
    textColor?: string;
    onClick?: any;
    children: any;
}

export default function Button({ size = "md", bgColor, textColor, disabled = false, spacing, children, onClick, ...rest }: ButtonTypes) {
    return (
        <Suspense fallback={<BaseItem spacing={spacing} />}>
            <button className={`${css.button} ${css[size]}`} disabled={disabled} style={{ marginTop: spacing ? spacing : 0, color: textColor ? textColor : "#000", backgroundColor: bgColor ? bgColor : '#ececec' }} onClick={onClick} {...rest}>
                {children}
            </button>
        </Suspense>
    );
}
