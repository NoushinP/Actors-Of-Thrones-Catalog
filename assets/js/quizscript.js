const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which character, also known as the Lightning Lord, gets continually resurrected by Thoros of Myr after he dies??',
    answers: [
      { text: 'Berric Dondarrion', correct: true },
      { text: 'Allister Thorne', correct: false }
    ]
  },
  {
    question: 'How does Gregor (“the Mountain”) Clegane kill Oberyn Martell, the “Red Viper,” in their trial by combat??',
    answers: [
      { text: 'cuts his head off', correct: false },
      { text: 'crushes his skull', correct: true },
      { text: 'poisons him', correct: false },
      { text: 'strangels him', correct: false }
    ]
  },
  {
    question: 'Jamie Lannister has a golden ___.?',
    answers: [
      { text: 'Hand', correct: true },
      { text: 'Tongue', correct: false },
      { text: 'Sword', correct: false },
      { text: 'Chariot', correct: false }
    ]
  },
  {
    question: 'Which of the following is not a name of one of Daenerys Targaryen’s dragons?',
    answers: [
      { text: 'Drogon', correct: false },
      { text: 'Rahaegal', correct: false },
      { text: 'Viserion', correct: false },
      { text: 'Balerion', correct: true }

    ]
  },
  {
    question: 'Who is the youngest of Ned Stark’s children?',
    answers: [
      { text: 'Bran', correct: false },
      { text: 'Sansa', correct: false },
      { text: 'Arya', correct: false },
      { text: 'Rickon', correct: true }
    ]
  },
  {
    question: 'Who is Jon Snow’s mother?',
    answers: [
      { text: 'Lyanna Stark', correct: true },
      { text: 'Cersei Lannister', correct: false },
      { text: 'Lysa Arryn', correct: false },
      { text: 'Laxmi Soni', correct: false }
    ]
  },
  {
    question: 'What is Davos Seaworth’s nickname?',
    answers: [
      { text: 'the Sand Snake', correct: false },
      { text: 'the Onion Knight', correct: true },
      { text: 'the Hound', correct: false },
      { text: 'Hot Pie', correct: false }
    ]
},
{
    question: 'Which former ranger of the Night’s Watch led an army of wildlings as the “King-Beyond-the-Wall?',
    answers: [
      { text: 'Janos Slynt', correct: false },
      { text: 'Tormund Giantsbane', correct: false },
      { text: 'Mance Rayder', correct: true },
      { text: 'Craster', correct: false }
    ]
},
{
    question: 'What are the “house words” of House Greyjoy?',
    answers: [
      { text: 'Winter is coming', correct: false },
      { text: 'Ours Is the Fury', correct: true },
      { text: 'We do not sow', correct: false },
      { text: 'Unbowed, Unbent, Unbroken', correct: false }
    ]
},
{
    question: 'What’s the name of the band of assassins that Arya Stark joins in Braavos?',
    answers: [
      { text: 'Sons of the Harpy', correct: false },
      { text: 'Second Sons', correct: true },
      { text: 'Brotherhood Without Banners', correct: false },
      { text: 'Faceless Men', correct: false }
    ]
},
]