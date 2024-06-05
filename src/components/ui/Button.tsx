import { Suspense } from "react";
import css from "./Button.module.scss";
import BaseItem from "../skeleton/BaseItem";

interface ButtonTypes {
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    spacing?: number;
    children: any;
}

export default function Button({ size = "md", disabled = false, spacing, children, ...rest }: ButtonTypes) {
    return (
        <Suspense fallback={<BaseItem spacing={spacing} />}>
            <button className={`${css.button} ${css[size]}`} disabled={disabled} style={{marginTop: spacing ? spacing : undefined}} {...rest}>
                {children}
            </button>
        </Suspense>
    );
}
