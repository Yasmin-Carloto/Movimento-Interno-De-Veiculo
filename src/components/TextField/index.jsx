import './TextField.css'

const TextField = (props) => {
    return(
        <div className="input-container">
            <label>{props.label}</label>
            <input onChange={(e) => props.handleChange(e)} required={props.required} name={props.name} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField