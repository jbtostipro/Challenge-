const characters: string = 'abcdefghijklmnopqrstuvwxyz';
const symbols: string = '!@#$%^&*()_+';

// Generates a list of 10 passwords
export const init = (element: HTMLElement) => {
  const passwords: string[] = []; // TODO 4 : Declare a passwords array

  // TODO 5 : Declare a numberOfPasswords variable and set it to 10
  const numberOfPasswords: number = 10;

  // TODO 6 : Create a loop that generates 10 passwords
  for (let i = 0; i < numberOfPasswords; i++) {
    // TODO 7 : Generate a password
    // Use a random length between 10 and 50
    // Use a random boolean for each of the 3 options
    const passwordLength = getRandomInt(10, 50);
    const includeNumbers = getRandomBoolean();
    const includeSymbols = getRandomBoolean();
    const includeUppercase = getRandomBoolean();

    // TODO 13 : Push the password into the passwords array
    passwords.push(generatePassword(passwordLength, includeNumbers, includeSymbols, includeUppercase));
  }

  // TODO  : Call the showPasswords function
  showPasswords(element, passwords);
};

// TODO 1 : Create a function that returns a random boolean
const getRandomBoolean = (): boolean => {
  return Math.random() < 0.5;
};

// TODO 2 : Create a function that returns a random integer between 0 and max
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * (max + 1));
};

// TODO 3 : Complete the function declaration
// It should take 4 parameters:
// - pwdLength as number
// - includeNumbers as boolean
// - includeSymbols as boolean
// - includeUppercase as boolean
// It should return a string
const generatePassword = (pwdLength: number, includeNumbers: boolean, includeSymbols: boolean, includeUppercase: boolean): string => {
  // TODO 8 : Declare a password variable and set it to an empty string
  let password = '';

  // TODO 9 : Create a loop that generates a password of the desired length
  for (let i = 0; i < pwdLength; i++) {
    // TODO 10 : Generate a random number between 0 and 3 in order to select the type of character
    const type = getRandomInt(3);

    // TODO 11 : Generate a random character based on the type
    // If type is 0 and includeNumbers is true, add a random number to the password
    // If type is 1 and includeSymbols is true, add a random symbol to the password
    // If type is 2 and includeUppercase is true, add a random uppercase character to the password
    // Otherwise, add a random lowercase character to the password
    switch (type) {
      case 0:
        if (includeNumbers) {
          password += getRandomInt(9).toString();
        }
        break;
      case 1:
        if (includeSymbols) {
          password += symbols[getRandomInt(symbols.length - 1)];
        }
        break;
      case 2:
        if (includeUppercase) {
          password += characters[getRandomInt(characters.length - 1)].toUpperCase();
        }
        break;
      default:
        password += characters[getRandomInt(characters.length - 1)];
    }
  }

  // TODO 12 : Return the random password
  return password;
};

// TODO 15 : Create a function that displays the passwords in the DOM
// It should take 2 parameters:
// - container as HTMLElement
// - passwords as string[]
// It should return nothing
// Each password should be displayed in a <li> element
const showPasswords = (container: HTMLElement, passwords: string[]): void => {
  passwords.forEach(password => {
    const listItem = document.createElement('li');
    listItem.textContent = password;
    container.appendChild(listItem);
  });
};
