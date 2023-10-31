import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <Col className={styles.container}>
      <p className={styles.footerHeadings}>Telegramonic.com © 2023</p>
      <Row className={styles.mainpageFooter}>
        <Col className={styles.box}>
          <p className={styles.disclaimerText}>
            This website is not affiliated with Telegram. Visual content shown
            here might be copyrighted by rightful owners. No infringement
            intended.
          </p>
          <Row className={styles.social}>
          
              <FontAwesomeIcon icon={['fab', 'apple']} />
            </Row>
        </Col>
        <Col className={styles.box}>
          <Row className={styles.others}>
            <header className={styles.header}>Reach us</header>
          </Row>
          <Row className={styles.item}>
            <a className={styles.links} href="/privacy">
              Advertise
            </a>
          </Row>
          <Row className={styles.item}>
            <a className={styles.links} href="/terms">
              Submit your media
            </a>
          </Row>
          <Row className={styles.item}>
            <a className={styles.links} href="/contact">
              Contact Us
            </a>
          </Row>
          <Row className={styles.item}>
            <a className={styles.links} href="/contact">
              Feature media
            </a>
          </Row>
        </Col>
        <Col className={styles.box}>
          <Row className={styles.others}>
            <header className={styles.header}>Others</header>
          </Row>
          <Row className={styles.item}>
            <a className={styles.links} href="/privacy">
              Privacy Policy
            </a>
          </Row>
          <Row className={styles.item}>
            <a className={styles.links} href="/terms">
              Terms of Service
            </a>
          </Row>
          <Row className={styles.item}>
            <a className={styles.links} href="/contact">
              About Us
            </a>
          </Row>
        </Col>
      </Row>
      <Row className={styles.text}>
        <p className={styles.disclaimerText}>
          Disclaimer: All channels, groups, stickers and bots posted on website
          are public, none of them are owned by us. We are not responsible for
          the content on their media, join at your own risk. If you have any
          issue, please contact us from{" "}
          <a className={styles.links} href="/contact">
            Contact Us
          </a>{" "}
          page.
        </p>
      </Row>
    </Col>
  );
}

export default Footer;
