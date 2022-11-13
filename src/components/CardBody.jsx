import Btn from './Btn';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CardBody = () => {
  return (
    <div className="w-full h-full p-6 lg:p-8 flex flex-col justify-between">
      <div>
        <p className="tracking-[0.5rem] text-darkGrayishBlue-500 text-sm">
          PERFUME
        </p>
        <h1 className="text-4xl text-veryDarkBlue-500 my-4">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-darkGrayishBlue-500">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>

      {/* prices */}
      <div className="flex items-center my-4">
        <h2 className="text-4xl text-darkCyan-500">$149.99</h2>
        <p className="ml-4 line-through text-darkGrayishBlue-500">$169.99</p>
      </div>

      <Btn leftDecor={<AiOutlineShoppingCart scale={35} />}>Add to Cart</Btn>
    </div>
  );
};
export default CardBody;
