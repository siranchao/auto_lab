'use client'
import Link from "next/link"
import Image from "next/image"
import { CustomBtn } from "."
import { useContext } from "react"
import { ModalContext } from "@/contexts"

export default function Navbar() {
    const { openModal } = useContext(ModalContext)

    return (
        <>
            <header className="w-full absolute z-10">
                <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16">
                    <Link href="/" className="flex justify-center items-center">
                        <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain"/>
                    </Link>

                    <CustomBtn title="Sign in" btnType="button" styles="text-primary-blue rounded-full bg-white min-w-[130px]" handleClick={openModal}/>
                </nav>

            </header>
        </>
    )
}