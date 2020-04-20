import { Restaurant } from '../types/Restaurant'
import { apiEndpoint } from '../config'
import { CreateRestaurantRequest } from '../types/CreateRestaurantRequest'

export async function getRestaurant(): Promise<Restaurant[]> {
    console.log('Fetching Restaurantes')

    const response = await fetch(`${apiEndpoint}/restuarant`)
    const result = await response.json()

    return result.items
}

export async function createRestaurant(
    idToken: string,
    newRestaurant: CreateRestaurantRequest
): Promise<Restaurant> {
    const reply = await fetch(`${apiEndpoint}/groups`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`
        },
        body: JSON.stringify({
            name: newRestaurant.name,
            location: newRestaurant.location,
            phone: newRestaurant.phone
        })
    })
    const result = await reply.json()
    return result.newItem
}
