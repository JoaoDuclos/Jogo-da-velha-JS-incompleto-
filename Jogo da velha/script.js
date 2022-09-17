function check(){
    // var lefttop = document.querySelector('left-top')
    // var middletop = document.getElementById('middle-top')
    // var righttop = document.getElementById('right-top')
    // var rightmiddle = document.getElementById('right-middle')
    // var middlemiddle = document.getElementById('middle-middle')
    // var rightmiddle = document.getElementById('right-middle')
    // var leftbottom = document.getElementById('left-bottom')
    // var middlebottom = document.getElementById('middle-bottom')
    // var rightbottom = document.getElementById('right-bottom')

    execBtn(value){
        switch (value) {
            case 'left-top':
            
            break

            case 'middle-top':
            break

            case 'right-top':
            break

            case 'left-middle':
            break

            case 'middle-middle':
            break

            case 'right-middle':
            break

            case 'left-bottom':
            break

            case 'middle-bottom':
            break

            case 'right-bottom':
            break
        }
    }

    var box = document.querySelectorAll('.box')
    box.forEach((btn, index)=>{
        btn.addEventListener('click', e => {
            var oneBox = btn.id
            this.execBtn(oneBox)
        })
    })
}
