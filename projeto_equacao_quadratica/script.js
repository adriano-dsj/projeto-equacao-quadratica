 window.addEventListener('load', function(){
	
	//Nessa linha, atribuimos uma função que será diparada quando o botão for criado
	document.getElementById('btnCalcular').addEventListener('click', calcular)

	//Aqui, há todas as instruções que o programa deve fazer quando o evento for disparado
	function calcular(){
		//Criação de todas as variáveis da função
		var valorA = document.querySelector('input#valorA').value
		var valorB = document.querySelector('input#valorB').value
		var valorC = document.querySelector('input#valorC').value
		var discriminante = Math.pow(valorB, 2) - 4*valorA*valorC
		var raiz1 = ((-valorB) + Math.sqrt(discriminante)) / (2*valorA)
		var raiz2 = ((-valorB) - Math.sqrt(discriminante)) / (2*valorA)
		var xVertice = -(valorB/(2*valorA))
		var yVertice = -(discriminante/(4*valorA))
		
		//Condicional que vai instruir o programa se o discriminante for menor que 0
		if(discriminante <= 0){
			raiz1 = ((-valorB) + Math.sqrt(-discriminante)) / (2*valorA)
			raiz2 = ((-valorB) - Math.sqrt(-discriminante)) / (2*valorA)
		}
		
		document.querySelector('span#formula').style.color = 'black'
		
		if(valorA != 0 && valorB != 0 && valorC != 0){
			if(valorA > 0 && valorB > 0 && valorC > 0){
				document.querySelector('span#formula').innerHTML = `${valorA}x<sup>2</sup> + ${valorB}x + ${valorC} = 0`
			} else if(valorA < 0 && valorB < 0 && valorC < 0){
				document.querySelector('span#formula').innerHTML = `-${-valorA}x<sup>2</sup> - ${-valorB}x - ${-valorC} = 0`
			} else if(valorA < 0 && valorB > 0 && valorC > 0){
				document.querySelector('span#formula').innerHTML = `-${-valorA}x<sup>2</sup> + ${valorB}x + ${valorC = 0}`
			} else if(valorA < 0 && valorB < 0 && valorC > 0){
				document.querySelector('span#formula').innerHTML = `-${-valorA}x<sup>2</sup> - ${-valorB}x + ${valorC} = 0`
			} else if(valorA < 0 && valorB > 0 && valorC < 0){
				document.querySelector('span#formula').innerHTML = `-${-valorA}x<sup>2</sup> + ${valorB}x - ${-valorC} = 0`
			} else if(valorA > 0 && valorB < 0 && valorC > 0){
				document.querySelector('span#formula').innerHTML = `${valorA}x<sup>2</sup> - ${-valorB}x + ${valorC} = 0`
			} else if(valorA > 0 && valorB < 0 && valorC < 0){
				document.querySelector('span#formula').innerHTML = `${valorA}x<sup>2</sup> - ${-valorB}x - ${-valorC} = 0`
			} else if(valorA > 0 && valorB > 0 && valorC < 0){
				document.querySelector('span#formula').innerHTML = `${valorA}x<sup>2</sup> + ${valorB}x - ${-valorC} = 0`
			}
			
		} else if(valorA == 0){
			window.alert('O valor do coeficiente A não pode ser 0')

		} else if(valorA != 0 && valorB ==0 && valorC !=0){
			if(valorA > 0 && valorC > 0){
				document.querySelector('span#formula').innerHTML = `${valorA}x<sup>2</sup> + ${valorC} = 0`
			} else if(valorA < 0 && valorC < 0){
				document.querySelector('span#formula').innerHTML = `-${-valorA}x<sup>2</sup> - ${-valorC} = 0`
			} else if(valorA < 0 && valorC > 0){
				document.querySelector('span#formula').innerHTML = `-${-valorA}x<sup>2</sup> + ${valorC} = 0`
			} else if(valorA > 0 && valorC < 0){
				document.querySelector('span#formula').innerHTML = `${valorA}x<sup>2</sup> - ${-valorC} = 0`
			}

		} else if(valorA != 0 && valorB !=0 && valorC ==0){
			if(valorA > 0 && valorB > 0){
				document.querySelector('span#formula').innerHTML = `${valorA}x<sup>2</sup> + ${valorB}x = 0`
			} else if(valorA < 0 && valorB < 0){
				document.querySelector('span#formula').innerHTML = `-${-valorA}x<sup>2</sup> - ${-valorB}x = 0`
			} else if(valorA < 0 && valorB > 0){
				document.querySelector('span#formula').innerHTML = `-${-valorA}x<sup>2</sup> + ${valorB}x = 0`
			} else if(valorA > 0 && valorB < 0){
				document.querySelector('span#formula').innerHTML = `${valorA}x<sup>2</sup> - ${-valorB}x = 0`
			}

		} else if(valorA != 0 && valorB ==0 && valorC ==0){
			if (valorA > 0){
				document.querySelector('span#formula').innerHTML = `${valorA}x<sup>2</sup> = 0`
			} else{
				document.querySelector('span#formula').innerHTML = `-${-valorA}x<sup>2</sup> = 0`
			}
		}
		
		if(valorA != 0){
		document.querySelector('span#delta').innerHTML =	`&Delta; = B<sup>2</sup> + 4 &times; A &times; C <br/> &Delta; = ${discriminante}`
		document.querySelector('span#raizes').innerHTML =	`X = (-B &plusmn; &radic; &Delta;) / 2 &times; A <br/> X<sup>1</sup> = ${raiz1} <br/> X<sup>2</sup> = ${raiz2}`
		document.querySelector('span#cX').innerHTML =		`x = - (B / 2A)<br/>x = ${xVertice}`
		document.querySelector('span#cY').innerHTML =		`y = - (&Delta; / 4A)<br/>y = ${yVertice}`
		}
}
})
