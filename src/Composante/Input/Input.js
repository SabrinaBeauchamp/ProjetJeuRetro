const Input = ({label, type, text, ChangeFn, choix, nameFn, value}) => {
    return(
        <>
            <h3 className="question">{text}</h3>
            { 
                type !== "text" ?
                    choix?.map(({nom, selected}, i) => ( 
                        <div key={nom+i}>
                            <label htmlFor={nom}>{nom}</label>
                            <input type={type} id={nom} name={nom} onChange={(e) =>ChangeFn(nom, label)} checked={selected}/>
                        </div>
                    ))
                    : 
                    <>
                        <input type={type} id={label} name={label}  onChange={(e) =>nameFn(e.target.value, label)} value={value}/>
                    </>
                    
            
            }
        </>
    )
}
export default(Input);