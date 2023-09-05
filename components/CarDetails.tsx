import { CarProps } from "@/types"


interface CarDetailsProps {
    isOpen: boolean
    closeModal: () => void
    car: CarProps
}

export default function CarDetails({ isOpen, closeModal, car }: CarDetailsProps) {
    return (
        <>
        </>
    )
}