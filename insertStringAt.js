const stringToInsert = ' Taras';
const inputText = 'Hello! How are you doing?';
const posToInsert = 5;

function insertStrAtPos (str, text, pos) {
  const newStrList = [text.substr(0, pos), str, text.substr(pos)];
  return newStrList.join('');
}

console.log(insertStrAtPos(stringToInsert, inputText, posToInsert));
