import { ExpandMore, KeyboardArrowRight } from '@mui/icons-material';

const ExpandArrow = ({ isSelected }: { isSelected: boolean }) =>
  isSelected ? <ExpandMore /> : <KeyboardArrowRight />;

export default ExpandArrow;
