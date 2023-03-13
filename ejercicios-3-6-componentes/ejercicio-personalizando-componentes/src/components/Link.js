function Link(props) {
    return (
        <div>
            <li className="menu-item">
                <a title="Blog" className="menu-link" href="https://adalab.es/blog/">
                    Blog
                </a>
            </li>
            <li className="menu-item">
                <a title="Contacto" className="menu-link" href="https://adalab.es/contacto/">
                    Contacto
                </a>
            </li>
        </div>
    );
}

export default Link;