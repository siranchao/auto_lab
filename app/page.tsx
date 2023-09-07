import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components"
import { fetchCars } from "@/utils"
import { fuels, yearsOfProduction, LIMIT, YEAR } from "@/constants"



export default async function Home({ searchParams }: any) {
  const allCars = await fetchCars({
    make: searchParams.make || "",
    model: searchParams.model || "",
    year: searchParams.year || YEAR,
    fuel_type: searchParams.fuel || "",
    limit: searchParams.limit || LIMIT
  })
  const isDataEmpty = !allCars || !Array.isArray(allCars) || allCars.length === 0

  return (
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
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>

            <ShowMore 
              pageNumber={(searchParams.limit || LIMIT) / LIMIT}
              isNext={(searchParams.limit || LIMIT) < allCars?.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h3 className="text-black text-xl font-bold">Oops, no results</h3>
            <p className="text-gray-500">Please try again later</p>
          </div>
        )}

      </div>
    </main>
  )
}
