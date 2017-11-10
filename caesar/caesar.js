var caesar = function(input, number) {
  let output = '';
  let shift = number % 26;
  let ignore = [',', '!', ' '];
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let newCharCode;
    if (ignore.includes(char)) {
      output += char;
    } else {
      if (char.toLowerCase() === char) {
        newCharCode = mod((char.charCodeAt(0) - 96 + shift), 26) + 96;
      } else {
        newCharCode = mod((char.charCodeAt(0) - 64 + shift), 26) + 64; 
      }
      output += String.fromCharCode(newCharCode);
    }
  }
  return output;
}

function mod(n, m) {
        return ((n % m) + m) % m;
}

module.exports = caesar
