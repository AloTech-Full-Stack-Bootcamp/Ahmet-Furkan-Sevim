import styles from './CreateQuestion.module.css';

function CreateQuestion() {
  return (
    <>
      <div className={styles.question}>
        <a href="#" className={styles.green_color}>
          Soru Oluştur
        </a>
      </div>
    </>
  );
}

export default CreateQuestion;
