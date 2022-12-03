import styles from './styles.module.scss';

function NameCardV1() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.helloText}>
          Hi, my name is
        </div>
        <div>
          <div className={styles.nameText}>
            Mansi Thakur
          </div>
          <div className={styles.introText}>
            I build things for the web.
          </div>
        </div>
        <div className={styles.positionText}>
          I’m a software engineer specializing in building
          exceptional digital experiences. Currently, I’m focused on building accessible,
          insurance products at <span className={styles.highlightedText}>
            <a href="https://pasarpolis.io/" target="_blank" rel="noreferrer"> 
              pasarpolis
            </a>
          </span>.
        </div>
      </div>
    </div>
  )
}

export default NameCardV1