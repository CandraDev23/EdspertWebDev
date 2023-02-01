import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./footer-styles";

export default function Footer() {
    return (
        <Box style={{ backgroundColor: "#2D4059" }}>
            <Container>
                <h1 style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "-20px",
                    marginBottom: "1rem"
                }}>
                    Esdpert.id
                </h1>
                <p style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: "4rem"
                }}>
                    Thanks for visit our website
                </p>
            </Container>
            <Container>
                <Row>
                    <Column>
                        <Heading>Program</Heading>
                        <FooterLink href="#">Online Course</FooterLink>
                        <FooterLink href="#">Mini Bootcamp</FooterLink>
                        <FooterLink href="#">Bootcamp</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Bidang Ilmu</Heading>
                        <FooterLink href="#">Digital Marketing</FooterLink>
                        <FooterLink href="#">Product Management</FooterLink>
                        <FooterLink href="#">English</FooterLink>
                        <FooterLink href="#">Programming</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Tentang Edspert</Heading>
                        <FooterLink href="#">Bantuan</FooterLink>
                        <FooterLink href="#">Kontak kami</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <FaFacebook />
                            <span style={{ marginLeft: "10px" }}>
                                Facebook
                            </span>
                        </FooterLink>
                        <FooterLink href="#">
                            <FaInstagram />
                            <span style={{ marginLeft: "10px" }}>
                                Instagram
                            </span>
                        </FooterLink>
                        <FooterLink href="#">
                            <FaTwitter />
                            <span style={{ marginLeft: "10px" }}>
                                Twitter
                            </span>
                        </FooterLink>
                        <FooterLink href="#">
                            <FaYoutube />
                            <span style={{ marginLeft: "10px" }}>
                                Youtube
                            </span>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
            <Container>
                <p style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "4rem"
                }}>
                    Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
                </p>
                <p style={{
                    color: "white",
                    textAlign: "center",
                }}>
                    © 2023 Edspert Final Project - Candra Setiawan
                </p>
            </Container>
        </Box>
    );
};

