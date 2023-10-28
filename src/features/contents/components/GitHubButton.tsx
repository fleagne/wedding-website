import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #2B3137 0%, #24292E 100%)',
  textTransform: 'none',
});

export const GitHubButton = (): JSX.Element => {
  const onClick = () => {
    window.open('https://github.com/fleagne/wedding-website', '_blank');
  };

  return (
    <StyledButton variant="contained" size="large" startIcon={<GitHubIcon />} onClick={onClick}>
      GitHub
    </StyledButton>
  );
};
