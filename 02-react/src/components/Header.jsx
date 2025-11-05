const Header = () => {
    return (
        <header className="nav-bar">
            <div className="logo-nav">
                <h2 className="logo">
                    <svg
                        width="30"
                        height="30"
                        fill="none"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            clipRule="evenodd"
                            d="M12.08 24 4 19.248 9.955 8.752l8.085 4.744L18.045 4h11.91l.005 9.496 8.085-4.744L44 19.248 35.92 24 44 28.752l-5.955 10.496-8.085-4.744L29.955 44h-11.91l-.005-9.496-8.085 4.744L4 28.752z"
                            fill="#09f"
                            fillRule="evenodd"
                        />
                    </svg>
                    DevJobs
                </h2>
                <nav>
                    <a href="../index.html">Inicio</a>
                    <a href="empleos.html">Empleos</a>
                    <a href="oferta.html">Empresas</a>
                    <a href="">Salarios</a>
                </nav>
            </div>

            <div className="user-actions">
                <a className="button secondary">Subir CV</a>
                <img
                    className="avatar"
                    src="./profile.jpg"
                    alt="Profile picture"
                />
            </div>
        </header>
    );
};

export default Header;
