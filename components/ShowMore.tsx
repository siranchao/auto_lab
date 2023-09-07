'use client'
import { useRouter } from "next/navigation"
import { ShowMoreProps } from "@/types"
import { CustomBtn } from "."
import { LIMIT } from "@/constants"
import { updateSearchParams } from "@/utils"

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit: number = (pageNumber + 1) * LIMIT  
        const newPathName: string = updateSearchParams('limit', newLimit.toString())
        router.push(newPathName)
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