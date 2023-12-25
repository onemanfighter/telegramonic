import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import styles from "./MainPage.module.css"
import PrivacyPage from "../ContentPages/OthersPage/PrivacyPage";


/**
 * Functional component for the main app page.
 * 
 * @returns Ui component for the main page.
 */
function MainPage(){
    return (
        <div className={styles.mainpage}>
        <Navbar />
        <div className={styles.content}>

        <PrivacyPage></PrivacyPage>
        <hr></hr>
        </div>
        <footer className={styles.footer} >
        <Footer />
        </footer>
        </div>
    );
}

export default MainPage;