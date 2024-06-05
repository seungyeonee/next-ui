import css from "./Label.module.scss";

interface LabelTypes {
    htmlFor: string
    children: string;
    position?: 'left' | 'right';
}

export default function Label({ htmlFor, children, position, ...rest }: LabelTypes) {
    return (
        <label htmlFor={htmlFor} className={`${css.label} ${position ? position === 'left' ? css.left : css.right : ''}`} {...rest}>
            {children}
        </label>
    );
}
