import * as React from "react"
import { SquareCode, PencilRuler, Leaf, BringToFront } from "lucide-react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button.jsx"
import {Card, CardContent} from "@/components/ui/card.jsx";

export function CarouselButton() {
    const [api, setApi] = React.useState()
    const categories = [
        {
            name: "Computer Science",
            icon: SquareCode,
        },
        {
            name: "Architectural Engineering",
            icon: PencilRuler
        },
        {
            name: "Extra-Curriculars",
            icon: BringToFront
        },
        {
            name: "Climate Action",
            icon: Leaf
        }
    ]
    return (
            <Carousel className="w-full max-w-xs mx-auto" orientation="horizontal" opts={{
                align: "start",
                loop: false,
            }} setApi={setApi}>

                    <Card className="rounded-4xl py-2">
                        <CardContent className="inline-flex justify-center items-center">
                            <CarouselContent>
                            {categories.map((item) => (
                            <CarouselItem key={item.name} className="inline-flex justify-center items-center space-x-2">
                                <item.icon className="h-5 w-5 flex-shrink-0"/> <span className="text-xl">{item.name}</span>
                            </CarouselItem>
                    ))}
                </CarouselContent>
                        </CardContent>
                </Card>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
    )
}
