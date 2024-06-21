import Card from "../Card/Card";
import * as styles from "./MainScreen.style.ts";

const MainScreen = () => {
  const deck = [...new Array(10)].map((_) =>
    Math.floor(Math.random() * 10 + 1)
  );
  console.log(deck);

  return (
    <styles.Screen>
      {deck.map((card) => (
        <Card value={card} />
      ))}
    </styles.Screen>
  );
};

export default MainScreen;
