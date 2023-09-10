import { CarProps } from "@/types";
import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps): Promise<CarProps[]> {
    const header = {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY as string,
		'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST as string
	}
    const url = new URL('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars');

    if(filters.make === "All") {
        filters.make = ""
    }

    Object.entries(filters).forEach(([key, value]) => {
        url.searchParams.append(key, value)
    })

    const response = await fetch(url, {
        method: 'GET',
        headers: header
    });

    const result = await response.json()
    return result
}

export function calcRentRate(city_mpg: number, year: number): string {
    const baseRatePerDay: number = 50
    const mileageFactor: number = 0.1
    const ageFactor: number = 0.05

    const mileageRate: number = city_mpg * mileageFactor
    const ageRate: number = (new Date().getFullYear() - year) * ageFactor
    const ratePerDay = baseRatePerDay + mileageRate + ageRate

    return ratePerDay.toFixed(0)
}

export function carImageUrl(car: CarProps, angle?: string): string {
    const { make, year, model } = car

    const url = new URL('https://cdn.imagin.studio/getimage')
    
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGE_API_KEY as string)
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', year.toString())
    if(angle) {
        url.searchParams.append('angle', angle)
    }

    return url.href
}


export function updateSearchParams(type: string, value: string): string {
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value)
    return `${window.location.pathname}?${searchParams.toString()}`
}