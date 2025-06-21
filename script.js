
const tarefas = []

function add(){
  const input = document.querySelector('input')
  const tarefa = input.value
  if(tarefa.trim() === '')return
  tarefas.push(tarefa)
  console.log(tarefas)
  input.value = ''
  render()
}
function render(){
  const ul = document.querySelector('ul')
  ul.innerHTML = null
  tarefas.forEach(function(t, index){
    const li = document.createElement('li')
    const button = document.createElement('button')

    button.innerHTML = 'Excluir'
    li.innerText = t

    button.onclick = function(){
      tarefas.splice(index, 1)
      render()
    }

    ul.appendChild(li)
    li.appendChild(button)
  })
}