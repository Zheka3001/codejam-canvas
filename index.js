let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

canvas.width = '512';
canvas.height = '512';

let slice = false;

for (var i = 0; i < 32; i++) {
    slice = !slice;
    for (var j = 0; j < 32; j++) {
        if ((j + slice) % 2 == 0) {
            ctx.fillStyle = 'rgb(128, 128, 128)';
        } else {
            ctx.fillStyle = 'rgb(255, 255, 255)';
        }
        ctx.fillRect(j * 16, i * 16, 16, 16);
    }
}

function draw4x4() {    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < data4x4.length; i++) {
        for (let j = 0; j < data4x4[i].length; j++) {
            ctx.fillStyle = '#' + data4x4[i][j];
            ctx.fillRect(j * 128, i * 128, 128, 128);
        }
    }
}

function draw32x32() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < data32x32.length; i++) {
        for(let j = 0; j < data32x32[i].length; j++) {
            let rgb = 'rgb(' + data32x32[i][j][0] + ', ' + data32x32[i][j][1] + ', ' + data32x32[i][j][2] + ')'
            ctx.fillStyle = rgb; 
            ctx.fillRect(j * 16, i * 16, 16, 16);
        }
    }
}

function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let pic = new Image();
    pic.src = 'data/for_canvas/image.png';

    pic.onload = function() {
        ctx.drawImage(pic, 0, 0, 512, 512);
    }
}
