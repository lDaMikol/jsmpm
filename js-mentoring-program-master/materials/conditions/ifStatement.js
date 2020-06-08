if (2 * 4 == 8) {
      console.log('That is right!');
  } else {
      console.log('Wrong!');
}

const num = 50;

if (num < 49) {
  console.log('Wrong!');
} else if (num > 100) {
    console.log('Too much!');
} else {
    console.log('That is right!');
}

/**
 * Ternary operator
 */
(num == 50) ? console.log('That is right!') : console.log('Wrong!');

/**
 * switch / case
 */
switch (num) {
  case num < 49:
    console.log('Wrong!');
    break;
  case num > 100:
    console.log('Too much!');
    break;
  case 50:
    console.log('That is right!');
    break;
  default:
    console.log('Default behaviour');
    break;
}

const os = require("os");
const WIN = "win32";
const LINUX = "linux";

if (os.platform() === WIN) {
  console.log("script.bat");
} else if (os.platform() === LINUX) {
  console.log("script.sh");
} else {
  console.log("no appropriate script");
}
