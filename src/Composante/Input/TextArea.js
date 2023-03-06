const TextArea = ({label, type, text, ChangeFn, choix, nameFn}) => {
    return(
        <div className="textArea">
            <h3 className="question">{text}</h3>
            <textarea id={label} name={label} rows="4" cols="50" onChange={ChangeFn}></textarea>
        </div>
    )
}
export default(TextArea);