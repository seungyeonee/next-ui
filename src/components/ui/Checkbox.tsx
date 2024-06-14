import css from "./Checkbox.module.scss";

interface CheckboxTypes {
    id: string;
    disabled?: boolean;
}

export default function Checkbox({ id, disabled = false, ...rest }: CheckboxTypes) {
    return (
        <input type="checkbox" id={id} className={`${css.checkbox}`} disabled={disabled} {...rest} />
    );
}
