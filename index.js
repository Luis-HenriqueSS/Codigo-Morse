function codigoParaFrase() {
  var frase = document.getElementById("texto").value
  var codigoMorse = frase.split('/')
  var tamanho = codigoMorse.length
  var convertido = []

  for (let i = 0; i < tamanho; i++) {
    switch (codigoMorse[i]) {
      case ".-":
        convertido.push('a')
      break
    
      case "-...":
        convertido.push('b')
      break
    
      case "-.-.":
        convertido.push('c')
      break
    
      case "-..":
        convertido.push('d');
        break;
    
      case ".":
        convertido.push('e')
      break
    
      case "..-.":
        convertido.push('f')
        break
    
      case "--.":
        convertido.push('g')
      break
    
      case "....":
        convertido.push('h')
        break
    
      case "..":
        convertido.push('i')
      break
    
      case ".---":
        convertido.push('j')
        break
    
      case "-.-":
        convertido.push('k')
      break
    
      case ".-..":
        convertido.push('l')
      break
    
      case "--":
        convertido.push('m')
      break
    
      case "-.":
        convertido.push('n')
      break
    
      case "---":
        convertido.push('o')
      break
    
      case ".--.":
        convertido.push('p')
      break
    
      case "--.-":
        convertido.push('q')
      break
    
      case ".-.":
        convertido.push('r')
      break
    
      case "...":
        convertido.push('s')
      break
    
      case "-":
        convertido.push('t')
      break
    
      case "..-":
        convertido.push('u')
      break
    
      case "...-":
        convertido.push('v')
      break
    
      case ".--":
        convertido.push('w')
      break
    
      case "-..-":
        convertido.push('x')
      break
    
      case "-.--":
        convertido.push('y')
      break
    
      case "--..":
        convertido.push('z')
      break
    
      case "-----":
        convertido.push('0')
      break
    
      case ".----":
        convertido.push('1')
      break
    
      case "..---":
        convertido.push('2')
      break
    
      case "...--":
        convertido.push('3')
      break
    
      case "....-":
        convertido.push('4')
      break
    
      case ".....":
        convertido.push('5')
      break
    
      case "-....":
        convertido.push('6')
      break
    
      case "--...":
        convertido.push('7')
      break
    
      case "---..":
        convertido.push('8')
      break
    
      case "----.":
        convertido.push('9')
      break

      case ".-.-.-":
        convertido.push('.')
      break
    
      case "--..--":
        convertido.push(',')
      break
    
      case "..--..":
        convertido.push('?')
      break
    
      case ".----.":
        convertido.push("'")
      break
    
      case "-.-.--":
        convertido.push('!')
      break
    
      case "-..-.":
        convertido.push('/')
      break
    
      case "-.--.":
        convertido.push('(')
      break
    
      case "-.--.-":
        convertido.push(')')
      break
  
      case ".-...":
        convertido.push('&')
      break
    
      case "---...":
        convertido.push(':')
      break
    
      case "-.-.-.":
        convertido.push(';')
      break
    
      case "-...-":
        convertido.push('=')
      break
    
      case ".-.-.":
        convertido.push('+')
      break
    
      case "-....-":
        convertido.push('-')
      break
    
      case "..--.-":
        convertido.push('_')
      break
    
      case ".-..-.":
        convertido.push('"')
      break

      case " ":
        convertido.push(" ");
        break;
    
      default:
        convertido.push("?");
        break;
    }
  }
  document.getElementById("resultado").innerText = convertido.join('')
}

function fraseParaCodigo() {
  var frase = document.getElementById("texto").value
  frase = frase.toLowerCase()

  frase = frase
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  var codigoMorse = frase.split('')
  var tamanho = codigoMorse.length
  var convertido = []

  for (let i = 0; i < tamanho; i++) {
    switch (codigoMorse[i]) {
      case 'a':
        convertido.push(".-")
      break
    
      case 'b':
        convertido.push("-...")
      break
    
      case 'c':
        convertido.push("-.-.")
      break
    
      case 'd':
        convertido.push("-..")
      break
    
      case 'e':
        convertido.push(".")
      break
    
      case 'f':
        convertido.push("..-.")
      break
    
      case 'g':
        convertido.push("--.")
      break
    
      case 'h':
        convertido.push("....")
      break
    
      case 'i':
        convertido.push("..")
      break
    
      case 'j':
        convertido.push(".---")
      break
    
      case 'k':
        convertido.push("-.-")
      break
    
      case 'l':
        convertido.push(".-..")
      break
    
      case 'm':
        convertido.push("--")
      break
    
      case 'n':
        convertido.push("-.")
      break
    
      case 'o':
        convertido.push("---")
      break
    
      case 'p':
        convertido.push(".--.")
      break
    
      case 'q':
        convertido.push("--.-")
      break
    
      case 'r':
        convertido.push(".-.")
      break
    
      case 's':
        convertido.push("...")
      break
    
      case 't':
        convertido.push("-")
      break
    
      case 'u':
        convertido.push("..-")
      break
    
      case 'v':
        convertido.push("...-")
      break
    
      case 'w':
        convertido.push(".--")
      break
    
      case 'x':
        convertido.push("-..-")
      break
    
      case 'y':
        convertido.push("-.--")
      break
    
      case 'z':
        convertido.push("--..")
      break
    
      case '0':
        convertido.push("-----")
      break
    
      case '1':
        convertido.push(".----")
      break
    
      case '2':
        convertido.push("..---")
      break
    
      case '3':
        convertido.push("...--")
      break
    
      case '4':
        convertido.push("....-")
      break
    
      case '5':
        convertido.push(".....")
      break
    
      case '6':
        convertido.push("-....")
      break
    
      case '7':
        convertido.push("--...")
      break
    
      case '8':
        convertido.push("---..")
      break
    
      case '9':
        convertido.push("----.")
      break
    
      case '.':
        convertido.push(".-.-.-")
      break
    
      case ',':
        convertido.push("--..--")
      break
    
      case '?':
        convertido.push("..--..")
      break
    
      case "'":
        convertido.push(".----.")
      break
    
      case '!':
        convertido.push("-.-.--")
      break
    
      case '/':
        convertido.push("-..-.")
      break
    
      case '(':
        convertido.push("-.--.")
      break
    
      case ')':
        convertido.push("-.--.-")
      break
    
      case '&':
        convertido.push(".-...")
      break
    
      case ':':
        convertido.push("---...")
      break
    
      case ';':
        convertido.push("-.-.-.")
      break
    
      case '=':
        convertido.push("-...-")
      break
    
      case '+':
        convertido.push(".-.-.")
      break
    
      case '-':
        convertido.push("-....-")
      break
    
      case '_':
        convertido.push("..--.-")
      break
    
      case '"':
        convertido.push(".-..-.")
      break
    
      case ' ':
        convertido.push(" ")
      break
    
      default:
        convertido.push("?")
      break
    }
    if (i < tamanho - 1) {
      convertido.push("/")
    }
  }
  document.getElementById("resultado").innerText = convertido.join('')
}
