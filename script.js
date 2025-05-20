
const tarefas = []

function add(){
  const input = document.querySelector('input')
  const tarefa = input.value
  if( tarefa.trim() === '')return
  tarefas.push({texto: tarefa, feito: false})
  input.value = ''
  render()
}

function remove(index){
  tarefas.splice(index,1)
  render()
}

function render(){
  const ul = document.querySelector('ul')
  ul.innerHTML = null
  tarefas.forEach(function(t, index){
    const li = document.createElement('li')
    const section = document.createElement('section')
    const checkbox = document.createElement('input')
    const btnExcluir = document.createElement('button')
    const section1 = document.createElement('section')
    const span = document.createElement('span')
    const btnEditar = document.createElement('button')

    section1.className = 'section1'
    span.innerText = t.texto
    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'
    btnExcluir.className = 'btns'
    btnExcluir.innerHTML = '<span class="material-symbols-outlined">delete</span>'
    btnEditar.className = 'btns'
    btnEditar.innerHTML = '<span class="material-symbols-outlined">edit</span>'

    checkbox.checked = t.feito
    span.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
    span.style.opacity = checkbox.checked ? '0.4' : '1'

    checkbox.onchange = function(){
      t.feito = checkbox.checked
      span.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
      span.style.opacity = checkbox.checked ? '0.4' : '1'
    }

    btnExcluir.onclick = function(){
      remove(index)
    }
    
    btnEditar.onclick = function(){
      const novaTarefa = prompt("Edite a tarefa:", t.texto)
      if(novaTarefa !== null){
        t.texto = novaTarefa
        render()    
      }
    }
    ul.appendChild(li)
    li.appendChild(section1)
    li.appendChild(section)
    section1.appendChild(checkbox)
    section1.appendChild(span)
    section.appendChild(btnEditar)
    section.appendChild(btnExcluir)
  })
}