var globalVar = "I'm a global variable";
let globalLet = "I'm also global,but scoped with let";
const globalConst ="I'm a global constant";


{
    var blockVar = "I'm a block-scoped var";
    let blockLet ="ima blockscopeed let";
    const blockConst ="ima blockscoped const";
}

console.log(globalVar)

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError
