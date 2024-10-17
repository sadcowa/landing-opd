import './App.css';
function Header(){
  return(
    <header className="App-header">
      <div className="button-container">
        <button className="btn">О курсе</button>
        <button className="btn">Наши проекты</button>
        <button className="btn">Наставники</button>
        <button className="btn feedback-btn">Обратная связь</button>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
