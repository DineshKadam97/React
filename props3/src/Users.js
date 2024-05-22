export function Users(props) {
    return (
        <div style={{ backgroundColor: "lightblue" }}>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <button onClick={props.data}>Click Me!</button>
            <button onClick={props.namee}>Update Name</button>
        </div>
    )
}