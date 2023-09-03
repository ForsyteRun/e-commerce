import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import RttRoundedIcon from '@mui/icons-material/RttRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import HeightRoundedIcon from '@mui/icons-material/HeightRounded';
import { useAppSelector } from 'hooks/useRedux';
import { SortBy } from 'types';
import { getCategoryIdByParams } from 'pages/CategoryPage/helpers/getCategoryParams';
import { sortHandler } from './helpers';

const SortButton = ({ by }: { by: SortBy }) => {
  const sort = useAppSelector((state) => state.sortSlice);
  const params = useParams();
  const [categoryId, setCategoryId] = useState<string | undefined>('');

  useEffect(() => {
    setCategoryId(getCategoryIdByParams(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Button
      onClick={() => sortHandler(categoryId, by)}
      sx={{
        fontSize: '0.75rem',
        height: '2rem',
        padding: '5px 10px',
        textTransform: 'capitalize',
      }}
      variant={sort[by] ? 'contained' : 'outlined'}
    >
      {by === 'price' && <EuroRoundedIcon sx={{ fontSize: '1rem' }} />}
      {by === 'name' && <RttRoundedIcon sx={{ fontSize: '1rem' }} />}
      {sort[by] === 'desc' && <ArrowDropDownRoundedIcon />}
      {sort[by] === 'asc' && <ArrowDropUpRoundedIcon />}
      {!sort[by] && <HeightRoundedIcon fontSize="small" />}
    </Button>
  );
};

export default SortButton;
