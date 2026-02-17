import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gridOverlay}></div>
      
      <img 
        src="/image/backgroud_images/image_background_official_1.png" 
        alt="" 
        className={styles.bgImageFullscreen}
      />
      
      <div className={styles.wireframeBg}></div>
      
      <div className={`${styles.floatingElement} ${styles.hex1}`}></div>
      <div className={`${styles.floatingElement} ${styles.hex2}`}></div>
      <div className={`${styles.floatingElement} ${styles.square1}`}></div>
      <div className={`${styles.floatingElement} ${styles.square2}`}></div>
      <div className={`${styles.floatingElement} ${styles.circle1}`}></div>
      
      <div className={`${styles.star} ${styles.star1}`}></div>
      <div className={`${styles.star} ${styles.star2}`}></div>
      <div className={`${styles.star} ${styles.star3}`}></div>
      <div className={`${styles.star} ${styles.star4}`}></div>
      <div className={`${styles.star} ${styles.star5}`}></div>
      
      <div className={`${styles.shard} ${styles.shard1}`}></div>
      <div className={`${styles.shard} ${styles.shard2}`}></div>
      <div className={`${styles.shard} ${styles.shard3}`}></div>
      <div className={`${styles.shard} ${styles.shard4}`}></div>
      <div className={`${styles.shard} ${styles.shard5}`}></div>
      <div className={`${styles.shard} ${styles.shard6}`}></div>
      <div className={`${styles.shard} ${styles.shard7}`}></div>
      <div className={`${styles.shard} ${styles.shard8}`}></div>
      <div className={`${styles.shard} ${styles.shard9}`}></div>
      <div className={`${styles.shard} ${styles.shard10}`}></div>
      <div className={`${styles.shard} ${styles.shard11}`}></div>
      <div className={`${styles.shard} ${styles.shard12}`}></div>
      
      <div className={`${styles.icon} ${styles.icon1}`}>❄</div>
      <div className={`${styles.icon} ${styles.icon2}`}>✦</div>
      <div className={`${styles.icon} ${styles.icon3}`}>❄</div>
      <div className={`${styles.icon} ${styles.icon4}`}>◆</div>
      <div className={`${styles.icon} ${styles.icon5}`}>✦</div>
      <div className={`${styles.icon} ${styles.icon6}`}>❄</div>
      <div className={`${styles.icon} ${styles.icon7}`}>✕</div>
      <div className={`${styles.icon} ${styles.icon8}`}>◆</div>
      <div className={`${styles.icon} ${styles.icon9}`}>✦</div>
      <div className={`${styles.icon} ${styles.icon10}`}>❄</div>
      
      <div className={`${styles.bar} ${styles.bar1}`}></div>
      <div className={`${styles.bar} ${styles.bar2}`}></div>
      <div className={`${styles.bar} ${styles.bar3}`}></div>
      <div className={`${styles.bar} ${styles.bar4}`}></div>
      <div className={`${styles.bar} ${styles.bar5}`}></div>
      
      <div className={`${styles.dataCard} ${styles.dataCard1}`}>
        <div className={styles.dataCardTitle}>SYSTEM STATUS</div>
        <div className={styles.dataCardContent}>
          [ONLINE]<br/>
          CONNECTIONS: 247<br/>
          LATENCY: 12ms<br/>
          STATUS: ACTIVE
        </div>
      </div>
      
      <div className={`${styles.dataCard} ${styles.dataCard2}`}>
        <div className={styles.dataCardTitle}>WORLD WIDE</div>
        <div className={styles.dataCardContent}>
          ALL RIGHTS RESERVED<br/>
          2026 KURDANT.FR<br/>
          VERSION 1.0.0
        </div>
      </div>
      
      <div className={styles.barcode}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.barcodeLine}></div>
        ))}
      </div>
      
      <h1 className={styles.titleMain}>KURDANT DEV</h1>
      <p className={styles.subtitle}>je dev tout</p>
    </section>
  )
}

export default Hero
