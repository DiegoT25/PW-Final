import "./Input.css"

const Input =({props}) => {
    return (
        <div>
            <input id={props.id} name={props.name} placeholder={props.placeholder} type={props.type}>
                
            </input>
        </div>
    )

}

export default Input;