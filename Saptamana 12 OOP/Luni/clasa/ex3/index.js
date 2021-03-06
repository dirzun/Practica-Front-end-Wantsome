// triunghi.constructor;                 // Triangle(a, b, c)    
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"

/*
{
    var triunghi = function(){};

    triunghi.prototype.initialize = function(a, b, c){
        this.a = a,
        this.b = b,
        this.c = c,
        this.getPerimeter = ()=>{return console.log((this.a+this.b)+(this.b+this.c)+(this.c+this.a));}
    }


    var forma = function (type){
        this.prototype = new triunghi()
        this.type = type,
        this.getType = () =>{
            return console.log(this.type);
        }
    }; 


    forma.prototype = new triunghi();

    var Triangle = new forma("triunghi");
    Triangle.initialize(8,8,8);

    Triangle.getPerimeter();
    Triangle.getType();

    forma.isPrototypeOf(triunghi);
    triunghi.constructor;
 } 
*/


function Triangle (a, b, c){
    this.a = a,
    this.b = b,
    this.c = c,
    this.type = 'triunghi'
}
const forma = {
    type: '',
    getType: function(){
        return this.type;
    }
}
Triangle.prototype = forma;

//Triangle.prototype = forma; asa e false
Triangle.prototype.getPerimeter = function(){
    return (this.a+this.b)+(this.b+this.c)+(this.c+this.a);
}


const triunghi = new Triangle(8,8,8);