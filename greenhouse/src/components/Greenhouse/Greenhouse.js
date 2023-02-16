import day from './images/greenhouse-day.jpg';
import night from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const {themeName} = useTheme();

  return (
    <section>
      <img  className='greenhouse-img'
            src={themeName === 'day' ? day : night}
            // src={dayImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;