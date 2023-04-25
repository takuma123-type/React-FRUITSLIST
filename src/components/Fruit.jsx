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
          <div class="px-4 py-4 shadow-lg shadow-gray-300 rounded-2x">
            <img class="w-full" src="/public/no-image.svg" alt="Sunset in the mountains" />
              <div class="mt-3">{fruit.title}</div>
              <p class="my-4">
              {fruit.calorie}
              </p>
              <p class="my-4">
              {fruit.macro}
              </p>
          </div>
        </div>
      );
    })}
    </>
  );
}