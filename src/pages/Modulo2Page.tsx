import { useState } from "react";

type contadorProps = {
    initial?:number;
    step?:number;
}

export const Modulo2Page = ({ initial = 0, step = 1 }: contadorProps) => {

    const [count, setCount] = useState<number>(initial);
    const inc = () => setCount((c)=> c + step);
    const dec = () => setCount((c)=> c - step);
    
    type receta ={
        agua:number;
        cafe:number;
        azucar:number;
    };

    type cafe = {
        mensaje:string;
        intensidad: "suave" | "medio" | "fuerte";
    }

    const [intensidad, setIntensidad] = 
    useState<cafe["intensidad"]>("suave"); //Se puede utilizar el tipo de dato de una propiedad de un objeto.
    
    //Explicito con null
    const [ultimocafe, setUltimoCafe] = useState<cafe | null>(null); //Se puede utilizar el tipo de dato de un objeto o null.

    //Valores que pueden ser undifined
    const [ultimoCafe2, setUltimoCafe2] = useState<cafe | undefined>(undefined); //Se puede utilizar el tipo de dato de un objeto o undefined.
    
    //Interfaces
    interface battle {arena:string}
    interface battle {ki:number}

    const batalla: battle = {
        arena: "Planeta Namek",
        ki: 9001
    }

    //Interfaces con extends
    interface recetaBase {
        agua:number;
        cafe:number;
    }
    interface recetaAzucar extends recetaBase {
        azucar:number;
    }
    //Importante utilizar interfaz cuando queremos extender.
    //Las interfaces se fucionan entre si.
    //En type los nombres iguales representan un error.


    //Intersecciones
    type A = {nombre:string};
    type B = {edad:number};
    type C = A & B; //Interseccion de A y B
    const juan: C = {nombre:"Juan", edad:30};


    function prepararCafe(receta: receta):cafe{
        const intensidad = receta.cafe > 100 ? "fuerte" : receta.agua > 50 ? "medio" : "suave";
        return{
            mensaje: `Preparando café con ${receta.agua}ml de agua, ${receta.cafe}g de café y ${receta.azucar}g de azúcar.`,
            intensidad: intensidad
        }
    }

/* 
function prepararCafe({agua, cafe, azucar}: receta):cafe{
        const intensidad = cafe > 100 ? "fuerte" : agua > 50 ? "medio" : "suave";
        return{
            mensaje: `Preparando café con ${agua}ml de agua, ${cafe}g de café y ${azucar}g de azúcar.`,
            intensidad: intensidad
        }
    }
*/

    function OnCafe(){
        const resultado = prepararCafe({agua: 100, cafe: 50, azucar: 10});
        alert(resultado.mensaje)
    }

    interface cafePreparado { 
        mensaje:string;
        intensidad: "suave" | "fuerte";
    }

    function prepararCafe2(receta: recetaAzucar):cafePreparado{
        const intensidad: cafePreparado["intensidad"] = receta.cafe > 100 ? "fuerte" : "suave";
        return{
            mensaje : `Cafe listo con ${receta.agua} ml de agua, ${receta.cafe}g de cafe y ${receta.azucar}g de azucar.`,
            intensidad: intensidad
        }
    }

    function OnCafe2(){
        const resultado = prepararCafe2({agua: 100, cafe: 50, azucar: 10});
        alert(resultado.mensaje)
    }

    return(
        <div className="mx-auto max-w-4xl p-4 flex flex-col gap-4">
            <button className="bg-amber-950 text-white px-4 py-2 rounded hover:bg-amber-800" 
            onClick={OnCafe}>
                Hacer cafe.
            </button>
            <button className="bg-amber-950 text-white px-4 py-2 rounded hover:bg-amber-800" 
            onClick={OnCafe2}>
                Hacer cafe con azúcar.
            </button>
            <span> Modulo 2 </span>
            <span> Interfaz </span>
            {batalla.arena} - {batalla.ki}

            <span> State </span>
            <span> Intensidad: {intensidad} </span>
            <button className="bg-amber-950 text-white px-4 py-2 rounded hover:bg-amber-800" 
            onClick={() => setIntensidad("fuerte")}>
                Cambiar state
            </button>

            <span> Contador</span>
            <button onClick={dec}>-</button>
            <span>{count}</span>
            <button onClick={inc}>+</button>

            <h2>
                Intersecciones (&)
            </h2>
            {juan.nombre} - {juan.edad}
            
            <pre>{JSON.stringify(juan, null, 2)}</pre>
        </div>
    );
};