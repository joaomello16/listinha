const tarefas = ['tarefa-1','tarefa-2','tarefa3']

function add(){
    const input = document.querySelector('input')
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = ''
    render()  

}

function render(){
  const ul = document.querySelector('ul')
    ul.innerHTML = null
  tarefas.forEach(function (i){
    const li = document.createElement('li')
    li.innerText = i
    ul.appendChild(li)
  })

    
}

render()

