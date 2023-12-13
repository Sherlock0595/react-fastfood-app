import React from 'react'
import ReactPaginate from 'react-paginate';

import styles from '../PaginationBlock/Pagination.module.scss'
import { setCurrentPage } from '../../redux/features/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
function Pagination() {

    const currentPage = useSelector((state) => state.filter.currentPage)
    const dispath = useDispatch();
    const some = (e) => {
        currentPage.e.selected
    }
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