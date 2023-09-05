
export async function fetchCars() {
    const header = {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY as string,
		'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST as string
	}

    const url: string = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: header
        });
        
        const result = await response.json()
        
        return result
    } catch (error) {
        console.error(error);
    }
}


export function calcRentRate(city_mpg: number, year: number) {
    const baseRatePerDay: number = 50
    const mileageFactor: number = 0.1
    const ageFactor: number = 0.05

    const mileageRate: number = city_mpg * mileageFactor
    const ageRate: number = (new Date().getFullYear() - year) * ageFactor
    const ratePerDay = baseRatePerDay + mileageRate + ageRate

    return ratePerDay.toFixed(0)
}