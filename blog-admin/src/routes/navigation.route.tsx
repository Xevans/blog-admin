import { Outlet } from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className="text-2xl">
                Navigation
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navigation;