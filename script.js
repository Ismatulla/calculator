let  buttons = document.querySelectorAll('.btn')
let input = document.querySelector('.input')
let equal = document.querySelector('.equal')
let clear = document.querySelector('.clear')


    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            e.preventDefault()
             input.value += button.innerText
        })
        
    })
    

equal.addEventListener('click',()=>{
    if(input.value === ''){
        input.value = 'enter a number!'
    }else{
        let calc = eval(input.value)
        input.value = calc
    }
})

clear.addEventListener('click',()=>{
    input.value = ''
})