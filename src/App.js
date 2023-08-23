import DefinitionsList from './components/DefinitionsList';

function App() {
  const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
  ];

  return (
    <div className='App'>
      <DefinitionsList data={definitions} />
    </div>
  );
}

export default App;
