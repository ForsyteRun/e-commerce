import PromoCodeCard from './components/PromoCodeCard';
import promoCodesData from './constants';

const MainPage = () => {
  return (
    <>
      {promoCodesData.map((data) => (
        <PromoCodeCard key={data.code} data={data} />
      ))}
    </>
  );
};

export default MainPage;
