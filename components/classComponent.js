export default (props) => (
    
        <div style={{display:"flex"}}>
            <h2>Clases de {props.nombre}: </h2>
                {props.clase.map(
                    e => {
                        return (
                            <div>
                                <p>
                                    <img src={e.foto} alt="Aqui va la foto si tuviera una"></img>
                                    {e.first_name}
                                </p>
                            </div>
                        )
                    }
                )}
        </div>
)