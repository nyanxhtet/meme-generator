

let form = document.querySelector("#form");
let results = document.querySelector('.results');
let linkInput = document.querySelector('input[name="link"]');
let textInput = document.querySelector('input[name="text"]');
let sizeInput = document.querySelector('input[name="fontsize"]');
let colorInput = document.querySelector('input[name="color"]');
//let position = document.querySelector('input[type="radio"]:checked');
let buttons = document.querySelectorAll('#button'); 

form.addEventListener("submit", function(e){
    e.preventDefault();
    drawMeme();

});



function drawMeme(src) {
    // this is so it doesn't run code and generate blank div if link is blank
    if(linkInput.value === "" ){
        alert("please enter a link to an image you'd like to create");
    }
    
        else{
        let image = new Image();
        let newDiv = document.createElement('div');
        let canvas = document.createElement('canvas');
        let button = document.createElement('button');
        button.innerText = "X";
  
        
        let ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 600;

            image.onload = () => { 
            ctx.drawImage(image,0, 0, canvas.width, canvas.height );
            ctx.textAlign = "center";
            ctx.font = `${sizeInput.value}px arial`;
            ctx.fillStyle = colorInput.value;
            ctx.fillText(textInput.value, canvas.width / 2, 70, canvas.width-20 );
            }
        image.src = linkInput.value;
        newDiv.append(canvas, button)
        results.append(newDiv);
        
        // event listener added to the button to delete the div/meme
        button.addEventListener('click', function(e){
            e.target.parentElement.remove();
        });
    }

}
   