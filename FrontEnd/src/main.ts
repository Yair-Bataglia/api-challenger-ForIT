import './style.css'
import { getData } from './api'
import { addTarjet } from './dom'
import { filterData } from './filter'
import './modal'

async function main() {
  const data = await getData()
  addTarjet(data)

  const input = document.getElementById('search') as HTMLInputElement | null;
  if (input) {
    input.addEventListener('input', () => {
      const inputData = input?.value
      const dataFilter = filterData(data, inputData)
      if (dataFilter) {
        addTarjet(dataFilter)
      } else {
        addTarjet(data)
      }
    })
  }
  
}


main()
