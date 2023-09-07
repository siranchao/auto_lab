'use client'
import { ShowMoreProps } from "@/types"
import { CustomBtn } from "."
import { LIMIT } from "@/constants"
import { FilterContext } from "@/contexts"
import { useContext } from "react"

export default function ShowMore({ pageNumber, isEnd }: ShowMoreProps) {
    const { filter, updateFilter } = useContext(FilterContext)

    const handleNavigation = () => {
        const newLimit: number = (pageNumber + 1) * LIMIT  
        updateFilter({...filter, limit: newLimit})
    }

    const jumpTo = (position: number) => {
        window.scrollTo({ top: position, behavior: 'smooth' })
    }


    return (
        <>
            <div className="w-full flex-center gap-5 mt-10">
                {!isEnd ? (
                    <CustomBtn
                        title="Show More" 
                        btnType="button" 
                        styles="bg-primary-blue text-white rounded-full"
                        handleClick={handleNavigation} 
                    />
                ) : (
                    <CustomBtn
                        title="End of List" 
                        btnType="button" 
                        styles="bg-gray-300 text-white rounded-full"
                        handleClick={() => jumpTo(900)} 
                    />
                )}
            </div>
        </>
    )
}