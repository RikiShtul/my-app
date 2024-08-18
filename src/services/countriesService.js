export async function GetCountries() {
    const response = await fetch('https://localhost:44357/api/Countries/GetAsianCountries');
    return await response.json();
}