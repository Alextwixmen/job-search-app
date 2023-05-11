import styles from './vacancyDescription.module.css';
function createMarkup(htmlText) {
  return { __html: htmlText };
}

export const VacancyDescription = (props) => {
  const text = props.vacancyInfo.vacancyRichText;
  return (
    <div
      className={styles.vacancyDescriptionContainer}
      dangerouslySetInnerHTML={createMarkup(text)}
    ></div>
  );
};
