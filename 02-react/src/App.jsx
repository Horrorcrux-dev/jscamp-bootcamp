import Header from "./components/Header";
import Footer from "./components/Footer";

import SearchPage from "./pages/Search";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";
import { useRouter } from "./hooks/useRouter";

function App() {
    const { currentPath } = useRouter();

    let page = null;

    if (currentPath === "/") {
        page = <HomePage />;
    } else if (currentPath === "/search") {
        page = <SearchPage />;
    } else {
        page = <NotFoundPage />;
    }

    return (
        <div>
            <Header></Header>
            {page}
            <Footer />
        </div>
    );
}

export default App;
