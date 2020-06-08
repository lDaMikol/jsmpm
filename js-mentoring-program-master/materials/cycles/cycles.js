let num = 50;

/**
 * While
 */
while (num < 55) {
  console.log(num);
  num++;
}

/**
 * Do..while
 */
do {
  console.log(num);
  num++; 
} 
while (num < 45);

/**
 * for loop
 */
for (let i = 0; i < 8; i++) {
  console.log(i);
}

/**
 * Breaking the FOR loop
 */
for (let i = 0; i < 8; i++) {
  if (i == 6) {
      break;
  }     
  console.log(i); 
}

/**
 * Continue FOR loop
 */
for (let i = 0; i < 8; i++) {
  if (i == 6) {
      continue;
  }     
  console.log(i); 
}