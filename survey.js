const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? Nicknames are also acceptable: ", (name) => {
  rl.question("What is an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that: ", (music) => {
      rl.question("Which meal is your favorite? ", (meal) => {
        rl.question("What your favourite thing to eat for that meal:  ", (food) => {
          rl.question("Which sport is your absolute favourite?  ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!  ", (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any sport, and is amazing at ${superpower}!`);
              
          
              rl.close();
            });
          });
        });
      });
    });
  });
});
