type Apple = {
  fresh: boolean;
  size: number;
};

//리팩토링 이전 함수
const rawGetAveragePriceOfApples = (apples: Apple[]) => {
  let totalPrice = 0;
  for (const apple of apples) {
    if (apple.fresh) {
      totalPrice += apple.size * 2;
    } else {
      totalPrice += apple.size * 0.5;
    }
  }
  return totalPrice / apples.length;
};

//리팩토링 이후 함수
const getAveragePriceOfApples = (apples: Apple[]) => {
  const totalPrice = getPriceOfApples(apples);
  return totalPrice / getLengthOfApples(apples);
};

const getPriceOfApples = (apples: Apple[]) => {
  let totalPrice = 0;
  for (const apple of apples) {
    totalPrice += getPriceOfApple(apple);
  }
  return totalPrice;
};

const getPriceOfApple = (apple: Apple) => {
  if (apple.fresh) {
    return apple.size * 2;
  } else {
    return apple.size * 0.5;
  }
};

const getLengthOfApples = (apples: Apple[]) => {
  return apples.length;
};
