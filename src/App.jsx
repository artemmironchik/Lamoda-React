import './App.css';
import React, { useState, useCallback, useMemo } from 'react';
import Search from './components/Search/Search'
import SortButtons from './components/SortButtons/SortButtons'
import { generateCards } from './utils/generate';
import { COLORS, FILTERS } from './utils/constValues'
import Multiselect from './components/Multiselect/Multiselect'
import Price from './components/Price/Price'
import Amount from './components/Amount/Amount'
import Products from './components/Products/Products'
import { useEffect } from 'react';
import debounce from 'lodash.debounce'

function App() {
    const allProducts = useMemo(() => generateCards(), [])
    const [filterFns, setFilterFns] = useState({})
    const [sortingFn, setSortingFn] = useState()
    const [filteredProducts, setFilteredProducts] = useState([])

    const handleUpdateColorFilter = (colorsSet) => {
        const filterFnsCopy = {...filterFns};
        if (colorsSet.size === 0) {
            delete filterFnsCopy.color;
            setFilterFns(filterFnsCopy)
            return;
        }
        setFilterFns({ ...filterFns, color: FILTERS.includes(colorsSet, 'color') })
    }
    const handleSearchValue = (searchValue) => {
        setFilterFns({ ...filterFns, search: FILTERS.search(searchValue, 'name') })
    }
    const handlePriceChange = (min, max) => {
        setFilterFns({ ...filterFns, range: FILTERS.range(min, max, 'price') })
    }

    const debouncedFilter = useCallback(debounce(() => {
        const allProductsCopy = structuredClone(allProducts);
        const filtered = allProductsCopy
            .filter((p) => {
            return Object.values(filterFns).every((fn) => fn(p))
            })
            .sort(sortingFn)
        setFilteredProducts(filtered)
    }, 500), [filterFns, sortingFn])

    useEffect(() => {
        debouncedFilter()
    }, [filterFns, sortingFn, debouncedFilter])

    return (
        <div className="container">
            <Search handleSearchValue={handleSearchValue}/>
            <SortButtons sortingFn={sortingFn} setSortingFn={setSortingFn}/>
            <Multiselect options={COLORS} title = 'По цвету' onSelect={handleUpdateColorFilter}></Multiselect>
            <Price  handlePriceChange={handlePriceChange}/>
            {filteredProducts.length ? <Products cardsToDisplay={filteredProducts}/> : <div>По вашему запросу ничего не найдено</div>}
            <Amount amount={filteredProducts.length}/>
        </div>
    )
}

export default App;
