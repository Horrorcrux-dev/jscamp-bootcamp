import Link from "./Link";

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
                    <Link href="/">Inicio</Link>
                    <Link href="/search">Empleos</Link>
                    <Link href="/oferta">Empresas</Link>
                    <Link href="">Salarios</Link>
                </nav>
            </div>

            <div className="user-actions">
                <Link className="button secondary">Subir CV</Link>
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
