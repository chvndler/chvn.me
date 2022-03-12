import Head from '@components/head';
import Header from '@components/header';
import Footer from '@components/footer';
import styles from './page.module.css';

const Page = ({
  background = true,
  header = true,
  footer = true,
  title,
  content,
  description,
  image,
  showHeaderTitle = true,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <Head title={`${title ? `${title} - ` : ''}chvn®`} description={description} image={image} />

      {header && <Header title={showHeaderTitle && title} />}

      <main className={styles.main}>
        <div className={styles.titlewrapper}>
          {title && <div className={styles.content}>{title}</div>}
          {description && <div className={styles.content_description}>{description}</div>}
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
