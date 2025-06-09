"use client"

import * as React from "react"
import { Link } from 'react-router-dom'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {CarouselButton} from "@/components/carousel-button.jsx";


const exampleComponents = [
    {
        title: "Project 1",
        href: "/example-url",
        description:
            "Blah blah awesome content description, etc",
    },
    {
        title: "Project 2",
        href: "/example-url",
        description:
            "Blah blah awesome content description, etc",
    },
    {
        title: "Project 3",
        href: "example-url",
        description:
            "Blah blah awesome content description, etc",
    },
    {
        title: "Project 4",
        href: "/example-url",
        description: "Blah blah awesome content description, etc",
    },
]

// const exampleItems = [
//     {
//         triggerTitle: "Projects",
//         components: exampleComponents,
//         triggerLink: "example-url",
//     },
// ]


export function AppNavBar() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <CarouselButton/>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mt-4 mb-2 text-lg font-medium">
                                            Projects
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            Beautifully designed by me!
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="" title="Bio">
                                Learn more about who I am and what I do
                            </ListItem>
                            <ListItem href="" title="Recent Updates">
                                See posts about things I have been up to recently, or just stuff I find interesting!
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {exampleComponents.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
                      title,
                      children,
                      href,
                      ...props
                  }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
