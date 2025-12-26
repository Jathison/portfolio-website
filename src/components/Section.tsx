import './Section.css';
import React, {type ReactNode} from "react";
export default function Section({children}: {children: ReactNode}) {
    return (
        <section
            className="page-section">
            {children}
        </section>
    );
}