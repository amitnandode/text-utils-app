import "./App.css";

let name = "Amit";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <h1>Hello {name}</h1>
      <div className="container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla libero
        est dignissimos ad accusamus reprehenderit omnis alias quaerat eligendi
        fugit similique quos vitae natus mollitia earum repudiandae, saepe et
        quod? Impedit magnam tempora qui!
      </div>
    </>
  );
}

export default App;
