import { Container } from "react-bootstrap";
import Ciwi from "../../assets/Image/Ciwi.png";

export default function Bannerr() {
    return (
        <div style={{backgroundColor: "#2D4059"}}>
            <Container className="d-flex justify-content-center">
                <div className="row w-100 text-white align-items-center" style={{height: "76.9vh"}}>
                    <span className="col lh-lg">
                        <h1 className="mb-lg-4">Jadi expert bersama edspert.id</h1>
                        <p>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
                    </span>
                    <span className="col">
                        <svg className="position-absolute" style={{marginLeft: "12rem", right: "12rem", bottom: "4rem"}} width="343" height="410" viewBox="0 0 343 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 148V489.504H360.504L0 148Z" fill="#235597" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M200 234.879L422.5 234.879L422.5 3.60506e-05L200 234.879Z" fill="#FFCD29" />
                        </svg>
                        <img className="position-absolute" style={{width: "19rem", marginLeft: "12rem", right: "14rem", bottom: "4rem"}} src={Ciwi} alt="Ciwi" />
                    </span>
                </div>
            </Container>
        </div>
    );
}