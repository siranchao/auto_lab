'use client'
import { ShowMoreProps } from "@/types"
import { CustomBtn } from "."
import { LIMIT } from "@/constants"
import { FilterContext } from "@/contexts"
import { useContext } from "react"

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
    const { filter, updateFilter } = useContext(FilterContext)

    const handleNavigation = () => {
        const newLimit: number = (pageNumber + 1) * LIMIT  
        updateFilter({...filter, limit: newLimit})
    }


    return (
        <>
            <div className="w-full flex-center gap-5 mt-10">
                {!isNext && (
                    <CustomBtn
                        title="Show More" 
                        btnType="button" 
                        styles="bg-primary-blue text-white rounded-full"
                        handleClick={handleNavigation} 
                    />
                )}
            </div>
        </>
    )
}