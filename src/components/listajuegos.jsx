function listajuegos({juegos}){
    return(
        <ul className="lista">
            {juegos.map((j)=>(
                <li key={j.id} className="item">
                    <span className="nombre">{j.nombre}</span>
                    <span className="categoria">{j.categoria}</span>
                    <span className="valor">{j.valor}</span>
                </li>
            ))}
        </ul>
    );
}

export default listajuegos;