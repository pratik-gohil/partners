import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import styles from "../../styles/Static.module.scss";


export default function EmarginTermsAndConditions() {
  return (
    <>
      <Breadcrumb />
      <section className={`${styles.staticSec}`}>
        <div className={`${styles.maContainer}`}>
          <h2 className={`${styles.secTitle}`}>Our Policies</h2>
        </div>        
      </section>
    </>
  );
}
