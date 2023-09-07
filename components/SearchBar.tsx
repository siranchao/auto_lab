'use client';
import { SearchManufacturer } from ".";
import { useState, useContext } from "react";
import Image from "next/image";
import { FilterContext } from "@/contexts";


export default function SearchBar() {
    const [manufacturer, setManufacturer] = useState<string>("")
    const [model, setModel] = useState<string>("")
    const { filter, updateFilter } = useContext(FilterContext)

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(manufacturer === ''&& model === '') {
            return
        }
        updateFilter({...filter, make: manufacturer, model: model})
    }


    const SearchBtn = ({otherClasses}: {otherClasses: string}) => (
        <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
            <Image src="/magnifying-glass.svg" alt="search" width={40} height={40} className="object-contain"/>
        </button>
    )


    return (
        <>
            <form className="searchbar" onSubmit={handleSearch}>
                <div className="searchbar__item">
                    <SearchManufacturer 
                        manufacturer={manufacturer} 
                        setManufacturer={setManufacturer}
                    />
                    <SearchBtn otherClasses="sm:hidden"/>
                </div>

                <div className="searchbar__item">
                    <Image 
                        src="/model-icon.png"
                        width={25}
                        height={25}
                        alt="model icon"
                        className="absolute w-[20px] h-[20px] ml-4"
                    />
                    <input 
                        type="text" 
                        name="model" 
                        value={model} 
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="Model"
                        className="searchbar__input"
                    />
                    <SearchBtn otherClasses="sm:hidden"/>
                </div>
                <SearchBtn otherClasses="max-sm:hidden"/>
            </form>
        </>
    )
}