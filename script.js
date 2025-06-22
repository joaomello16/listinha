
const tarefas = JSON.parse(localStorage.getItem('tarefas'))

function add(){
  const input = document.querySelector('input')
  const tarefa = input.value
  if(tarefa.trim() === '')return
  tarefas.push(tarefa)
  console.log(tarefas)
  input.value = ''
  salvar()
  render()
}

function salvar(){
  localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function render(){
  const ul = document.querySelector('ul')
  ul.innerHTML = null
  tarefas.forEach(function(t, index){
    const li = document.createElement('li')
    const button = document.createElement('button')

    button.innerHTML = 'Excluir'
    button.className = 'btnExcluir'
    li.innerText = t

    button.onclick = function(){
      tarefas.splice(index, 1)
      salvar()
      render()
    }

    ul.appendChild(li)
    li.appendChild(button)
  })
}
render()
