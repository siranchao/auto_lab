'use client';
import { SearchManufacturer } from ".";
import { useState } from "react";


export default function SearchBar() {
    const [manufacturer, setManufacturer] = useState<string>("")


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        
    }



    return (
        <>
            <form className="searchbar" onSubmit={handleSearch}>
                <div className="searchbar__item">
                    <SearchManufacturer 
                        manufacturer={manufacturer} 
                        setManufacturer={setManufacturer}
                    />
                    
                </div>

            </form>
        </>
    )
}