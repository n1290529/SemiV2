const response = await fetch("./aaa.txt");
const text = await response.text();
export default text;