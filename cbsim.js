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
    text: "WELCOME TO THE CYBERBULLYING SIMULATOR",
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
      text:'NEXT'
      }
    ]
  },
  {
    id: 7,
    text: "IT'S PROBABLY BETTER IF YOU PUT SOMETHING ELSE ON THE PROFILE. YOU CAN ALWAYS TELL YOUR FRIENDS ABOUT THIS LATER. SO SOME RANDOM PICTURE WAS UPLOADED INSTEAD.",
    options: [
      {
        text:'NEXT'
      }
    ]
  }
]

startGame()
