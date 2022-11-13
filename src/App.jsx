import Btn from './components/Btn';
import Card from './components/Card';
import CardBody from './components/CardBody';
import CardImg from './components/CardImg';

const App = () => {
  return (
    <main className="w-full h-[100vh] flex justify-center items-start lg:items-center">
      <Card>
        <CardImg />
        <CardBody />
      </Card>
    </main>
  );
};

export default App;
