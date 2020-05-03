import React from 'react';
import './Icon.css';

function Icon({ className }: { className: string; lat: number; lng: number }) {
  return <div className={'Icon Icon--' + className} />;
}

export default Icon;
