import { Fruit } from './Fruit.jsx';

export function FruitBlock() {
  return (
    <div class="grid grid-cols-3 gap-3 mt-10">
      <Fruit />
    </div>
  )
}