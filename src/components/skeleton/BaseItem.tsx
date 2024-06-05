import css from "./BaseItem.module.scss";

interface BaseItemTypes {
    spacing?: number;
}

export default function BaseItem({ spacing }: BaseItemTypes) {
    return (
        <div className={css.item} style={{ marginTop: spacing ? spacing : undefined }} />
    );
}
