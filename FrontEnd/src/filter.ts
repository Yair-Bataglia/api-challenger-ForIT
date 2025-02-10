export function filterData(data: Array<any>, inputText: string){
    const busquedaMinuscula = inputText.toLowerCase()
    const dataFilter = data.filter((item: any) => {
        return item.name.toLowerCase().includes(busquedaMinuscula) || item.email.toLowerCase().includes(busquedaMinuscula) || item.address.city.toLowerCase().includes(busquedaMinuscula)
    })

    if (!(!!busquedaMinuscula)) {
        return false
    }

    return dataFilter
}