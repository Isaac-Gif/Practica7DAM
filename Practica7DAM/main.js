const contentFilas = document.querySelector("#filas-content")
const templateFilas = document.querySelector("#filas-template")
const fragment = document.createDocumentFragment()

let productos =[
    {
        id: 1,
        name: 'Coca Cola',
        stock: 50,
        price: 0.65
    },

    {
        id: 2,
        name: 'Pepsi',
        stock: 35,
        price: 0.55
    },

    {
        id: 3,
        name: 'Pepsi Black',
        stock: 10,
        price: 0.65
    },
]

function filasTabla(){
contentFilas.textContent=''
productos.forEach( item =>{
    const clone = templateFilas.content.cloneNode(true)


        clone.querySelector('.id').textContent = item.id
        clone.querySelector('.name').textContent = item.name
        clone.querySelector('.stock').textContent = item.stock
        clone.querySelector('.price').textContent = `$ ${item.price}`

        clone.querySelector('.btn-remover').dataset.id = item.id

        fragment.appendChild(clone)
    })

    contentFilas.appendChild(fragment)
    agregarEventoRemoverProducto()
}

function agregarEventoRemoverProducto() {
    const buttons = document.querySelectorAll('.btn-remover')

    buttons.forEach(btn => {
        btn.addEventListener('click',(e) =>{
            let id= btn.dataset.id
            removerProducto(id)
            filasTabla()
        })
    })
}

function removerProducto(id){
    productos = productos.filter(
        pro => parseInt(pro.id) !== parseInt(id)
    )   
}

filasTabla()