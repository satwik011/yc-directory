
import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
    const session = await auth()
    return (
        <header className="px-4 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="yc logo" width={140} height={30} />
                </Link>
                <div className="flex gap-5 items-center text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form action={async () => {
                            'use server'
                            await signOut({redirectTo :'/'})
                        }}>
                            <button type="submit">logout</button>
                        </form>
                          
                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name} </span>
                            </Link>
                        </>
                    ) : <>
                        <form action={async () => {
                            'use server'
                            await signIn('github')
                        }}>
                            <button>login</button>
                        </form>
                    </>}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;  