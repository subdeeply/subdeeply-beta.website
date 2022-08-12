import { FunctionComponent } from "react";
import styles from "./css/MergeDesktop1.module.css";

export const MergeDesktop1: FunctionComponent = () => {
  return (
    <div className={styles.mergeDesktop1}>
      <div className={styles.contentDiv}>
        <div className={styles.typeHeader1Div}>
          <div className={styles.headerDiv}>
            <span>Subdeeply</span>
            <span className={styles.multiChainEducationalPlatfo}>
              {" "}
              multi-chain educational platform.
            </span>
          </div>
          <div className={styles.paragraphDiv}>
            Subdeeply platform to know more about crypto in multi-chain
            educational content.
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src="frame-2.svg" />
      </div>
      <div className={styles.contentDiv1}>
        <div className={styles.typeHeader1Div1}>
          <div className={styles.headerDiv1}>
            Our new exciting platform willl be launched soon.
          </div>
          <div className={styles.paragraphDiv1}>
            Subdeeply platform to know more abou crypto and multiple blockchains
          </div>
        </div>
      </div>
      <div className={styles.headerDiv2}>
        <div className={styles.headerDiv3}>
          <div className={styles.mainLogoDiv}>
            <div className={styles.subdeeplyDiv}>Subdeeply</div>
            <img className={styles.logoIcon} alt="" src="logo.svg" />
          </div>
          <div className={styles.linksDiv}>
            <div className={styles.featuresDiv}>Features</div>
            <div className={styles.featuresDiv}>About</div>
            <div className={styles.featuresDiv}>Contact</div>
            <div className={styles.buttomDiv}>
              <div className={styles.featuresDiv}>Get the app</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerDiv4}>
        <div className={styles.typeHeader1Div2}>
          <div className={styles.headerDiv1}>
            <span>{`Get started `}</span>
            <span className={styles.todaySpan}>today</span>
          </div>
          <div
            className={styles.paragraphDiv2}
          >{`Enter your email and get weekly updates sent to your imbox! `}</div>
        </div>
        <div className={styles.buttomDiv1}>
          <div className={styles.featuresDiv}>Subscribe</div>
        </div>
        <div className={styles.subdeeplyDiv1}>{`© 2022 Subdeeply. `}</div>
      </div>
    </div>
  );
};
