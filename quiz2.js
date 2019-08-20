
var quiz = [
  [1, "Do you have negative language? (bad, ugly...)","NO"],
  [2, "Is your messege sarcastic? (sarcasm does not always translate into text)", "NO"],
  [3, "Are you being CRITICAL or SUPPORTIVE?", "SUPPORTIVE"],
  [4, "Is your messege offensive or aggressive?", "NO"],
  [5, "Is this comment focused on any steriotype associated with this person's race or ethnicity?", "NO"],
  [6, "Does your message include body shaming of any kind?", "NO"],
];

var answer;
var response;
var sensitive = 0

if (response === quiz[i][2]){
    document.write(`<h3> Answer ${quiz[i][0]} indicates an appropriate message.</h3>`);
    sensitive += 1
}else {
    document.write(`<h3> Answer ${quiz[i][0]} indicates an inappropriate message.</h3>`);
}
}

if(sensitive == 6){
  document.write(`<h2>Your message appears to be perfectly appropriate! Nice Work!</h2>`);
}else{
  if(sensitive >= 4){
    document.write(`<h2>Your message appears to be mostly appropriate, but may require some revision.</h2>`)
  }else{
    document.write(`<h2>Your message needs revision.</h2>`)
  }
}
