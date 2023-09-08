import { createContext } from "react"

export interface Filter {
    make: string
    model: string
    fuel: string
    year: number
    limit: number
}
  
export const FilterContext = createContext<any>(null)

export const ModalContext = createContext<{
    isOpen: boolean, 
    openModal: () => void,
    closeModal: () => void}>({
        isOpen: false,
        openModal: () => {},
        closeModal: () => {}
})