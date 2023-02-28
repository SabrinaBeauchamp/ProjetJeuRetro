const Input = ({label, type, text, ChangeFn, choix, nameFn}) => {
    return(
        <>
            <p className="question">{text}</p>
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
                        <input type={type} id={label} name={label}  onChange={(e) =>nameFn(e.target.value, label)}/>
                    </>
                    
            
            }
        </>
    )
}
export default(Input);