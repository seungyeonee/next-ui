'use client'
import { Button } from "@/components";
import { handleCopyClipBoard } from "@/utils/common";

export default function ButtonPage() {
    return (
        <section className="card">
            <h2 className="h2">Button</h2>
            <p className="txt">Display a button</p>
            <h3 className="h3 sub">Props</h3>
            <ul className="props">
                <li className="name">size</li>
                <li className="type">string</li>
                <li className="init">sm / <b>md</b> / lg</li>
                <li className="expl">button size</li>
            </ul>
            <ul className="props">
                <li className="name">disabled</li>
                <li className="type">boolean</li>
                <li className="init">-</li>
                <li className="expl">button disabled check</li>
            </ul>
            <ul className="props">
                <li className="name">spacing</li>
                <li className="type">number</li>
                <li className="init">-</li>
                <li className="expl">button margin top (px)</li>
            </ul>
            <h3 className="h3 sub">Preview</h3>
            <Button>
                BUTTON TEXT
            </Button>
            <h3 className="h3 sub">Code</h3>
            <code>
                <button className="btn-copy" onClick={() => {
                    handleCopyClipBoard('<Button>BUTTON TEXT</Button>')
                }}>copy</button>
                {`<Button>BUTTON TEXT</Button>`}
            </code>
        </section>
    );
}
