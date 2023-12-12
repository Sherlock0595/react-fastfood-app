import React from 'react'
import styles from '../SearchBlock/Search.module.scss'
import search from '../../assets/img/search.svg'
import across from '../../assets/img/across.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../redux/features/filterSlice'


function Search() {
   const searchValue= useSelector((state)=>state.filter.searchValue)
   const dispatch=useDispatch();
    
    const ChangeSearch = (e) => {
        dispatch(setSearchValue(e.target.value))
    }

    const DeleteSearh = () => {
        dispatch(setSearchValue(''))
    }
    return (
        <div className={styles.inputSearch}>
            <img className={styles.searchIcon}
                src={search}
                alt="search"
            />
            <input
                onChange={ChangeSearch}
                placeholder='Поиск пиццы...'
                value={searchValue}
            />
            {searchValue && (<img
                onClick={DeleteSearh}
                className={styles.across}
                src={across}
                alt="across"
            />)}
        </div>
    )
}

export default Search