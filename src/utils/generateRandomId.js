export const getParseFileName = (uri) => {
  const arr = uri.toString().split('\/');
  return arr.at(-1);
}

export const capitalize = word => `${word.charAt(0).toUpperCase()}${word.substring(1)}`;

export const generateId = () => {
  return Math.random().toString(36).substring(2, 10);
};

export const generateRandomId = () => {
  return `0x${Math.random().toString(36).substring(2, 6)}x${Date.now().toString().substring(9)}`;
};

export const assignId = (obj) => {
  return {
    ...obj,
    id: generateRandomId(), 
  };
};
