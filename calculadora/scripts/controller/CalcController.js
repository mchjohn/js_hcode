class CalcController {
  constructor() {
    this._locale = 'pt-BR'
    this._displayCalcEl = document.querySelector("#display")
    this._dateEl = document.querySelector("#data")
    this._timeEl = document.querySelector("#hora")
    this._currentDate

    this.initialize()
    this.initBottonsEvents()
  }

  // Método p/ inicializar data e hora
  initialize() {
    this.setDisplayDateTime()

    setInterval(() => {
      this.setDisplayDateTime()
    }, 1000)
  }

  // Método p/ adicionar multiplos eventos
  addEventListenerAll(element, events, fn) {
    events.split(' ').forEach(event => {
      element.addEventListener(event, fn, false)
    })
  }

  // Método p/ inicializar eventos do botão
  initBottonsEvents() {
    let buttons = document.querySelectorAll("#buttons > g, #parts > g")

    buttons.forEach((btn, index) => {
      this.addEventListenerAll(btn, 'click drag', e => {
        console.log(btn.className.baseVal.replace("btn-", ""))
      })

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
        btn.style.cursor = "pointer"
      })
    })
  }

  // Método p/ setar data e hora
  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale)
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
  }

  // Hora
  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }

  // Data
  get displayDate() {
    return this._dateEl = value;
  }

  set displayDate(value) {
    this._dateEl.innerHTML = value;
  }

  // Display da Calculadora
  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  // Data Atual
  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    this._currentDate = value;
  }
}