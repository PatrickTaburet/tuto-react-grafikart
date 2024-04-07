// import { useState } from 'react'
import Checkbox from './forms/Checkbox'
import Input from './forms/Input'
// const [checked, setChecked] = useState(false)
// const [placeholder, setPlaceholder] = useState("n'afficher que les produits en stock")

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  return (
    <div>
        <div className='mb-3'>
            <Input value={search} placeholder='Rechercher...' onChange={onSearchChange}/>
        </div>
      <Checkbox 
        id="stocked"
        checked={showStockedOnly}
        onChange={onStockedOnlyChange}
        label="N'afficher que les produits en stock"/>
    </div>
  )
}

export default SearchBar
