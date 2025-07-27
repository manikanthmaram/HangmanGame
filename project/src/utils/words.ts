export const WORD_LIST = [
  'JAVASCRIPT',
  'PYTHON',
  'COMPUTER',
  'PROGRAMMING',
  'DEVELOPER',
  'WEBSITE',
  'DATABASE',
  'ALGORITHM',
  'FUNCTION',
  'VARIABLE',
  'INTERNET',
  'SOFTWARE',
  'HARDWARE',
  'KEYBOARD',
  'MONITOR',
  'NETWORK',
  'SECURITY',
  'FRAMEWORK',
  'LIBRARY',
  'COMPONENT',
  'INTERFACE',
  'PROTOCOL',
  'SERVER',
  'CLIENT',
  'BROWSER',
  'TECHNOLOGY',
  'INNOVATION',
  'SOLUTION',
  'PLATFORM',
  'SYSTEM'
];

export const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
  return WORD_LIST[randomIndex];
};