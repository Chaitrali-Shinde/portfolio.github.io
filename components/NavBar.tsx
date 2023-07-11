import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">Chaitrali Shinde</Link>
            </div>

            <ul className="flex white">
                <li className="green">
                    <Link href="/Resume">{"Resume"}</Link>
                </li>
                <li>
                    <Link href="/Projects">{"Projects"}</Link>
                </li>
                <li>
                    <Link href="/Contact">{"Contact"}</Link>
                </li>
            </ul>
        </nav>
    )
}