import { createContext } from "react"

export interface Filter {
    make: string
    model: string
    fuel: string
    year: number
    limit: number
}
  
export const FilterContext = createContext<any>(null)