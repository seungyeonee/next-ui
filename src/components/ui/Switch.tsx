import { LegacyRef, forwardRef } from "react";
import css from "./Switch.module.scss";

interface SwitchTypes {
    id: string;
    disabled?: boolean;
    checked: boolean;
    onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch = forwardRef(function Switch({ id, disabled = false, checked, onChange }: SwitchTypes, ref: LegacyRef<HTMLInputElement>) {
    return (
        <input type="checkbox" id={id} className={`${css.switch}`} disabled={disabled} aria-checked={checked} onChange={() => onChange(!checked)} ref={ref} />
    );
})

export default Switch
