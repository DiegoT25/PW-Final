import "../css/Title.css"
const Title =(props) =>{
    const {text} = props;
    return(
        <div >
            <label>{text}</label>
        </div>
    )
}

export default Title;