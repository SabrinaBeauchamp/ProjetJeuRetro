import "./Recent.scss";

const Recent = ({recent}) => {
    
    return (
        <>
            <section className="recent">
                <h2>Récents consulté</h2>
                <section>
                    {
                        Object.keys(recent).map(r => (
                        <article key={"recent"+r} className="boxRect">
                            <img src={"/img/Logos/"+recent[r].replace(' ', '')+".png"} alt={recent[r]} />
                        </article>

                        ))
                    }
                </section>
            </section>
        </>
    )
}
export default (Recent);