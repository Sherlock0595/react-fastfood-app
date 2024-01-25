import React from 'react'
import styles from '../NotFoundBlock/NotFound.module.scss'

const NotFoundBlock: React.FC = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>
                    &#x2639;
                </span>
                <br />
                Ничего не найдено
            </h1>
            <span className={styles.description}>К сожалению данная страница отсутствует</span>
        </div>
    )
}

export default NotFoundBlock