import styles from './layout.module.css'

export default ({children}) => {
    return (
        <div styles={styles.container}>
            {children}
        </div>
    )
}