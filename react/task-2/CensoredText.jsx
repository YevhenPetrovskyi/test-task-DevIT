import CensoredWord from './CensoredWord';

const CensoredText = ({ badWords, children }) => {
  const censoredText = (text, badWords) => {
    const words = text.split(' ');

    const censoredWords = words.map((word, i) => {
      if (badWords.includes(word)) {
        return <CensoredWord key={i}>{word}</CensoredWord>;
      }
      return `${word} `;
    });
    return censoredWords;
  };

  return <p>{censoredText(children, badWords)}</p>;
};

export default CensoredText;
