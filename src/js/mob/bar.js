export default function bar() {
	var body = document.querySelector('#div')
	var div = document.createElement('div')
	div.innerText = 'hello word'
	body.appendChild(div)
}