import Header from './components/Header'

function App() {
  const name = 'Pao'
  const x = true
  return (
    <div className="App">
      <h1>Hello Gab! From React</h1>
      <h2>Hellooo {name}</h2>
      <h2>Is this true?.... {x ? 'Yes' : 'No'}</h2>
      <Header />
    </div>
  );
}

export default App;
