function carregar() {

  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  data = new Date()
  hora = data.getHours()
  var minuto = data.getMinutes()
  //msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
  if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Bom dia! Agora são ${hora} horas e ${minuto} minutos pelo horário de Brasília.`
    img.scr = 'manha2.jpg'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora <= 18) {
    msg.innerHTML = `Boa Tarde! Agora são ${hora} horas e ${minuto} minutos pelo horário de Brasília.`
    img.src = 'tarde2.jpg'
    document.body.style.background = '#b9846f'
  }else {
    msg.innerHTML = `Boa noite! Agora são ${hora} horas e ${minuto} minutos pelo horário de Brasília.`
    img.src = 'noite2.jpg'
    document.body.style.background = '#1F3447'
  
  }
  }