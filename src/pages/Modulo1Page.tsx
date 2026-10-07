import { Link} from "react-router-dom";

export const Modulo1Page = () => {

    let saga:string = "Saga1";
    let horasEntrenamiento:number = 36;

    let guerrero:string = "Goku";
    let ki:number = 9001;
    let enCombate:boolean = true; //Con let se puede cambiar mientras que con Const no se puede cambiar el valor.

    const equipoZ:string[] = ["Goku", "Vegeta", "Piccolo"];

    const coordenadas: [number, number, string] = [10, 20, "tupla"]; //Tupla
    
    function calcularDanio(base:number, multiplicador:number):number{
        return base * multiplicador;
    }

    //Cambiar despues.
    let transformacion:string | null = null;
    transformacion = "Super Saiyan"; //Se puede cambiar el valor de la variable transformacion a un string, pero no a un number o booleano.

    //Valores any o unknown
    let valorAny:any = "Cualquier cosa";
    valorAny = 123; //Se puede cambiar el valor de la variable valorAny a cualquier tipo de dato.

    let eventoMayus:string | null = null;
    let valorUnknown:unknown = "Cualquier cosa";
    if(typeof valorUnknown === "string") {
        eventoMayus = valorUnknown.toUpperCase(); //Se puede cambiar el valor de la variable eventoMayus a un string, pero no a un number o booleano.
    }

    return(
        <main className="">
            <div className = "mx-auto max-w-4xl p-4">

                <header className="mb-8 border-neutral-800 pb-4">
                    <Link
                    to= "/" 
                    className="text-blue-500 hover:underline mb-4 inline-block"
                    >
                        Volver al inicio
                    </Link>
                    <h1 className="text-2xl font-bold">
                        Modulo 1
                    </h1>
                    <p className="text-lg text-gray-600">
                        Bienvenido al modulo 1
                    </p>
                </header>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Contenido del Módulo 1
                    </h2>
                    <div className="mt-4 text-gray-700 dark:text-gray-300">
                        <div>
                            Saga: {saga}
                        </div>
                        <div>
                            Horas de entrenamiento: {horasEntrenamiento}
                        </div>
                        <div>
                            Guerrero: {guerrero}
                        </div>
                        <div>
                            Ki: {ki}
                        </div>
                        <div>
                            En combate: {enCombate ? "Sí" : "No"}
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Arrays
                    </h2>
                    <div>
                        Equipo Z: {equipoZ.join(", ")}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Tuplas
                    </h2>
                    <div>
                        Coordenadas [num, num, string]: num1: {coordenadas[0]}, num2: {coordenadas[1]}, string: {coordenadas[2]} 
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Funciones Tipadas
                    </h2>
                    <div>
                        <p>Daño (base 450 x multiplo 2)</p>
                        {calcularDanio(450, 2)}
                    </div>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Tipo any y unknown
                    </h2>
                    <div>
                        Any: {valorAny}
                    </div>
                </section>
            </div>
        </main>
    );
}