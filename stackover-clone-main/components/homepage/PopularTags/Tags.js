import styles from './PopularTags.module.css';

function PopularTags({ name }) {
  return (
    <>
      <a href="#" className={styles.tag}>
        {name}
      </a>
    </>
  );
}

export default PopularTags;
