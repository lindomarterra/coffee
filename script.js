let staff = document.getElementsByClassName('staff')

for( let x = 0; x < staff.length; x++){

    staff[x].addEventListener('mouseover', over)
    staff[x].addEventListener('mouseout', out)

// mouser over for desktop

    function over(obj){
        obj.target.style.border = '5px solid gold'
        obj.target.style.height = '330px'
        obj.target.style.width = '280px'
    }
    function out(obj){
        obj.target.style.border = 'none'
        obj.target.style.height = '230px'
        obj.target.style.width = '200px'
    }
}

// click over for desktop

for( let x = 0; x < staff.length; x++){

    staff[x].addEventListener('click', click)
    staff[x].addEventListener('dblclick', dblclick)

    function click(obj){
        obj.target.style.border = '5px solid gold'
        obj.target.style.height = '330px'
        obj.target.style.width = '280px'
    }
    function dblclick(obj){
        obj.target.style.border = 'none'
        obj.target.style.height = '230px'
        obj.target.style.width = '200px'
    }

}

// form ( validation)

 
const inputName = document.querySelector('#name')

inputName.addEventListener('keypress', function(e){

    const keyCode = (e.keyCode ? e.keyCode: e.wich)

    if( keyCode > 47 && keyCode < 58){
        e.preventDefault()
    }
})


//  form alert

    let btnSubmit = document.getElementById('btn-submit')

    btnSubmit.addEventListener('click', function(){
        alert('Does the fields fill correctly?')
    })

 
 
