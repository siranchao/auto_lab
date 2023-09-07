'use client'
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components"
import { fetchCars } from "@/utils"
import { fuels, yearsOfProduction, LIMIT, YEAR } from "@/constants"
import { useState, useEffect } from "react"
import { CarProps } from "@/types"
import Image from "next/image"
import { Filter, FilterContext } from "@/contexts"



export default function Home() {
  const [allCars, setAllCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [filter, setFilter] = useState<Filter>({
    make: "",
    model: "",
    fuel: "",
    year: YEAR,
    limit: LIMIT
  })

  const updateFilter = (newFilter: Filter) => {
    setFilter(newFilter)
  }


  async function getData() {
    setLoading(true)
    try {
      const data = await fetchCars({
        make: filter.make || "",
        model: filter.model || "",
        year: filter.year || YEAR,
        fuel_type: filter.fuel || "",
        limit: filter.limit || LIMIT
      })
      setAllCars(data)
    } catch(error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    let abort = false
    if(!abort) {
      getData()
    }

    return () => {
      abort = true
    }
  }, [filter.make, filter.model, filter.limit, filter.fuel, filter.year])



  return (
    <FilterContext.Provider value={{ filter, updateFilter }}>
      <main className="overflow-hidden">
        <Hero />
        
        <div className="mt-22 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl front-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>

          {allCars.length > 0 ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car, index) => (
                  <CarCard key={index} car={car} />
                ))}
              </div>

              {loading ? (
                <div className="mt-16 w-full flex-center">
                  <Image
                    src="/tire.svg"
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ) : (
                <ShowMore 
                  pageNumber={ filter.limit / LIMIT }
                  isNext={ filter.limit < allCars?.length}
                />
              )}

            </section>
          ) : (
            <div className="home__error-container">
              <h3 className="text-black text-xl font-bold">Oops, no results</h3>
              <p className="text-gray-500">Please try again later</p>
            </div>
          )}

        </div>
      </main>
    </FilterContext.Provider>
  )
}
