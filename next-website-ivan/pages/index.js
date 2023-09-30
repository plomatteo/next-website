import styles from'../styles/Homepage.module.scss'
import Image from 'next/image';
import Head from 'next/head';


function Homepage() {
  return <>
  <Head>
    <title key="pagetitle">Mood by Ivan Regolin</title>
    <meta name="description" content="Mood By Ivan Regolin - Fotografo e videomaker in Friuli Venezia Giulia" key="metadescriprion"/>
  </Head>
  <main>
    <div className={styles.homepageContainer}>
    <div className={styles.heroSection}>
    <div className={styles.heroSection__overlay}>
        <div className={styles.heroSection__overlay__claim}>
        Fotografo e videomaker in Friuli Venezia Giulia
        </div>
    </div>
      <video muted autoPlay loop>
      <source src="/video/videoHeader.mp4" type="video/mp4" />
      <source src="/video/videoHeader.ogg" type="video/ogg" />
      Your browser does not support the video tag.
      </video>
      </div>
    </div>
    <div className={styles.aboutMe}>
      <div className={styles.aboutMe__leftColumn}>
      <div className={styles.aboutMe__leftColumn__header}>
        <h1>IVAN REGOLIN</h1>
        <h1>Fotografo e videomaker</h1>
      </div>
      <div>
        <p>more text here pleade dai su</p>
      </div>
      </div>
      <div>
        <Image
        src='/images/logo.png'
        alt="Website logo" 
        fill
        style={{objectFit:"contain"}}></Image>
      </div>
    </div>
    <div className={`${styles.videoRow} ${styles.turistico}`}>
      <div className={styles.videoRow__videoColumn}>
      <video className={styles.videoPlayer} controls>
      <source src="/video/videoMarketing.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      {/* <div id='playerMarketing' className={`${styles.player}`}>
      <img id='mute' width="20px" src="/images/play-solid.svg" alt="" />
      <img id='unmute' width="20px" src="/images/play-solid.svg" alt="" />
      <img id='play' width="20px" src="/images/play-solid.svg" alt="" />
      <img id='pause' width="20px" src="/images/play-solid.svg" alt="" />
      <img id='fullscreen' width="20px" src="/images/play-solid.svg" alt="" />
            </div> */}
      </div>
      <div className={styles.videoRow__descriptionColumn}>
      <div className={styles.videoRow__descriptionColumn__header}>
        <h1>VIDEO MARKETING TURISTICO</h1>
        <p>Racconto il territorio attraverso immagini, suoni, luci e colori in movimento.</p>
      </div>
      </div>
    </div>
    <div className={`${styles.videoRow} ${styles.weddings}`}>
      <div className={styles.videoRow__descriptionColumn}>
      <div className={styles.videoRow__descriptionColumn__header}>
        <h1>FOTO E VIDEO MATRIMONI</h1>
        <p>Fotografo e videomaker</p>
      </div>
      </div>
      <div className={styles.videoRow__videoColumn}>
      <video>
      <source src="/video/weddings.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      </div>
    </div>
    <div className={`${styles.videoRow} ${styles.aziendale}`}>
      <div className={styles.videoRow__videoColumn}>
      <video controls>
      <source src="/video/videoAziendale.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      </div>
      <div className={styles.videoRow__descriptionColumn}>
      <div className={styles.videoRow__descriptionColumn__header}>
        <h1>VIDEO AZIENDALE</h1>
        <p>Fotografo e videomaker</p>
      </div>
      </div>
    </div>
  </main>
 
  </>
}

export default Homepage;