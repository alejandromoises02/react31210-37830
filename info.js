/*
mount
update
unmount


mount 
    -constructor
    -render
    -componentDidMount

update
    -render
    -componentDidUpdate

unmount
    -componentWillUnmount
*/ 

/*
XHR - fecth
http 

Cliente - Servidor
Client - Server
Request - Response

Request
    -url
    -version
    -method:  GET, POST, PUT, DELETE 
    -headers
    -body


Response
    -Version
    -Status 200-201-302-304-400-401-404-500-501-504
    -Headers
    -Body

    fetch

*/

/*
CONTEXT:
-Hacer uso del createContext para crear nuestro contexto
const cartContext = createContext();

-Extraer el provider del contexto creado
opcion 1: const { Provider } = cartContext;
opcion 2: cartContext.Provider;

-Desde el componente a usar la data hacer uso del useContext
const {data} = useContext(cartContext);

-Crear el componente provider
const CartCustomProvider = ({ children }) => {retorna el contexto}

-Hacer uso del provider extraido del contexto y hacer uso del value para exponer el contexto
opcion 1: 
    <Provider value={{data del contexto}}>
        <CualquierComponente />
    </Provider>
opcion 2:
    <cartContext.Provider value={{data del contexto}}>
        <CualquierComponente />
    </cartContext.Provider>
*/

/*
procces: Es una variable "global" que me otroga informacion sobre la ejecucion del proyecto
 */



