const submit = document.querySelector('#sub');
const clear_button = document.querySelector('#clear');
const container = document.querySelector('#container');
const BB = container.getBoundingClientRect();
const print_div = document.querySelector(".sub_grid_right");

class canvas{
    constructor(){
        this.bb = BB;
        this.x = this.bb.top;
        this.y= this.bb.left;
        this.grid_x = 0;
        this.grid_y = 0;
        this.ctx = container.getContext("2d");
        this.arr = [];
    }

    create_array(){
        for(let i=0;i<28;i++){
        this.arr.push(new Array(28).fill(0));
        }

        //Manipulation of array
        for(let i=0;i<28;i++){
            for(let j = 0;j<28;j++){
                this.arr[i][j] = 0;
            }
        }
        return(this.arr);
    }

    draw_grid(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#E6E6E6';
        //Vertical lines
        for(let i=(500/28); i<=500;i+=(500/28)){
            this.ctx.moveTo(i, 0);
            this.ctx.lineTo(i, 500);
        }
        //Horizonal lines
        for(let i=(500/28); i<=500;i+=(500/28)){
            this.ctx.moveTo(0, i);
            this.ctx.lineTo(500, i);
        }
        this.ctx.stroke();
    }


    logger(){
        //200/(500/28)
        this.grid_x = Math.floor(this.x/(500/28));
        this.grid_y = Math.floor(this.y/(500/28));
        console.log("X-grid: ",this.grid_x, ", Y-grid: ", this.grid_y);
        if(this.x<450 && this.x>0 && this.y<450 && this.y>0){
            console.log("Acceptable")
            this.arr[this.grid_y][this.grid_x]=255;
            this.arr[this.grid_y+1][this.grid_x]=255;
            //this.arr[this.grid_y-1][this.grid_x]=255;
            this.arr[this.grid_y][this.grid_x+1]=255;
            //this.arr[this.grid_y][this.grid_x-1]=255;
        }
    }
}

let canv = new canvas();
canv.draw_grid();
let arr = canv.create_array();

function coord(e){
    canv.x = e.clientX-canv.bb.top;
    canv.y = e.clientY-canv.bb.left;
}

document.addEventListener('mousemove', (e)=>{
    if(e.buttons!=1) return;
    canv.ctx.beginPath();
    canv.ctx.lineWidth = 50;
    canv.ctx.lineCap = 'round';
    canv.ctx.strokeStyle = '#000000';
    console.log("X-axis:",canv.x,", Y-axis", canv.y);
    canv.ctx.moveTo(canv.x, canv.y); // from
    coord(e);
    canv.ctx.lineTo(canv.x, canv.y); // to
    canv.ctx.stroke();
    canv.logger();
});

document.addEventListener('mousedown', coord);
document.addEventListener('mouseenter', coord);

function button_click(data){

fetch("/predict", {
    method: 'POST', 
    redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      let p= document.createElement("p");
      if(data==="ERROR")
      {
        p.innerHTML = `Could you draw that again?`
      }
      else
      {
        p.innerHTML = `The predicted number is ${data[1]}`
        }
      print_div.appendChild(p);
      p.style.display = 'block';
      p.style.fontSize = '25px';
      p.style.backgroundColor = '#FFFFFF';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
submit.addEventListener('mousedown', (e)=>{
    submit.style.borderLeft = "6px solid black";
    submit.style.borderTop = "5px solid black";
    submit.style.boxShadow = "inset 0px 0px 10px grey";
})

submit.addEventListener('mouseup', (e)=>{
    submit.style.borderLeft = "1px solid black";
    submit.style.borderTop = "1px solid black";
    submit.style.boxShadow = "inset 0 0 0px grey";
})

submit.addEventListener('click', (e)=>{
    console.log(arr);
    console.log(arr.flat());
    button_click({arr: arr.flat()});
    clear_button.style.marginTop = "100px";
    submit.remove();
});

clear_button.addEventListener('click', (e)=>{
    console.log("umm");
    location.reload();
})

clear_button.addEventListener('mousedown', (e)=>{
    clear_button.style.borderLeft = "6px solid black";
    clear_button.style.borderTop = "5px solid black";
    clear_button.style.boxShadow = "inset 0px 0px 10px grey";
})

clear_button.addEventListener('mouseup', (e)=>{
    clear_button.style.borderLeft = "1px solid black";
    clear_button.style.borderTop = "1px solid black";
    clear_button.style.boxShadow = "inset 0 0 0px grey";
})
