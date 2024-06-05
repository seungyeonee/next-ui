'use client'

import { Checkbox, Label } from "@/components";
import { handleCopyClipBoard } from "@/utils/common";

export default function CheckboxPage() {
    return (
        <section className="card">
            <h2 className="h2">Checkbox + Label</h2>
            <p>Checkbox ui component with Label</p>
            <h3 className="h3 sub">props(Checkbox)</h3>
            <ul className="props">
                <li className="name">id *</li>
                <li className="type">string</li>
                <li className="init">-</li>
                <li className="expl">checkbox id</li>
            </ul>
            <ul className="props">
                <li className="name">disabled</li>
                <li className="type">boolean</li>
                <li className="init">-</li>
                <li className="expl">checkbox disabled</li>
            </ul>
            <ul className="props">
                <li className="name">spacing</li>
                <li className="type">number</li>
                <li className="init">-</li>
                <li className="expl">checkbox margin top (px)</li>
            </ul>
            <h3 className="h3 sub">props(Label)</h3>
            <ul className="props">
                <li className="name">htmlFor</li>
                <li className="type">string</li>
                <li className="init">-</li>
                <li className="expl">htmlfor attribute for label</li>
            </ul>
            <ul className="props">
                <li className="name">children *</li>
                <li className="type">any</li>
                <li className="init">-</li>
                <li className="expl">label text</li>
            </ul>
            <ul className="props">
                <li className="name">position</li>
                <li className="type">string</li>
                <li className="init">{'left'} / {'right'} / {'-'}</li>
                <li className="expl">check label icon position</li>
            </ul>
            <h3 className="h3 sub">sample</h3>
            <Checkbox id="checkbox" />
            <Label htmlFor="checkbox" position="left">label text here!</Label>
            <h3 className="h3 sub">code</h3>
            <code>
                <button className="btn-copy" onClick={() => {
                    handleCopyClipBoard('<Checkbox id="checkbox"/><Label htmlFor="checkbox" position="left">label text here!</Label>')
                }}>copy</button>
                {`
                <Checkbox id="checkbox"/>`}<br />
                {`<Label htmlFor="checkbox" position="left">label text here!</Label>
                `}
            </code>
        </section>
    );
}
