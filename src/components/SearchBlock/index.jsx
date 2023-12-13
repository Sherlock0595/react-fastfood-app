import React, { useCallback, useRef, useState } from 'react'
import styles from '../SearchBlock/Search.module.scss'
import search from '../../assets/img/search.svg'
import across from '../../assets/img/across.svg'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/features/filterSlice'
import debounce from 'lodash.debounce'

function Search() {
    
    const [localSearch, setLocalSearch] = useState('')
    const dispatch = useDispatch();

    const inputRef = useRef();

    const updateInput = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 1000), []
    )

    const ChangeSearch = (e) => {
        setLocalSearch(e.target.value)
        updateInput(e.target.value)
    
    }

    const DeleteSearh = () => {
        dispatch(setSearchValue(''))
        setLocalSearch('')
        inputRef.current.focus()
    }
    return (
        <div className={styles.inputSearch}>
            <img className={styles.searchIcon}
                src={search}
                alt="search"
            />
            <input
                ref={inputRef}
                onChange={ChangeSearch}
                placeholder='Поиск пиццы...'
                value={localSearch}
            />
            {localSearch && (<img
                onClick={DeleteSearh}
                className={styles.across}
                src={across}
                alt="across"
            />)}
        </div>
    )
}

export default Search