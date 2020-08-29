// Footer Component

import React from "react";

function Footer() {
    return (
        <div className="footer">
            <p className="footer__copyright">
                {"\u00A9"} 2020 Christopher Lang
            </p>
            <p className="footer__icons-referral">
                All icons are provided by{" "}
                <a
                    href="https://iconscout.com/contributors/unicons"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Unicons Font
                </a>
                .
            </p>
        </div>
    );
}

export default Footer;
