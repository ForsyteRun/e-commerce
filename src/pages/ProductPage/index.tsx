import { HideImage } from '@mui/icons-material';
import { useAppSelector } from 'hooks/useRedux';

const ProductPage = () => {
  const { data } = useAppSelector(
    ({ singleProductDataSlice }) => singleProductDataSlice
  );

  return (
    <>
      <h1>{data?.name}</h1>
      {data?.images ? (
        <img src={data?.images[0]} alt={data?.name} />
      ) : (
        <HideImage
          sx={{
            fontSize: '10rem',
            color: 'rgba(25, 118, 210, 0.5)',
          }}
        />
      )}
    </>
  );
};

export default ProductPage;
