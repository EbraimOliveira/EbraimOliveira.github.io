const welcomeTxtPt = `Olá, sou Ebraim Oliveira, desenvolvedor web e mobile. É um prazer te receber no meu portfólio !
Aqui você encontrará alguns dos projetos nos quais trabalhei e informações sobre meus hobbies e experiências como voluntário. Fique à vontade para explorar e acompanhar o meu progresso pessoal e profissional.`

const welcomeTxtEn = `Hello, I'm Ebraim Oliveira, web and mobile developer. It's a pleasure to welcome you to my portfolio !
Here you will find some of the projects I've worked on and information about my hobbies and volunteer experiences. Feel free to explore and follow my personal and professional progress.`

const hobbyClimbPt = 'Assim como na programação, a capacidade de resolver problemas é essencial na escalada. Talvez por isso essa seja a minha atividade de lazer favorita e onde reside a minha verdadeira paixão. Amo o contato com a natureza e as dificuldades que esse esporte me permite superar.'

const hobbyClimbEn = "Just like in programming, problem-solving skills are crucial in climbing. Perhaps that's why it's my favorite leisure activity and where my true passion resides. I love being in touch with nature and the challenges this sport allows me to overcome."

const hobbyBoardGamesPt = ''
const hobbyBoardGamesEn = ''

const aboutPortifolioPt = 'Um projeto relativamente simples e de design básico mas que apresentou diversos desafios e proporcionou muito aprendizado. Criado totalmente do zero e sem nenhum modelo ou mesmo inpiração. Além disso, optei por utilizar ferramentas como typescript e react que não necessariamente tinham necessidade de serem usados mas que me permitiram aprimorar meu conhecimento com as referidas tecnologias'

const aboutPortifolioEn = ''

const aboutCosmoPt = 'Projeto feito em grupo com outros devs Jrs também em início de carreira, este é eu projeto mais ambicioso até o momento. Construido inteiramente do zero e utilizando tecnologias que nunca havia estudado antes (React Native e frameworks), criamos uma integração entre front e back, aplicamos Arquiteturas em Camadas MSC (Model-Service-Controller), metodos de autenticação, conhecimento da estrutura Dockerfile e docker-compose, banco de dados não relacional (Mongo)...'

const aboutCosmoEn = ''

const aboutAlgorithmsPt = 'Uma aplicação simples de um conceito complexo, Merge Sort com Python'

export const portuguese = {
  password: 'senha',
  buttons: {
    toProjectsBtn: 'Projetos',
    toHobbiesBtn: 'Passatempos',
    toVoluntaryBtn: 'Voluntário',
    languageBtn: 'Idioma',
    toHomeBtn: 'Início',
  },
  home: {
    welcomeTxt: welcomeTxtPt,
  },
  projects: {
    aboutPortifolioPt,
  },
  voluntary: {},
  hobbies: {
    hobbyClimb: hobbyClimbPt,
    hobbyBoardGames: hobbyBoardGamesPt
  },
  contactMe: {
    nameTxt: 'nome',
    messageTxt: 'Enviar uma mensagem:',
    messageBtn: 'Enviar',
    textArea: 'Mensagem',
    emailSent: 'Mensagem enviada com sucesso',
    sending: 'Enviando...',
  },
};

export const english = {
  password: 'password',
  buttons: {
    toProjectsBtn: 'Projects',
    toHobbiesBtn: 'Hobbies',
    toVoluntaryBtn: 'Voluntary',
    languageBtn: 'Language',
    toHomeBtn: 'Home',
  },
  home: {
    welcomeTxt: welcomeTxtEn,
  },
  projects: {
    aboutPortifolioEn,
  },
  voluntary: {},
  hobbies: {
    hobbyClimb: hobbyClimbEn,
    hobbyBoardGames: hobbyBoardGamesEn
  },
  contactMe: {
    nameTxt: 'name',
    messageTxt: 'Send me a message:',
    messageBtn: 'Submit',
    textArea: 'Message',
    emailSent: 'Message sent successfully',
    sending: 'Sending...'
  },
};