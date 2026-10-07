import { Link } from "react-router-dom";

export const HomePage = () => {
    const modules =[
        {
            id:1,
            title:"Modulo 1",
            description:"Este es el modulo 1",
            path:"/modulo1"
        },
        {
            id:2,
            title:"Modulo 2",
            description:"Este es el modulo 2",
            path:"/modulo2"
        },
    ]

    return(
        <main className="flex justify-center items-center h-screen">
            <section className="flex flex-col gap-4">
                <header className="text-2xl font-bold">
                    <h1>
                        React + TypeScript 
                    </h1>
                    <p className="text-lg text-gray-600">
                        Primera aplicacion con react y typescript.
                    </p>
                </header>
                <nav>
                {modules.map((item) => (
                    <Link to={item.path} key={item.id} className="group block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="flex items-center gap-4">
                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Módulo
                                </span>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {item.title}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
                </nav>
            </section>
        </main>
    );
};