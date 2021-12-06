import Header from "./component/Header";
import MainPanel from "./component/MainPanel";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <aside id="navigation-panel">

        </aside>
        <MainPanel />
        <aside id="detail-panel">

        </aside>

      </main>
    </div>
  );
}

export default App;
