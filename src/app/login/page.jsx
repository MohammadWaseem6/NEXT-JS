"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    console.log(user);
    const onLogin = async () => {
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 '>
            <h1 className="font-semibold text-2xl rounded-sm">LOGIN</h1><br />

            <label>EMAIL</label>
            <input
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email" placeholder="email..." />
            <label>PASSWORD</label>
            <input
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password" placeholder="password..." />
            <button
                onClick={onLogin}
                className=" rounded-md mt-3  border border-white border-1 w-[100px] h-[30px] "> LOGIN</button>
            <Link
                className="mt-3 font-bold w-[200px] h-[30px] text-center"
                href='/profile'>NEXT PAGE ➡️ </Link>
        </div>
    )
}

export default LoginPage
