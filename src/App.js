import logo from './logo.svg';
import './App.css';

/* コンポーネント */
import Tab from './components/Tab';

function App() {
  return (
    <div className="container is-fluid">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>チーム２</h1>
        <h2 style={{color: "lightblue"}}>メンバー紹介アプリ</h2>
      </header>
      <Tab />
    </div>
  );
}

export default App;
