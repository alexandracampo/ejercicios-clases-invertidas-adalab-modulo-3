// Fichero src/components/Link.js
function Link(props) {
    const { title, url, openInNewTab } = props;
    console.log(url)

    return (
        <li className="menu-item">
            <a
                title={title}
                className="menu-link"
                href={url}
                target={openInNewTab ? "_blank" : "_self"}
                rel={openInNewTab ? "noopener noreferrer" : ""}
            >
                {title}
            </a>
        </li>
    );
}

export default Link;