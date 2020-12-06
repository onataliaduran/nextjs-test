import styles from './HuntsList.module.css';


const HuntsList = ({ title, client }) => {
    return (
        <div className={styles.card}>
            <h2>{ title }</h2>
            <p><strong>Company:</strong> { client }</p>
        </div>   
    )
}

export default HuntsList;