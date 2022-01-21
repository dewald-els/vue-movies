import { BASE_URL } from "./";

export async function apiUserLoginRegister(action = "login", username, password) {
    try {
        const config = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        }

        const response = await fetch(`${BASE_URL}/users/${action}`, config)
        const { success, data, error = "An error occurred while logging in" } = await response.json()
        if (!success) {
            throw new Error(error)
        }
        return [ null, data ]
    }
    catch(error) {
        return [ error.message, null ]
    }
}