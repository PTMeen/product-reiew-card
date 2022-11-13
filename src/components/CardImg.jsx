import productMobile from '../assets/images/image-product-mobile.jpg';
import productDesktop from '../assets/images/image-product-desktop.jpg';

const CardImg = () => {
  return (
    <div className=" w-full h-[230px] lg:h-[500px] overflow-hidden">
      <picture>
        <source
          className="object-cover h-full w-full"
          media="(max-width:1024px)"
          srcSet={productMobile}
        />
        <source
          className="object-cover h-full w-full"
          media="(min-width:1024px)"
          srcSet={productDesktop}
        />
        <img
          className="object-cover h-full w-full"
          src={productMobile}
          alt="Gabrielle Essence Eau De Parfum"
        />
      </picture>
    </div>
  );
};
export default CardImg;
