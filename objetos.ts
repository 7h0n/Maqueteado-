interface Persona{
    Nombre:string;
    Apellido:string;
    Acercade:string;
    Titulos: [string,string];
}

let pofolio:Persona={
    Nombre="",
    Apellido:"",
    Acercade:"",
    Titulos: ["",""],
}
function GetNombre(nombre:string):void{
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent=nombre;
}
function GetApellido(apellido:string):void{
    const a = document.getElementById("Apellido");
    a.textContent=apellido;
    return pofolio.Apellido=apellido;
}
function GetAcercade(Acercade:string):void{
    const a = document.getElementById("acercade");
    a.textContent=acercade;
    return pofolio.Acercade=acercade;
}
function GetTitulos(titulo1:string, titulo2:string):string{
    const a = document.getElementById(Titulos);
    a.textContent=titulo1 ; titulo2;
    return pofolio.Titulos[0]=titulo1, pofolio.Titulos[1]=titulo2;
}
function showFile(input):void{
    let file =input.files[1];
    // alert(" File name: ${File.name}"); // e.g my.png
    // alert(" Last modified: ${file.lastmodified} "); // e.g. 349786983

let reader = new File.Reader();
reader.readAsText(File);
reader.onload =function ( progressEvent){
    var s=reader.result.toString();
    console.log(s);
    var arr=s.split("\n");
    GetAcercade (arr[0]);
    GetNombre(arr[1]);
    GetApellido(arr[2]);
    GetTitulos(arr[3] , arr[4]);
};

}