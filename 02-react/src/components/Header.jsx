const Header = () => {
    return (
        <header className="nav-bar">
            <div className="logo-nav">
                <h2 className="logo">DevJobs</h2>
                <nav>
                    <a href="../index.html">Inicio</a>
                    <a href="empleos.html">Empleos</a>
                    <a href="oferta.html">Empresas</a>
                    <a href="">Salarios</a>
                </nav>
            </div>

            <div className="user-actions">
                <a className="button secondary">Subir CV</a>
                <devjobs-avatar
                    service="x"
                    username="Dan_Barri_S"
                    size="40"></devjobs-avatar>
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
