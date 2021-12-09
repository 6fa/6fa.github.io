const ul = document.getElementById('itemContainer')
const uploader = document.querySelector('.uploader')
const snacks = document.querySelector('.snacks')
const accountBook = document.querySelector('.account')

const elList = {
  '#uploader': uploader,
  '#snacks': snacks,
  '#accountBook': accountBook
}
const hashList = ['#uploader','#snacks','#accountBook']

function hideAll (curHash) {
  for(let i = 0; i < hashList.length; i++) {
    const hash = hashList[i]
    if(curHash && curHash === hash) continue
    elList[hash].style.display = 'none'
  }
}


const render = function (hash) {
  if(hash && hash !== '/'){
    hideAll(hash)
    elList[hash].style.display = 'block'
    console.log('xxx')
  }else {
    hideAll()
  }
}

ul.addEventListener('click', (e) => {
  const target = e.target.getAttribute('to')
  window.location.hash = target
})

window.addEventListener('hashchange', (e)=>{
  render(window.location.hash)
})
window.addEventListener('load', ()=>{
  render(window.location.hash)
})
