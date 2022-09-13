let iniX;
let iniY;

let startX = document.addEventListener("mousedown", (e) => { 
    iniX = e.clientX;
    return iniX;
})

let startY = document.addEventListener("mousedown", (e) => { 
    iniY = e.clientY;
    return iniY;
    console.log('ya')
})

let finalPos = document.addEventListener("mouseup", (e) => { 
    let finX = e.clientX;
    let finY = e.clientY;
    let ΔX = finX-iniX;
    let ΔY = finY-iniY;
    console.log('ΔX = ' + ΔX + ' ΔY = ' + ΔY)
})


