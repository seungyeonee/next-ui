'use client'

import { Switch, Label, Box } from "@/components";
import { handleCopyClipBoard } from "@/utils/common";
import { useState } from "react";

export default function SwitchPage() {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    return (
        <section className="card">
            <h2 className="h2">Switch + Label</h2>
            <p>Switch ui component with Label</p>
            <h3 className="h3 sub">props(Switch)</h3>
            <ul className="props">
                <li className="name">id *</li>
                <li className="type">string</li>
                <li className="init">-</li>
                <li className="expl">switch id</li>
            </ul>
            <ul className="props">
                <li className="name">disabled</li>
                <li className="type">boolean</li>
                <li className="init">-</li>
                <li className="expl">switch disabled</li>
            </ul>
            <h3 className="h3 sub">props(Label)</h3>
            <ul className="props">
                <li className="name">htmlFor *</li>
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
            <h3 className="h3 sub">sample</h3>
            <Box colGap="5px">
                <Switch id="switch" checked={isChecked} onChange={setIsChecked} />
                <Label htmlFor="switch">label text here!</Label>
            </Box>
            <h3 className="h3 sub">code</h3>
            <code>
                <button className="btn-copy" onClick={() => {
                    handleCopyClipBoard('<Box colGap="5px"><Switch id="switch" checked={isChecked} onChange={setIsChecked} /><Label htmlFor="switch">label text here!</Label></Box>')
                }}>copy</button>
                {`<Box colGap="5px">`}<br />
                {`<Switch id="switch" checked={isChecked} onChange={setIsChecked} />`}<br />
                {`<Label htmlFor="switch">label text here!</Label>`}<br />
                {`</Box>`}
            </code>
        </section>
    );
}
