import React from 'react';
import ProviderDataHeart from './ProviderDataHeart';
//components
import HealthCardWrapper from './components/Health';
import WatchDotsInSideWrapper from './components/WatchDotsInSideWrapper';
import WatchDotsWrapper from './components/WatchDotsWrapper';
import WatchDirectionWrapper from './components/WatchDirectionWrapper';
import './WatchBanner.scss';
const WatchBanner = () => {
  return (
    <ProviderDataHeart>
      <div className="banner-watch">
        <div className="container-watch">
          <WatchDirectionWrapper />
          <WatchDotsWrapper />
          <WatchDotsInSideWrapper />
          <HealthCardWrapper />
        </div>
      </div>
    </ProviderDataHeart>
  );
};

export default WatchBanner;
