import * as React from "react"
import { SquareCode, PencilRuler } from "lucide-react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button.jsx"

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
        }
    ]
    return (
        <Carousel orientation="horizontal" opts={{
            align: "start",
            loop: true,
        }} setApi={setApi}>
            <Button onClick={api?.scrollNext} variant="secondary">
                <CarouselContent>
                    {categories.map((item) => (
                        <CarouselItem key={item.name}>
                            <div className="inline-flex items-center space-x-2">
                                <item.icon className="h-5 w-5 flex-shrink-0" />
                                <span>{item.name}</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Button>
        </Carousel>
    )
}
