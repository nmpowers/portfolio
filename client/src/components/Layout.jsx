import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavBar } from "@/components/app-navbar.jsx";
import { CarouselButton } from "@/components/carousel-button.jsx"

export function Layout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-1 flex-col">
                <div className="p-4">
                <SidebarTrigger />
                </div>
                <CarouselButton/>
                <AppNavBar/>
                {children}
            </main>
        </SidebarProvider>
    )
}