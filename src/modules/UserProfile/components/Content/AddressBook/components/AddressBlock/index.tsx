/* eslint-disable no-console */
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { IAddressBlock } from '../../types';
import AddressField from '../AddressField';
import DefaultAddress from '../DefaultAddress';

const AddressBlock: React.FC<IAddressBlock> = ({
  title,
  address,
  defaultAddress,
  billing,
  indexModify,
  setIndexModify,
  setBilling,
}) => {
  // const { addresses } = useAppSelector(
  //   (state) => state.userDataSlice.data
  // ) as RegisteredUserData;
  // const [billing, setBilling] = useState(false);

  // console.log(billing, index);

  // modifyAddress(addresses, index, billing);

  const filteredAddress = Object.entries(address).filter(
    ([key]) => key !== 'id'
  );

  const handleModify = () => {
    setIndexModify(indexModify);
    setBilling(!billing);
  };
  return (
    <>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography
          color="#999"
          variant="h6"
          sx={{ mb: '1rem', alignSelf: 'center', fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Typography
          color="#999"
          variant="h6"
          sx={{ mb: '1rem', alignSelf: 'center', fontWeight: 'bold' }}
        >
          billing
        </Typography>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        {filteredAddress.map(([key, value]: [string, string]) => (
          <AddressField key={key} title={key} value={value} />
        ))}
      </Stack>
      {defaultAddress && <DefaultAddress />}
      <Stack flexDirection="row">
        <Button>set as shipping</Button>
        <Button onClick={handleModify}>set as billing</Button>
        <Button>set as default</Button>
      </Stack>
    </>
  );
};

export default AddressBlock;
