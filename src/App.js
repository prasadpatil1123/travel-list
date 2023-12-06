export default function App() {
  return
(  <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Status />
  </div>);
}
function Logo() {
  return <h1> Far Away</h1>;
}
function Form() {
  return <div className="add-form">what do you need for your trip?</div>;
}
function PackingList() {
  return <div className="list">List</div>;
}
function Status() {
  return
  <div>
    <em>You have X items on your list , and you already pack X (X%)</em>
  </div>
}
