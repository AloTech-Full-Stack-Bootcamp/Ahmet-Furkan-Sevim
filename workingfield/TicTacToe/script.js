//add
const game=document.querySelector("#game")
const clearbtn=document.querySelector("#clear")
let count=0

let arr=[]


//Oyun çizme

class Table{
    Gameboard(){
        for(let i=0;i<9;i++){
            const div=document.createElement("div")
            div.classList.add("cell")
            div.classList.add(`${i}`)
            div.addEventListener("click",this.Play)
            game.appendChild(div)
            
        }
    }

    Play(e){

        winner() 
        if(count%2===0){
            e.target.innerHTML="X"
            count++
        }
        else if(count%2!==0){
            e.target.innerHTML="O"
            count++
        }
        if(count===9){
            e.target.innerHTML="X"
            console.log(arr)
           
        }
        
    }
   
}    


const table=new Table()
table.Gameboard()


clearbtn.addEventListener("click",function(){
    game.innerHTML=""
    const table=new Table()
    count=0
    arr.pop()
    table.Gameboard()

})

const div=document.querySelector("#div")



function winner(){
    for(let i=0;i<9;i++){
    let hand=document.getElementsByClassName(`${i}`).innerHTML
    console.log(hand)
    arr.push(hand)
    }



}

/* function checkwinner(arr){
    for(let i=0;i<3;i++){
        if(arr[i*1].innerHTML===arr[i*2].innerHTML===arr[i*3].innerHTML){
            alert("x")
            arr.pop()
        }
        
    }
}
 */




