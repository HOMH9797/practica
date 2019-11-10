export default (props) =>(
    <div>
        <div>
            <h2>Clases de {props.nombre}</h2>
            <ul>
                {props.clase.map(
                    e =>{
                        return  <li>{e.first_name}</li>
                    }
                )}
            </ul>
        </div>
    </div>
)