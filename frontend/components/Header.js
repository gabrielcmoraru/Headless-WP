import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./Menu.js";
import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss';
import MainNav from './MainNav';


class Header extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        WordPress + React Starter Kit Frontend by Postlight
                    </title>
                </Head>
                <header>
                    <Link href="/">
                    <a><h1>Wordpress Blog</h1></a>
                    </Link>
                    <nav>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </nav>
                    <MainNav/>
                </header>
            </div>
        );
    }
}

export default Header;
