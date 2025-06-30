// // Generate a basic insight based on DOB
// const zodiacSign = [
//     "Capricorn","Aquarious","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo"
//     ,"Libra","Scorpio","Sagititarius"
// ];

// //Based on date size 22
//  const compliments = [
//     "You have a great sense of humor!",
//     "Your kindness is truly inspiring.",
//     "You have an amazing ability to make people smile.",
//     "Your positivity is contagious.",
//     "You are incredibly talented!",
//     "You bring out the best in people.",
//     "Your creativity is impressive.",
//     "You light up the room with your presence.",
//     "You have a heart of gold.",
//     "You are a great listener.",
//     "Your determination is admirable.",
//     "You make the world a better place.",
//     "Your confidence is inspiring.",
//     "You are wise beyond your years.",
//     "You are a natural leader.",
//     "Your hard work always pays off.",
//     "You have a beautiful soul.",
//     "You make difficult things look easy.",
//     "You are full of wonderful ideas.",
//     "Your generosity knows no bounds.",
//     "You are a source of inspiration to many.",
//     "Your laughter is truly joyful.",
//     "You have an eye for beauty.",
//     "Your enthusiasm is contagious.",
//     "You are incredibly thoughtful.",
//     "You radiate positive energy.",
//     "You handle challenges with such grace.",
//     "Your kindness makes a difference.",
//     "You have an amazing perspective on life.",
//     "You are strong and resilient.",
//     "You make every day brighter!"
//   ];

// //   Size is 20
  
//   const victimCardCompliments = [
//     "You always give your best, even when no one appreciates it.",
//     "Your kindness is unmatched, yet so often taken for granted.",
//     "You always put others first, even when they never do the same for you.",
//     "Your heart is too pure for this cruel world.",
//     "You keep helping people, even when they forget to say thank you.",
//     "You deserve the love and kindness you so freely give to others.",
//     "No matter how much you do for people, they always seem to overlook it.",
//     "You’re the kind of person who would give away your last piece of bread, even if no one noticed.",
//     "Your generosity knows no bounds, even when people don’t deserve it.",
//     "You always stand by others, yet somehow find yourself standing alone.",
//     "You forgive so easily, even when others don’t deserve a second chance.",
//     "Your loyalty is unwavering, even when others walk away without a thought.",
//     "You give without expectations, even though deep down, you deserve the same in return.",
//     "You stay strong, even when no one realizes the battles you fight.",
//     "You carry the weight of everyone’s problems, yet no one carries yours.",
//     "Your patience is incredible, even when people constantly take advantage of it.",
//     "You always see the best in others, even when they don’t see the same in you.",
//     "You give endless support, even when no one thinks to ask how you’re doing.",
//     "Your kindness is a gift, even though people treat it like an expectation.",
//     "You love deeply, even in a world that forgets to love you back."
//   ];
  
// // size 30
//   const recommendations = [
//     "Feed a street dog or cat ",
//     "Plant a tree ",
//     "Call an old friend ",
//     "Help a stranger in need ",
//     "Donate old clothes ",
//     "Smile at a stranger ",
//     "Write a gratitude journal ",
//     "Cook a meal for someone ",
//     "Give a heartfelt compliment ",
//     "Spend time with family ",
//     "Reduce plastic use ",
//     "Support a local business ",
//     "Meditate for 10 minutes ",
//     "Read a good book ",
//     "Drink more water ",
//     "Exercise for 30 minutes ",
//     "Do a random act of kindness ",
//     "Volunteer for a cause ",
//     "Listen to music that uplifts you ",
//     "Watch a sunrise or sunset ",
//     "Avoid negative self-talk ",
//     "Take a break from social media ",
//     "Write a letter to your future self ",
//     "Help an elderly person ",
//     "Be patient in traffic or lines ",
//     "Say 'thank you' more often ",
//     "Spend time in nature ",
//     "Donate to a charity ",
//     "Learn something new ",
//     "Be kind to yourself "
// ];

// //Size 20
// const futurePredictions = [
//   "You will accidentally become famous for something totally unexpected! 🎥✨",
//   "A surprise pizza delivery is in your near future. 🍕😋",
//   "You will soon discover a hidden talent you never knew you had! 🎨🎶",
//   "A random stranger will brighten your day with a kind gesture. 🌟",
//   "You are about to have a conversation that will change your perspective. 💡",
//   "The WiFi signal of your dreams will appear when you need it most! 📶😂",
//   "Your next big idea will come while you're in the shower. 🚿💡",
//   "Someone will compliment your amazing taste in music very soon! 🎶🔥",
//   "You will soon laugh uncontrollably at a meme you haven’t seen yet. 😂",
//   "Your dream vacation is closer than you think! ✈️🏝️",
//   "A cat will cross your path, and it will either be lucky or just adorable. 🐱🍀",
//   "You will wake up feeling extra motivated to achieve your goals! 🚀💪",
//   "Your next adventure will begin with an unexpected text message. 📱✨",
//   "An old friend will reach out and make your day. ☎️💙",
//   "A small risk you take will lead to an exciting opportunity. 🎲🚀",
//   "You will soon have a moment of genius – don't forget to write it down! 📝🤯",
//   "Good news is coming your way—get ready to celebrate! 🎉🥳",
//   "You will find money in an unexpected place soon! 💰😆",
//   "A ridiculous yet hilarious misunderstanding will make your week. 🤣",
//   "No matter what happens, today is a great day to be awesome! 😎🔥"
// ];


// const form = document.getElementById('astroForm');
// form.addEventListener('submit',(event)=>{
  

//   const Name = document.getElementById('name').value;
//   const Surname = document.getElementById('surname').value;
//   const BirthDay = Number(document.getElementById('birthdate').value);
//   const birthmonth = Number(document.getElementById('birthmonth').value);
//   const birthyear = Number(document.getElementById('birthyear').value);

//   console.log(Name,Surname,BirthDay,birthmonth,birthyear);

//   const result = document.getElementById("result");
//   event.preventDefault();
  
  


//   const first_message = `Hello &{Name} &{Surname}`;
//   const second_message = `Your Zodiac sign is &{zodiacSign[birthmonth-1]} `;
//   const Third_message = `compliments[birthdate-1]`;

//   let index = Math.floor(Math.random()*20);
//   const Four_message = `victimCardCompliments[index]`;


//  index =(Name.length*Surname.length*Year)%30;
//   const Five_message = `recommendations[index]`;

//   index = (birthmonth*birthmonth*birthyear)%20;
//   const Six_message = `futurePredictions[index]`;
 
//   result.innerText = `${first_message} ${second_message} ${Third_message} ${Four_message} ${Five_message} ${Six_message}`
// })

const zodiacSign = [
  "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius"
];

const compliments = [
  "You have a great sense of humor!", "Your kindness is truly inspiring.", "You have an amazing ability to make people smile.",
  "Your positivity is contagious.", "You are incredibly talented!", "You bring out the best in people.",
  "Your creativity is impressive.", "You light up the room with your presence.", "You have a heart of gold.",
  "You are a great listener.", "Your determination is admirable.", "You make the world a better place.",
  "Your confidence is inspiring.", "You are wise beyond your years.", "You are a natural leader.",
  "Your hard work always pays off.", "You have a beautiful soul.", "You make difficult things look easy.",
  "You are full of wonderful ideas.", "Your generosity knows no bounds."
];

const victimCardCompliments = [
  "You always give your best, even when no one appreciates it.", "Your kindness is unmatched, yet so often taken for granted.",
  "You always put others first, even when they never do the same for you.", "Your heart is too pure for this cruel world.",
  "You keep helping people, even when they forget to say thank you.", "You deserve the love and kindness you so freely give to others.",
  "No matter how much you do for people, they always seem to overlook it.", "You’re the kind of person who would give away your last piece of bread.",
  "Your generosity knows no bounds, even when people don’t deserve it.", "You always stand by others, yet somehow find yourself standing alone.",
  "You forgive so easily, even when others don’t deserve a second chance.", "Your loyalty is unwavering, even when others walk away without a thought.",
  "You give without expectations, even though deep down, you deserve the same in return.", "You stay strong, even when no one realizes the battles you fight.",
  "You carry the weight of everyone’s problems, yet no one carries yours.", "Your patience is incredible, even when people constantly take advantage of it.",
  "You always see the best in others, even when they don’t see the same in you.", "You give endless support, even when no one thinks to ask how you’re doing.",
  "Your kindness is a gift, even though people treat it like an expectation.", "You love deeply, even in a world that forgets to love you back."
];

const recommendations = [
  "Feed a street dog or cat ", "Plant a tree ", "Call an old friend ", "Help a stranger in need ",
  "Donate old clothes ", "Smile at a stranger ", "Write a gratitude journal ", "Cook a meal for someone ",
  "Give a heartfelt compliment ", "Spend time with family ", "Reduce plastic use ", "Support a local business ",
  "Meditate for 10 minutes ", "Read a good book ", "Drink more water ", "Exercise for 30 minutes ",
  "Do a random act of kindness ", "Volunteer for a cause ", "Listen to music that uplifts you ",
  "Watch a sunrise or sunset ", "Avoid negative self-talk ", "Take a break from social media ",
  "Write a letter to your future self ", "Help an elderly person ", "Be patient in traffic or lines ",
  "Say 'thank you' more often ", "Spend time in nature ", "Donate to a charity ", "Learn something new ",
  "Be kind to yourself "
];

const futurePredictions = [
  "You will accidentally become famous for something totally unexpected! 🎥✨",
  "A surprise pizza delivery is in your near future. 🍕😋",
  "You will soon discover a hidden talent you never knew you had! 🎨🎶",
  "A random stranger will brighten your day with a kind gesture. 🌟",
  "You are about to have a conversation that will change your perspective. 💡",
  "The WiFi signal of your dreams will appear when you need it most! 📶😂",
  "Your next big idea will come while you're in the shower. 🚿💡",
  "Someone will compliment your amazing taste in music very soon! 🎶🔥",
  "You will soon laugh uncontrollably at a meme you haven’t seen yet. 😂",
  "Your dream vacation is closer than you think! ✈️🏝️",
  "A cat will cross your path, and it will either be lucky or just adorable. 🐱🍀",
  "You will wake up feeling extra motivated to achieve your goals! 🚀💪",
  "Your next adventure will begin with an unexpected text message. 📱✨",
  "An old friend will reach out and make your day. ☎️💙",
  "A small risk you take will lead to an exciting opportunity. 🎲🚀",
  "You will soon have a moment of genius – don't forget to write it down! 📝🤯",
  "Good news is coming your way—get ready to celebrate! 🎉🥳",
  "You will find money in an unexpected place soon! 💰😆",
  "A ridiculous yet hilarious misunderstanding will make your week. 🤣",
  "No matter what happens, today is a great day to be awesome! 😎🔥"
];

const form = document.getElementById('astroForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page refresh

  const Name = document.getElementById('name').value;
  const Surname = document.getElementById('surname').value;
  const BirthDay = Number(document.getElementById('birthdate').value);
  const birthmonth = Number(document.getElementById('birthmonth').value);
  const birthyear = Number(document.getElementById('birthyear').value);

  const first_message = `Hello ${Name} ${Surname}`;
  const second_message = `Your Zodiac sign is ${zodiacSign[birthmonth - 1]}`;
  const third_message = compliments[BirthDay % compliments.length];
  const four_message = victimCardCompliments[birthyear % victimCardCompliments.length];
  const five_message = recommendations[(Name.length * Surname.length * birthyear) % recommendations.length];
  const six_message = futurePredictions[(BirthDay * birthmonth * birthyear) % futurePredictions.length];

  document.getElementById("result").innerText = `${first_message} ${second_message} ${third_message} ${four_message}  Advised for you for good future${five_message}  your future Predition:${six_message}`;
});
