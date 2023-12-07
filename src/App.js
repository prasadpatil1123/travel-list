import React, { useState } from "react";

const initialitems = [
  {
    id: 1,
    description: "Passports",
    quabtity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quabtity: 6,
    packed: true,
  },
  {
    id: 3,
    description: "Charger",
    quabtity: 5,
    packed: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1> 🧑‍✈️ Basic need 🌄🧳 </h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quabtity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quabtity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 😍 trip ?</h3>
      <select
        value={quabtity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ lenght: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Ttem... "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <li>
        {initialitems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </li>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity}
        {item.description}
      </span>
      <button>x</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list , and you already pack X (X%)</em>
    </footer>
  );
}
