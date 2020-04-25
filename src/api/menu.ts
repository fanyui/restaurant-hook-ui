import { apiEndpoint } from '../config'
import { Menu } from '../types/Menu'
import { CreateMenuRequest } from '../types/CreateMenuRequest'
import { MenuUploadResponse } from '../types/MenuUploadResponse'

export async function getMenus(idToken:string, restaurantId: string): Promise<Menu[]> {
    console.log('Fetching Menus')
    const response = await fetch(`${apiEndpoint}/restaurant/${restaurantId}/menu`,
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

export async function createImage(
    idToken: string,
    newMenu: CreateMenuRequest
): Promise<MenuUploadResponse> {

    const reply = await fetch(
        `${apiEndpoint}/restaurant/${newMenu.restaurantId}/menu`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idToken}`
            },
            body: JSON.stringify(newMenu)
        }
    )

    return await reply.json()
}

export async function uploadFile(uploadUrl: string, file: Buffer): Promise<void> {
    await fetch(uploadUrl, {
        method: 'PUT',
        body: file
    })
}
