import React from "react";
import { Icon } from '@iconify/react';

export default function NavBar(props) {
    return (
        <div className='navbar'>
            <h1>{props.header}</h1>
            {props.header !== "WebScrapper" && <a href="/"><Icon icon="ant-design:home-filled" color="#fafafa" width="40"/></a>}
        </div>
    )
}