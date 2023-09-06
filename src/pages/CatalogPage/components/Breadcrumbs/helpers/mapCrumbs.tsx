import { Typography } from '@mui/material';
import SingleCrumb from '../components/SingleCrumb';
import { ISlugParam } from '../types';

const mapCrumbs = (params: ISlugParam[]): JSX.Element[] => {
  return params.map(({ name, to }, index, arr) => {
    if (index === arr.length - 1) {
      return (
        <Typography key={name} sx={{ fontSize: '14px' }}>
          {name}
        </Typography>
      );
    }
    return <SingleCrumb key={name} name={name} to={to} />;
  });
};

export default mapCrumbs;
