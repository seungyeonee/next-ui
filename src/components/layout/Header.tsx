import css from "./Header.module.scss";

export default function Header() {
    return (
        <header className={css.header}>
            <h1 className={css.title}>Next-UI</h1>
        </header>
    );
}
