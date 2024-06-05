import css from "./List.module.scss";

interface ListTypes {
    type?: "ul" | "ol";
    spacing?: number;
    className?: string;
    children: any;
}

export default function List({ type = "ul", spacing, children, className, ...rest }: ListTypes) {
    const ListType = type;
    return (
        <ListType className={`${css.list} ${css.type} ${className ? className : ''}`} style={{ marginTop: spacing ? spacing : undefined }} {...rest} >
            {children}
        </ListType>
    );
}
