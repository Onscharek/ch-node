
       //   create a file named "welcome.txt" containing one line "Hello Node".

const fs = require('fs');

const welcomeText = 'Hello Node';
fs.writeFile('welcome.txt', welcomeText, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`'welcome.txt' file has been saved with the following content: ${welcomeText}`);
  }
});
                    //   reads and console.log data from hello.txt

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Content of 'welcome.txt': ${data}`);
  }
});
