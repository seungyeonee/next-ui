import css from "./List.module.scss";

interface ListTypes {
    type?: "ul" | "ol";
    children: any;
}

export default function List({ type = "ul", children, ...rest }: ListTypes) {
    const ListType = type;
    return (
        <ListType className={`${css.list} ${css.type}`} {...rest} >
            {children}
        </ListType>
    );
}
