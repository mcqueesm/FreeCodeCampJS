function rot13(str) { 
  //Decodes messages using rot13 cipher.
  

  //Function that converts number to its mod 26 equivalent.
  let mod26 = ( n => ((n%26)+26)%26);

  //This variable will hold decoded string.
  let decoded = '';

  //This reg. expression will catch all non-capital letters.
  let regex = /[^A-Z]/;

  //Iterate through str.
  for (let i = 0; i < str.length; i++){
    
    //If not a capital letter, add to 'decoded' as is.
    if (regex.test(str.charAt(i))){
        decoded += str.charAt(i);
    }

    //Otherwise convert to ASCII number 13 less (using modular arithmetic) and add to 'decoded'. 
    else {
        let newCode = mod26((str.charCodeAt(i) - 65) - 13)+65;
        decoded += String.fromCharCode(newCode);
    }
  }

  //Return decoded message
  return decoded;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
