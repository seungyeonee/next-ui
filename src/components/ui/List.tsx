import css from "./List.module.scss";

interface ListTypes {
    type?: "ul" | "ol";
    spacing?: number;
    children: any;
}

export default function List({ type = "ul", spacing, children, ...rest }: ListTypes) {
    const ListType = type;
    return (
        <ListType className={`${css.list} ${css.type}`} style={{ marginTop: spacing ? spacing : undefined }} {...rest} >
            {children}
        </ListType>
    );
}
