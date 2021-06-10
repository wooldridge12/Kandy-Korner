import React from "react"
import { LocationProvider } from "./Locations/LocationsProvider"
import { LocationList } from "./Locations/LocationsList"

export const KandyKorner = () => (
    <>
        <h1>Kandy Korner</h1>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)