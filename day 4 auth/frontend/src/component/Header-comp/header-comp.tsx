"use client"
import Image from "next/image"
import './header-comp.css'
import { Button } from "@mui/material"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function HeaderComp() {
    const router = useRouter();

    const handleLogOut = () => {
        try {
            Cookies.remove("token");
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            router.replace('/')
        } catch (err) {
            console.log('Log-Out Error', err);
        }
    }

    return (
        <header className="header">
            <Image src="/web-logo.png" width={53} height={36} alt="web Logo" />
            <Button
                type="submit"
                variant="contained"
                color="error"
                onClick={handleLogOut}
            >
                Log-Out
            </Button>
        </header>
    )
}
