import Styles from "./Single.module.css";

const SingleCard = ({
  id,
  card,
  src,
  cover,
  handleChoice,
  flipped,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div key={id} className={Styles.card}>
      <div className={flipped ? Styles.flipped : ""}>
        <img className={Styles.front} src={src} alt="Card-front" />
        <img
          className={Styles.back}
          onClick={handleClick}
          src={cover}
          alt="card-back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
