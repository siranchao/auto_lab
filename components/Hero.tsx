'use client'
import { CustomBtn } from "."
import Image from "next/image"

export default function Hero() {

    const jumpTo = (position: number) => {
        window.scrollTo({ top: position, behavior: 'smooth' })
    }


    return (
        <>
            <div className="hero">
                <div className="flex-1 pt-36 padding-x">
                    <h1 className="hero__title">Find and book your dream car quickly and easily!</h1>
                    <p className="hero__subtitle">Streamline your car rental experience with our effortless booking platform.</p>

                    <CustomBtn 
                        title="Explore Cars" 
                        btnType="button"
                        styles="bg-primary-blue text-white rounded-full mt-10" 
                        handleClick={() => jumpTo(900)} 
                    />
                </div>

                <div className="hero__image-container">
                        <div className="hero__image">
                            <Image src="/hero.png" alt="hero-image" fill className="object-contain"/>
                        </div>
                        <div className="hero__image-overlay" />
                </div>
            </div>
        </>
    )
}