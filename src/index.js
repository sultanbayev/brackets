module.exports = function check(str, bracketsConfig) {

  let condition = bracketsConfig.some(([openBracket, closeBracket]) => {
    return str.includes(openBracket + closeBracket)
  })

  while (condition) {
    bracketsConfig.forEach(([openBracket, closeBracket]) => {
      str = str.replaceAll(openBracket + closeBracket, '')
    });

    condition = bracketsConfig.some(([openBracket, closeBracket]) => {
      return str.includes(openBracket + closeBracket)
    })
  }

  return str.length === 0
}
