# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-uvijbg?file=index.html)

# Solution code

## Project 1

```javascript

console.log("Anmol)

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    switch(e.target.id){
      case 'grey':
      body.style.backgroundColor = e.target.id

      case 'red':
      body.style.backgroundColor = e.target.id

      case 'white':
      body.style.backgroundColor = e.target.id

      case 'blue':
      body.style.backgroundColor = e.target.id
      break

      case 'yellow':
      body.style.backgroundColor = e.target.id
    }
  })
});


```