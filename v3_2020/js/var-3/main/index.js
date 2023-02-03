class Queue {
 constructor(){
     this.items=[]
 }
 insert=(item)=>{
     if(typeof item ==='string')
        this.items.push(item)
        else throw new Error("Invalid Type")
 }
 extract=()=>{
     if(this.items.length===0){
         throw new Error("Invalid Operation")
     }else{
         return this.items.shift();
     }
 }
}

module.exports = Queue;