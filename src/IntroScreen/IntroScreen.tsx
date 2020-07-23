import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import './IntroScreen.css';

function IntroScreen({
  step,
  onChangeStep,
}: {
  step: number;
  onChangeStep: Function;
}) {
  const { t } = useTranslation();
  const getStepText = () => {
    return t(`intoscreen_${step}`);
  };
  return (
    <div className="IntroScreen">
      <div className="IntroScreen__content">
        <div className="IntroScreen__text">{getStepText()}</div>
        <Button
          variant="contained"
          className="IntroScreen__button"
          onClick={() => onChangeStep()}
          color="primary"
        >
          {t('next')}
        </Button>
      </div>
    </div>
  );
}

export default IntroScreen;
