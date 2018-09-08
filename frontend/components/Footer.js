import Link from "next/link";
import Menu from './Menu'

const hrStyle = {
    marginTop: 75
};

const Footer = (props) => (
    <div>
        <Menu menu={props.footerNav}/>
        <hr style={hrStyle} />
        <p>
            ❤️{" "}
            <Link href="https://postlight.com">
                <a>Made by Postlight</a>
            </Link>. 🍴{" "}
            <Link href="https://github.com/postlight/headless-wp-starter">
                <a>Fork on GitHub</a>
            </Link>.
        </p>
        <p>
            👋 Need help with your publishing platform?{" "}
            <Link href="mailto:hello@postlight.com?subject=Partner+with+Postlight+on+a+headless+CMS+project">
                <a>Say hi.</a>
            </Link>
        </p>
    </div>
);

export default Footer;
