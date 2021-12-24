function Class(className,classUnit,classCapacity){
    

    this.className=className,
    this.classUnit=classUnit,
    this.classCapacity=classCapacity
    
    
}

const softEngineeringClass=new Class("softEngineeringClass",3,25)
const networkClass=new Class("networkClass",2,35)

console.log(softEngineeringClass)
console.log(networkClass)

softEngineeringClass.book=true
networkClass.project=true

console.log(softEngineeringClass)
console.log(networkClass)

