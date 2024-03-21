import { useFetch } from "@/hooks/useFetch";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { useEffect, useState } from "react";
const HomeView = () => {
    const [carouselData,setCarouselData] = useState()
    const {data, getData } = useFetch('/v1.4/movie')

    useEffect(() => {
        getData()
             .then(data => { setCarouselData(data?.slice(0,5)) })
             .catch(err => console.log(err))
    }, [])

    // const carouselData = data?.slice(0,5);


    return (
    <>
    {/* {JSON.stringify(carouselData).length} */}
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
      {carouselData?.map(movie => (
          <CarouselItem key={'movie.id'} className="md:basis-1/2 lg:basis-1/3">
              <Card >
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img className="rounded-lg object-center"  src={movie?.poster?.previewUrl} alt="" />
                </CardContent>
              </Card>
          </CarouselItem>
              ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      <h1 className="text-[32px] font-normal leading-10 tracking-[-0.5px] text-left">
        Trending
      </h1>
     
    </>
  )
}

export default HomeView;
