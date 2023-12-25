import Breadcrumb from 'react-bootstrap/Breadcrumb';
import styles from './BreadcrumbComponent.module.css'

function BreadcrumbComponent() {
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <Breadcrumb.Item className={styles.breadcrumbItem} href="#" >Home</Breadcrumb.Item>
      <Breadcrumb.Item className={styles.breadcrumbItem} href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item className={styles.breadcrumbItem}  active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;