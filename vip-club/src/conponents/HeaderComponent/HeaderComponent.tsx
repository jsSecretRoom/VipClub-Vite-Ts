
import { Outlet } from "react-router-dom";

function HeaderComponent() {
    return ( 
        <>
            <header>
                <nav>
                    <ul>
                        <li>11</li>
                        <li>11</li>
                        <li>11</li>
                        <li>11</li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>

    );
}

export default HeaderComponent;