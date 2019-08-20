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
    text: "You are a new student in high school. This can only end well.",
    options: [
      {
        text: 'NEXT',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "You've been here for a month now. Things are great! You have a few friends, scheduling is good, and class isn't too hard. Life is good.",
    options: [
      {
        text: 'NEXT',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: "There's this new social media platform that's really popular these days. You make an account to fit in with everyone else. What could go wrong?",
    options: [
      {
        text: 'NEXT',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: "Profile time. You can put a picture of yourself on this. Should you do it or not?",
    options: [
      {
        text: 'OK',
        nextText: 5
      },
      {
        text: "I'D RATHER NOT",
        nextText:6
      }
    ]
  },
  {
    id: 5,
    text: "It's probably easier for your friends to find you if you put a picture, right? So you upload a picture of yourself having fun.",
    options:[
      {
      text:'NEXT',
      nextText:7
      }
    ]
  },
  {
    id: 6,
    text: "It's probably better if you put something else on the profile. You can always tell your friends about this later. So a picture of a dog was uploaded instead.",
    options: [
      {
        text:'NEXT',
        nextText:7
      }
    ]
  },
  {
    id:7,
    text:"It's been pretty nice so far. You've seen many posts, liked many things, and followed lots of cool people. Just normal social media stuff.",
    options: [
      {
        text:'NEXT',
        nextText:8
      }
    ]
  },
  {
    id: 8,
    text:"You get a message from someone you don't know. That's rather odd. You've only got messages from your friends. Mainly probably because you dont post much though. You open the message.",
    options:[
      {
        text:'NEXT',
        nextText:9
      }
    ]
  },
  {
    id: 9,
    text: "[STEVE.A132: YOU'RE SO DAMN UGLY. KILL YOURSELF]",
    options:[
      {
        text: "WTF",
        nextText:10
      },
      {
        text: "NO U",
        nextText:11
      },
      {
        text: "WHO EVEN IS THIS",
        nextText:12
      }
    ]
  },
  {
    id:10,
    text: "(Why is this happening? You've never really done anything. You don't even know this guy!) You try your best to ignore it.",
    options:[
      {
        text: "NEXT",
        nextText:15
      }
    ]
  },
  {
    id:11,
    text: "This is a joke, right? You don't even know who this is. So you respond with a very mature [NO U]. Steve (or whoever that person really is) doesn't respond well.",
    options:[
      {
        text: "NEXT",
        nextText:14
      }
    ]
  },
  {
    id:12,
    text: "[YOU: WHO ARE YOU TO TELL ME TO KILL MYSELF? DO YOU EVEN KNOW ME?]",
    options:[
      {
        text: "NEXT",
        nextText:15
      }
    ]
  },
  {
    id:14,
    text: "Steve won't bother you again. Or so you thought. Later he sends a DM with very graphic death threats that seems like something out of Saw. You don't really pay it any mind.",
    options: [
      {
        text: "GO ON WITH YOUR LIFE",
        nextText:15
      }
    ]
  },
  {
    id:15,
    text:"[STEVE.A132: I KNOW WHERE YOU LIVE. I'LL TRACK YOU DOWN AND BEAT THE TAR OUT OF YOU.]",
    options:[
      {
        text:"FREAK OUT",
        nextText:16
      },
      {
        text:"NO YOU DON'T",
        nextText:17
      },
      {
        text:"REPORT THIS GUY",
        nextText:18
      }
    ]
    },
    {
      id: 16,
      text: "(Oh crap.) You procced to panic. Eventually you try to calm down and realize that it's not really possible. Honestly, there are probably hundreds of other people with the same name around here.",
      options:[
        {
          text:"NEXT",
          nextText:20
      }
    ]
    },
    {
      id: 17,
      text: "[YOU: IT'S REALLY UNLIKELY THAT YOU KNOW WHERE I LIVE. I DIDN'T EVEN PUT THAT SORT OF INFORMATION IN MY PROFILE. I CALL BULLSHIT.]",
      options:[
        {
          text:"NEXT",
          nextText:19
      }
    ]
    },
    {
      id: 18,
      text:"Nope. This guy is getting reported fast. Might as well call the authorities, too. Not taking any chances. AT ALL. ",
      options:[
        {
          text:"NEXT",
          nextText:19
      }
    ]
  },
      {
        id:19,
        text:"ALWAYS REMEMBER TO REPORT ANY ATTEMPTS AT HARASSMENT. CYBERBULLYING IS SERIOUS BUSINESS."
      },
      {
        id:20,
        text:"You don't do anything. If you send a report, they can just go make another one and it'll never end. You do your best to ignore it. ",
        options:[
          {
            text:"NEXT",
            nextText:21
        }
      ]
    },
    {
      id:21,
      text:"The threats keep coming, along with the insults. You grow more withdrawn each day. Your family and friends have begun noticing the change and worry about your health. You slowly begin to think that maybe STEVE were right.",
      options:[
        {
          text:"NEXT",
          nextText:22
      }
    ]
  },
  {
    id:22,
    text: "Your family and friends have started asking what's wrong. After a few times, you finally tell them. You go to the police and the social media platform to report the threats and the harassment.",
    options:[
      {
      text:"NEXT",
      nextText:19
    }
  ]
  }

]

startGame()
