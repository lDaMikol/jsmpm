const options = {
  width: 1024,
  height: 1024,
  name: "test",
  font: {
      size: '16px',
      color: 'red'
  },
  options: ['red', 'blue'],
  isChecked: true
};

/**
 * JSON.stringify method
 */
const stringifiedJson = JSON.stringify(options);
console.log(stringifiedJson);

/**
 * JSON.parse method
 */
const parsed = JSON.parse(stringifiedJson);
console.log(parsed.name);