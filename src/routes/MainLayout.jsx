import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout";

export default function MainLayout() {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    );
}
