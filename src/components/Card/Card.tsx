import * as styles from "./Card.style";

type CardProps = {
  value: number;
};

const Card = ({ value }: CardProps) => {
  return (
    <styles.CardContainer>
      <span>{value}</span>
    </styles.CardContainer>
  );
};

export default Card;
