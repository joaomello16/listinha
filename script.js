const tarefas = []

function add(){
    const input = document.querySelector('input')
    const tarefa = input.value
    if(tarefa.trim() === '') return
    tarefas.push(tarefa)
    input.value = ''
    render()  

}

function remove(index){
  tarefas.splice(index, 1)
  render()
}

function render(){
  const ul = document.querySelector('ul')
    ul.innerHTML = null
  tarefas.forEach(function(t, index){
    const li = document.createElement('li')
    li.innerText = t
    ul.appendChild(li)

    const button = document.createElement('button')
    button.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    button.onclick = function(){
      remove()
    }
    li.appendChild(button)

  })

    
}

document.addEventListener('keydown', function(event){
  if(event.key === 'Enter'){
    add()
  }
})

render()

