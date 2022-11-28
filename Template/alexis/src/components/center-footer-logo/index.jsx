import FooterLogo from "../../components/footer-logo";

function CenterFooterLogo() {
    return (
        <div>
            <div className="center-footer-logo">
                <FooterLogo
                    image={`${process.env.PUBLIC_URL}/img/footer-logo.png`}
                />
                <p className="text-wrap">
                    Bacon ipsum dolor amet jerky tenderloin pastrami drumstick leberkas venison bresaola shank tail, ham t-bone sirloin corned beef spare ribs. 
                    Jerky tongue chicken, ribeye frankfurter capicola strip steak pork belly pastrami shoulder.
                    Cupim tail andouille capicola, filet mignon chuck leberkas ground round. 
                    Venison ribeye meatloaf flank porchetta meatball.
                    Tail strip steak brisket spare ribs kielbasa ribeye pork chop shank drumstick turducken chuck capicola meatball beef ribs alcatra. 
                    Pig corned beef tail, strip steak tenderloin jerky jowl cow.
                </p>
            </div>
        </div>
    );
}

export default CenterFooterLogo;