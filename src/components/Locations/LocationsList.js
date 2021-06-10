import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import"./location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    
    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])

    return (
        <section className="locations">
            {
                locations.map(location => {
                    return (
                        <div className="location" id={`location--${location.id}`}>
                            <div className="locationName">
                            Name: { location.name }
                            </div>
                            <div className="locationAddress">
                            Address: { location.address }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}