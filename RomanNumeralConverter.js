function convertToRoman(num) {
  
  //Isolate ones, ..., thousands place into array, then assign to variables.
  let numArr = num.toString().split('').reverse();
  let ones = numArr[0];
  let tens = numArr[1];
  let hundreds = numArr[2];
  let thousands = numArr[3];
  
  //Create empty string for roman numeral.
  let romNum = "";

  //Add 'M' for number of digids in thousands place.
  romNum += 'M'.repeat(thousands);
 
  /*The letter adding pattern for 1,...,9; 10,...,90; and 100,...,900
  is the same.  This function adds that pattern for each of the digit
  places, substituting the proper roman letters.*/

  let template = (num, i, v, x) => {
    if(num >= 1 && num <= 3) {romNum += i.repeat(num)};
    if(num == 4) {romNum += (i + v)};
    if(num >= 5 && num <= 8) {romNum += (v + i.repeat(num - 5))};
    if(num == 9) {romNum += (i + x)};
  }
  template(hundreds, 'C', 'D', 'M');
  template(tens, 'X', 'L', 'C');
  template(ones, 'I', 'V', 'X');
  

 return romNum;
}

convertToRoman(3374);