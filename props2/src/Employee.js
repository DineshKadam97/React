function Employee(props)
{
    return(
        <div style={{backgroundColor : "skyblue", margin:10}}>
            <h1 style ={{color:"orangered"}}>Name : {props.name}</h1>
            <h2 style ={{color:"black"}}>Email : {props.email}</h2>
        </div>
    )
}

export default Employee