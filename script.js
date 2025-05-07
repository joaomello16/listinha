const tarefas = ['tarefa-1','tarefa-2','tarefa3']

function add(){
    const input = document.querySelector('input')
    const tarefa = input.value
    if(tarefa.trim() === '') return
    tarefas.push(tarefa)
    input.value = ''
    render()  

}

function render(){
  const ul = document.querySelector('ul')
    ul.innerHTML = null
  for (t of tarefas){
    const li = document.createElement('li')
    li.innerText = t
    ul.appendChild(li)
  }

    
}

render()

