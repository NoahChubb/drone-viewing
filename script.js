AFRAME.registerComponent('move', {
init: function(){ 
    const el=this.el
    document.addEventListener("keydown",(event)=>{
var pos=el.getAttribute('position')
x=pos.x
y=pos.y
z=pos.z
if(event.key==="w"){
    z-=0.5
}
if(event.key==="s"){
    z+=0.5
}
if(event.key==="a"){
    x-=0.5
}
if(event.key==="d"){
    x+=0.5
}
if(event.key==="q"){
    y+=0.5
}
if(event.key==="e"){
    y-=0.5
}
el.setAttribute('position',{x:x,y:y,z:z})
    })
}
})