import React from 'react';
import Button from '@material-ui/core/Button';
import './IntroScreen.css';

function IntroScreen({
  step,
  onChangeStep,
}: {
  step: number;
  onChangeStep: Function;
}) {
  console.log('step', step);
  const getStepText = () => {
    let text =
      'Welcome to this interactive map site. This map will show you all the most intresting places in Akranes and some beautiful and intresting paths to walk or run on. This will guide you through how to use the map';
    if (step === 1) {
      text =
        'You can use the plus button to change the selected path. Currently it showing some of the most intresting places in Akrranes.';
    }
    if (step === 2) {
      text =
        'If you need information about the selected path, you can click the information icon';
    }
    if (step === 3) {
      text =
        'Once a path is selected it is highlighted on the map. You can then see places close to that path. By clicking on the icon you can see some information about the place.';
    }
    console.log('text', text);
    return text;
  };
  return (
    <div className="IntroScreen">
      <div className="IntroScreen__content">
        <div>{getStepText()}</div>
        <Button onClick={() => onChangeStep()} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default IntroScreen;
