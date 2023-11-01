type Chmal={
    id: string
}




const  Chmal=() => {

    return (
        <nav>

            <img src="./maphoto.jpg" id="tswira" alt="image de Massine" />
            <p id="smiti">Massine HARCHERAAS</p>
            <hr></hr>


            <h3>Contacts:</h3>
            <p className="contact">+212642244591</p>
            <p className="contact">massineharcherras@gmail.com</p>
            <p className="contact">Goulmima Rue Moussa Bnou Noussair NR 42</p>
            <hr></hr>

            <h3>Education</h3>
            <dl>
                <dt>2023-2024:</dt>
                <dd>E.I.O.R à école Mohammadia d'ingénieurs</dd>
                <dt>2022-2023:</dt>
                <dd>la deuxiéme année en CPGE à Zhrawi Rabat</dd>
                <dt>2021-2022:</dt>
                <dd>la premier année en CPGE à Errachidia</dd>
                <dt></dt>
            </dl>

            <hr></hr>

            <h3>Langues</h3>

            <h4>Francais</h4>
            <div className="progresBar">
                <div className="progrsFr">
                </div>
            </div>
            <h4>Arab</h4>
            <div className="progresBar">
                <div className="progrsAr">
                </div>
            </div>
            <h4>Anglais</h4>
            <div className="progresBar">
                <div className="progrsAn">
                </div>
            </div>

        </nav>
    );
}
export default Chmal