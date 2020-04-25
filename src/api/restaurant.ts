import { Restaurant } from '../types/Restaurant'
import { apiEndpoint } from '../config'
import { CreateRestaurantRequest } from '../types/CreateRestaurantRequest'
export async function getRestaurant(idToken: string): Promise<Restaurant[]> {
    console.log('Fetching Restaurantes')
    const response = await fetch(`${apiEndpoint}/restaurant`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`
        },
    })
    const result = await response.json()
    
    return result
}

export async function createRestaurant(idToken: string,
    newRestaurant: CreateRestaurantRequest
    ): Promise<Restaurant> {
    const reply = await fetch(`${apiEndpoint}/restaurant`, {
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
    return result
}
