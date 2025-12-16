import { ItemSummary } from "./itemSummary";

const ITEM_ARRAY: Item[] = [
  { id: "ABCD1", name: "Normal Axe", quantity: 1, description: "Normal Melee hand axe.", itemType: "Basic Melee"},
  {id: "ABCD2", name: "Long Sword", quantity: 2, description: "Normal Melee longsword.", itemType: "Basic Melee"}
];


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <section>
        <h1 className="font-sans font-bold text-2xl">Loot Bag</h1>
        <p>The shared loot of the party that has not been named yet.....</p>
      </section>
      <hr/>
      <section className="w-lvw">
        {ITEM_ARRAY.map((item: Item) => <ItemSummary key={item.id} id={item.id} name={item.name} description={item.description} quantity={item.quantity} itemType={item.itemType} />)}
      </section>
    </main>
  );
}
