import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ButtonProps, styled } from '@mui/material';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #DBC691 0%, #C0A050 100%)',
});

export const PersonAddButton = (props: ButtonProps): JSX.Element => {
  const { onClick } = props;

  return (
    <StyledButton variant="contained" size="large" startIcon={<PersonAddIcon />} onClick={onClick}>
      お連れ様を追加
    </StyledButton>
  );
};
