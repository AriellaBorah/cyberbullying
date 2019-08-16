const textElement = document.getElementbyId('text')
const optionButtonsElement = document.getElementbyId('option-button')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id ===
  textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      buttonClassList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return true
}

function selectOption(option) {

}

const textNodes = [
  {
    id: 1,
    text: 'you are a new student in high school. this can only end well. ',
    options:[
      {
        text: 'do it',
        nextText:2
      },
      {
        text: 'no',
        nextText:2
      }
    ]
  },
{
  id: 2,
  text:'',
   options: [
     {
       text: ''
       requiredState: ()
     }
   ]
}
]

startGame()
