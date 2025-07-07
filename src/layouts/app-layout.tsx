import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div className="bg-secondary">
            <Outlet />
        </div>
    )
}