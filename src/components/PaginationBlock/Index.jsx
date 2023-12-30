import React from 'react'
import ReactPaginate from 'react-paginate';

import styles from '../PaginationBlock/Pagination.module.scss'
import { selectFilter, setCurrentPage } from '../../redux/features/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
function Pagination() {

    const { currentPage } = useSelector(selectFilter)
    const dispath = useDispatch();
    const onChangePage = (number) => {
        dispath(setCurrentPage(number))


    }

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currentPage - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
}

export default Pagination