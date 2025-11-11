// * функция генерации псевдоуникального идентефикатора
const generateId = () => {
  return Math.random().toString(36).substring(2, 10);
}

console.log('    ', '12345678', 0);
for(let i = 0; i <= 10; i++) {
  console.log('test', generateId(), i);
}

export default generateId;
