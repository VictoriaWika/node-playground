module.exports = function random(max = 10) {
  return Math.floor(Math.random() * (max + 1))
  // + 1 weil math floor abrundet und wir bis 10 tählen wollen
}
