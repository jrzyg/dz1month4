
import './App.css';

function Header () {
  return <>
    <h2>Header</h2>
    <Title/>
  </>
}

function Content () {
  return <>
    <h2>Content</h2>
    <Title/>
  </>
}
function Footer () {
  return <>
    <h2>Footer</h2>
    <Title/>
    </>
}
function Title () {
  return <h2>Title</h2>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
