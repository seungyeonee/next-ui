import css from "./Label.module.scss";

interface LabelTypes {
    htmlFor: string
    children: string;
}

export default function Label({ htmlFor, children, ...rest }: LabelTypes) {
    return (
        <label htmlFor={htmlFor} className={`${css.label}`} {...rest}>
            {children}
        </label>
    );
}
