import { styled } from '@mui/material';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #CE936F 0%, #B03D2E 100%)',
});

export const AllergyButton = (): JSX.Element => {
  const onClick = (): void => {
    window.open('https://www.tg-wn.com/guest/allergy-entry/AT0000543256-$2y$10$fWzNpnLqclIDRYrZgKkXlf0I6rSXJT8qohqN1iAsHG0ffyVFMG', '_blank');
  };

  return (
    <StyledButton variant="contained" size="large" onClick={onClick}>
      <div>
        アレルギー情報の登録
        <div style={{ fontSize: '10px' }}>※ 外部サイトへ遷移します</div>
      </div>
    </StyledButton>
  );
};
