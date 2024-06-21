import { Star } from "./Star";
import { StarsProps } from "./interface";

export const Stars: React.FC<StarsProps> = ({ count }) => {
  if (count < 1 || count > 5) {
    return false;
  }

  const starArray = Array.from({ length: count }, (_, ind) => (
    <li key={ind}>
      <Star />
    </li>
  ));

  return (
    <>
      <ul className="card-body-stars u-clearfix">{starArray}</ul>
    </>
  );
};
