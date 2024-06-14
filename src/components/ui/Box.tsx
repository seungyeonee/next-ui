import css from "./Box.module.scss";

interface BoxTypes {
    children: any;
    position?: 'left-top' | 'left-center' | 'left-bottom' | 'center-top' | 'center' | 'center-bottom' | 'right-top' | 'right-center' | 'right-bottom' | 'space-between';
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    rowGap?: string;
    colGap?: string;
}

export default function Box({ children, position = 'left-center', direction = 'row', rowGap, colGap }: BoxTypes) {
    return (
        <div className={`${css.box} ${css[position]}`} style={{ flexDirection: direction ? direction : undefined, rowGap: rowGap ? rowGap : undefined, columnGap: colGap ? colGap : undefined }}>
            {children}
        </div>
    );
}
