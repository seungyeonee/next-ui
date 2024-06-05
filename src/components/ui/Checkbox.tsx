import css from "./Checkbox.module.scss";

interface CheckboxTypes {
    id: string;
    disabled?: boolean;
    spacing?: number;
}

export default function Checkbox({ id, disabled = false, spacing, ...rest }: CheckboxTypes) {
    return (
        <input type="checkbox" id={id} className={`${css.checkbox}`} disabled={disabled} style={{ marginTop: spacing ? spacing : undefined }} {...rest} />
    );
}
