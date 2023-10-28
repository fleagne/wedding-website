import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Button, ButtonProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IBackButtonProps extends ButtonProps {
  text?: string;
}

export const BackButton = (props: IBackButtonProps): JSX.Element => {
  const { text = '戻る', onClick } = props;
  const navigate = useNavigate();

  return (
    <Button variant="text" startIcon={<NavigateBeforeIcon />} onClick={onClick ? onClick : () => navigate('/')}>
      {text}
    </Button>
  );
};
