export class TutorialControler {
  static messages = [
    "V'là le Jérome avec son tracteur.\nFaut vit qu'il les mettes sous l'toit avant que ça pleuve. (Appuye sur <Espace> pour continuer)",
      "Je m'suis dit : \"Faudrait que je d'mandes que tu lui y fasse\"",
      "Pi tant qu'à faire, c'pas dur. T'as qu'à appuyer sur les flèches",
      "Ben qu'est qu't'attends ? Vas y!",
    ];

  constructor() {
    self.finished = false;
    self.messageBox = document.getElementById('tutorial-box');
    self.messageId = 0;
    self.messageBox.innerHTML = TutorialControler.messages[self.messageId];
  }

  next() {
    if (!self.finished) {
      self.messageId++;
      if (self.messageId == TutorialControler.messages.length) {
        document.getElementById('tutorial-speech-bubble').style.visibility = "hidden";
        self.finished = true;
      } else {
        self.messageBox.innerHTML = TutorialControler.messages[self.messageId];
      }
    }
  }

  isFinished() {
    return self.finished;
  }
}
