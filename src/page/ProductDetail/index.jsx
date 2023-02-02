import { Container } from "react-bootstrap";
import BannerDetail from "../../component/BannerDetail";
import Navbarr from "../../component/Navbar";
import Footer from "../../templates/Footer";

export default function ProductDetail() {
    return(
        <>
            <Navbarr />
            <BannerDetail />
            <div>
                <Container>
                    
                </Container>
            </div>
            <Footer />
        </>
    );
}