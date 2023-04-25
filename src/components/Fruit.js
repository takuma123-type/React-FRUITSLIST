const FRUITS = [
  {
      title: "Orange",
      calorie: "46 kcal / 100g",
      macro: "P11.8GF0.1G 0.9g",
  },
  {
      title: "Apple",
      calorie: "57kcal / 100g",
      macro: "P 15.5gF 0.2g C 0.1g",
  },
  {
      title: "Kiwi fruit",
      calorie: "53kcal / 100g",
      macro: "P 13.5g F 0.1g C 1.0g",
  },
  {
      title: "Peach",
      calorie: "40kcal 100g",
      macro: "P 13.5g F 0.1g C 1.0g",
  }
]


export function Fruit() {
  return (
      <>
      {FRUITS.map((fruit) => {
          return (
              <div key={fruit.title}>
                <h3>{fruit.title}</h3>
                <h4>{fruit.calorie}</h4>
                <h4>{fruit.macro}</h4>
              </div>
          );
      })}
      </>
  );
  console.log(FRUITS);
}