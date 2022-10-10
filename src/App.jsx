import Header from './components/header/Header';
import Card from './components/card/Card';
import data from '../data';
import './App.css';

function App() {
  const cardComponents = data.map((cardData) => (
    <Card key={cardData.id} cardData={cardData} />
  ));
  return (
    <>
      <Header />
      <section>{cardComponents}</section>
    </>
  );
}

export default App;
