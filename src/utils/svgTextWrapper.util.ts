export const getTextWidth = (text: string, font = '400 1rem sans-serif') => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return canvas.width;
  context.font = font;
  return context.measureText(text).width;
};

export const breakString = (
  word: string,
  maxWidth: number,
  hyphenCharacter = '-'
) => {
  const characters = word.split('');
  const lines: string[] = [];
  let currentLine = '';

  characters.forEach((character, index) => {
    const nextLine = `${currentLine}${character}`;
    const lineWidth = getTextWidth(nextLine);

    if (lineWidth >= maxWidth) {
      const currentCharacter = index + 1;
      const isLastLine = characters.length === currentCharacter;
      const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
      lines.push(isLastLine ? nextLine : hyphenatedNextLine);
      currentLine = '';
    } else {
      currentLine = nextLine;
    }
  });

  return { hyphenatedStrings: lines, remainingWord: currentLine };
};

export const wrapLabel = (
  label: string,
  maxWidth: number,
  truncate = false
) => {
  const words = label.split(' ');
  const completedLines: string[] = [];
  let nextLine = '';

  words.forEach((word, index) => {
    const wordLength = getTextWidth(`${word} `);
    const nextLineLength = getTextWidth(nextLine);

    if (wordLength > maxWidth) {
      if (truncate) {
        const { hyphenatedStrings } = breakString(word, maxWidth, '...');
        completedLines.push(nextLine, hyphenatedStrings[0]);
        return completedLines;
      }

      const { hyphenatedStrings, remainingWord } = breakString(word, maxWidth);
      completedLines.push(nextLine, ...hyphenatedStrings);
      nextLine = remainingWord;
    } else if (nextLineLength + wordLength >= maxWidth) {
      completedLines.push(nextLine);
      nextLine = word;
    } else {
      nextLine = [nextLine, word].filter(Boolean).join(' ');
    }

    const currentWord = index + 1;
    const isLastWord = currentWord === words.length;

    if (isLastWord) {
      completedLines.push(nextLine);
    }
  });

  return completedLines.filter((line) => line !== '');
};
