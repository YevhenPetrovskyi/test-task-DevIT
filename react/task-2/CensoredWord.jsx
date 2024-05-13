import { useState } from 'react';

const CensoredWord = ({ children }) => {
  const [censored, setCensored] = useState(true);

  const toggleCensored = () => {
    setCensored(prevState => !prevState);
  };

  return (
    <span onClick={toggleCensored}>
      {censored ? `${'*'.repeat(children.length)} ` : `${children} `}
    </span>
  );
};

export default CensoredWord;
