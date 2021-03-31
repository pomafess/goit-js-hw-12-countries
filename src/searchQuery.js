const baseUrl = 'https://restcountries.eu/rest/v2/name';
export default function fetchCountries(nameCountry) {
    return fetch(`${baseUrl}/${nameCountry}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error")
                }
                return response.json()
            })
}

