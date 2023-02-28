const TextArea = ({label, type, text, ChangeFn, choix, nameFn}) => {
    return(
        <>
            <p className="question">{text}</p>
            <textarea id={label} name={label} rows="4" cols="50" onChange={ChangeFn}></textarea>
        </>
    )
}
export default(TextArea);