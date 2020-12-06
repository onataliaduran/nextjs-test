import styles from './Hunts.module.css';
import HuntsList from '../../components/HuntsList';

export default function Hunts({ hunts }) {

    const URL = 'https://run.mocky.io/v3/a9260017-a896-4b8d-9247-5037f9e6f5a2';

    return (
        <>
            <h1 className={styles.title}>Hunts List</h1>
            <h2 className={styles.subTitle}>Mock API: { URL }</h2>
            <div className={styles.listContainer}>
                { 
                    hunts.map( hunt => {
                        return  <HuntsList
                            title={hunt.title}
                            client={hunt.client} />
                    }) 
                }
            </div>
        </>
    )
}

Hunts.getInitialProps = () => {
    return fetch('https://run.mocky.io/v3/a9260017-a896-4b8d-9247-5037f9e6f5a2')
      .then(res => res.json())
      .then(response => {
        console.log(response);
        const { hunts } = response;
        return { hunts };
        });
}
