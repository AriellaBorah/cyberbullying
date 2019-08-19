const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: "WELCOME TO THE CYBERBULLYING SIMULATOR. THIS WAS MADE BASED ON THE EXPERIENCES OF ACTUAL CYBERBULLYING VICTIMS. THE PURPOSE IS TO HELP PEOPLE EMPATHIZE WITH THE VICTIMS.",
    options: [
      {
        text: 'START',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "YOU ARE A NEW STUDENT IN HIGH SCHOOL. THIS CAN ONLY END WELL.",
    options: [
      {
        text: 'NEXT',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: "YOU'VE BEEN HERE FOR A MONTH NOW. THINGS ARE GREAT! YOU HAVE A FEW FRIENDS, SCHEDULING IS GOOD, AND CLASS ISN'T TOO HARD. LIFE IS GOOD.",
    options: [
      {
        text: 'NEXT',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: "THERE'S THIS NEW SOCIAL MEDIA PLATFORM THAT'S REALLY POPULAR THESE DAYS. YOU MAKE AN ACCOUNT TO FIT IN WITH EVERYONE ELSE. WHAT COULD GO WRONG?",
    options: [
      {
        text: 'NEXT',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: "SO YOU MAKE A PROFILE. HEY LOOK. YOU CAN PUT A PICTURE OF YOURSELF ON THIS. DO YOU DO IT OR NOT?",
    options: [
      {
        text: 'OK',
        nextText: 6
      },
      {
        text: "I'D RATHER NOT",
        nextText:7
      }
    ]
  },
  {
    id: 6,
    text: "IT'S PROBABLY EASIER FOR YOUR FRIENDS TO FIND YOU IF YOU PUT A PICTURE, RIGHT? SO YOU UPLOAD A PICTURE OF YOURSELF HAVING FUN.",
    options:[
      {
      text:'NEXT',
      nextText:8
      }
    ]
  },
  {
    id: 7,
    text: "IT'S PROBABLY BETTER IF YOU PUT SOMETHING ELSE ON THE PROFILE. YOU CAN ALWAYS TELL YOUR FRIENDS ABOUT THIS LATER. SO A PICTURE OF A DOG WAS UPLOADED INSTEAD.",
    options: [
      {
        text:'NEXT',
        nextText:8
      }
    ]
  },
  {
    id:8,
    text:"IT'S BEEN PRETTY NICE SO FAR. YOU'VE SEEN MANY POSTS, LIKED MANY THINGS, AND FOLLOWED LOTS OF COOL PEOPLE. JUST NORMAL SOCIAL MEDIA STUFF.",
    options: [
      {
        text:'NEXT',
        nextText:9
      }
    ]
  },
  {
    id: 9,
    text:"YOU GET A MESSAGE FROM SOMEONE YOU DON'T KNOW. THAT'S RATHER ODD. YOU'VE ONLY GOT MESSAGES FROM YOUR FRIENDS. THAT'S PROBABLY BECAUSE TOU DONT POST MUCH THOUGH. YOU OPEN THE MESSAGE.",
    options:[
      {
        text:'NEXT',
        nextText:10
      }
    ]
  },
  {
    id: 10,
    text: "STEVE.A132: YOU'RE SO DAMN UGLY. KILL YOURSELF",
    options:[
      {
        text: "WTF",
        nextText:11
      },
      {
        text: "NO U",
        nextText:12
      },
      {
        text: "WHO EVEN IS THIS",
        nextText:13
      }
    ]
  },
  {
    id:11,
    text: "WHY IS THIS HAPPENING? YOU'VE NEVER REALLY DONE ANYTHING. YOU DON'T EVEN KNOW THIS GUY! "

  },
  {
    id:12,
    text: "THIS IS A JOKE, RIGHT? YOU DON'T EVEN KNOW WHO THIS IS. SO YPU RESPOND WITH A VERY MATURE 'NO U'. STEVE (OR WHOEVER THAT PERSON REALLY IS) DOESN'T RESPOND WELL.",
    options:[
      {
        text: "NEXT",
        nextText:15
      }
    ]
  },
  {
    id:13,
    text: "YOU: WHO ARE YOU TO TELL ME TO KILL MYSELF? DO YOU EVEN KNOW ME? ",
    options:[
      {
        text: "NEXT",
        nextText:16
      }
    ]
  },
  {
    id:14,
    text: 'TO BE CONTINUED...'
  }
]

startGame()
