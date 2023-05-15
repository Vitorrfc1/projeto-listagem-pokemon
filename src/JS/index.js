function modoescuro()
{
    if (document.getElementById('modo').className == 'modo-escuro'){
        document.getElementById('modo').className = ''
        document.getElementById('btnmodo').src = './src/imagens/sun.png'
    }else{
        document.getElementById('modo').className = 'modo-escuro';
        document.getElementById('btnmodo').src = './src/imagens/moon.png'
    }
    
}



