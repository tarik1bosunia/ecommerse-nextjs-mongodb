const BASE_URL = "http://localhost:3000/"

export const getUser = async () =>{
    const response = await fetch(`${BASE_URL}api/users/`)
    const json_response = await response.json()

    return json_response
}