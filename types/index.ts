import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title: string
    btnType?: "button" | "submit"
    styles?: string
    textStyles?: string
    rightIcon?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}


export interface SearchManuFacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
  }

export interface FilterProps {
  make: string
  model: string
  year: number
  fuel_type: string 
  limit: number
}


export interface OptionProps {
  title: string
  value: string
}

export interface CustomFilterProps {
  title: string
  options: OptionProps[]
}

export interface ShowMoreProps {
  pageNumber: number
  isEnd: boolean
}
