import React, { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBBtn,
    MDBIcon,
} from 'mdb-react-ui-kit';
import Slider from 'react-slick';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

import Profile from '../Image/profile.jpg';
import ReactImage from '../Image/react.png'
import Vue from '../Image/vue.png';
import Laravel from '../Image/laravel.png';
import JavaScript from '../Image/javascript.png';
import PHP from '../Image/php.png';
import MySQL from '../Image/mysql.png';
import Mongo from '../Image/mongo.png';
import API from '../Image/api.png';
import HTML from '../Image/html.png';
import CSS from '../Image/css.png';
import GitHub from '../Image/github.png';
import CV from '../Pdf/Ari_cv.pdf';



const HomePage = () => {
    const setting = {
        centerMode: false,
        dots: false,
        infinite: true,
        speed: 25,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
    };

    const project = [
        {
            "name": 'FlipFlopTV',
            "desc" : "An OTT platform that provides interesting shows for entertainment from series, short films and movies",
            "img": "image/project/flipfloptv.png",
            "url": "https://flipfloptv.id",
        },
        {
            "name": 'Proworker',
            "desc": "A platform based in Bekasi, West Java, for job seekers and seekers for skilled workers, especially those working in the oil and gas sector",
            "img": "image/project/proworker.png",
            "url": "https://proworker.co.id",
        },
        {
            "name": 'Body Gravity',
            "desc": "company profile platform and system for attendance, payroll, scoliosis data collection",
            "img": "image/project/body_gravity.png",
            "url": "https://body-gravity.com",
        },
        {
            "name": "SKPR Asia",
            "desc": "the platform provides several products and public relations",
            "img": "image/project/skpr_asia.png",
            "url": "https://skpr.asia",
        },
        {
            "name": "UMKM Volley Gunadarma",
            "desc": "Gunadarma Volleyball UMKM Portal",
            "img": "image/project/oca.png",
            "url": null,
        },
        {
            "name": "Caleb Technology",
            "desc": "company profile, CMS, and Recruiting System",
            "img": "image/project/caleb.png",
            "url": "https://caleb-technology.com",
        }
    ];

    const handleButtonUrl = (e, url) => {
        e.preventDefault();
        window.open(url, '_blank', 'noreferrer');
        console.log(url);
    }

    const handlePdfButton = async() => {
        window.open(CV, '_blank', 'noreferrer');
    }

    return(
        <>
            <MDBContainer>
                <MDBRow className="mt-5">
                    <MDBCol size="8" className="d-flex align-items-center">
                        <div>
                            <MDBRow>
                                <MDBCol size="12">
                                    <span className="text-white" style={{ fontSize: "50px", fontWeight: 600}}>Ari Pratama Putra (Ari)</span>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <span className="text-white">Fullstack Developer Using PHP Laravel for Backend and React JS for Frontend. Experience with Web Apps development (PHP And Javascript), Mobile Apps Development (React Native, and Flutter). really like challenges and adapting to new technology.</span>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mt-4">
                                <MDBCol size="12">
                                    <MDBBtn color="warning" className="text-capitalize shadow-0" onClick={handlePdfButton}>
                                        <MDBIcon icon="download" />
                                        &nbsp;&nbsp;Download My CV
                                    </MDBBtn>
                                    <MDBBtn outline color="warning" className="text-capitalize shadow-0" style={{ marginLeft: "30px"}} onClick={(event) => handleButtonUrl(event, 'https://api.whatsapp.com/send/?phone=6281272317198')}>
                                        <MDBIcon icon="fas fa-phone" />
                                        &nbsp;&nbsp;Contact Me
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCol>
                    <MDBCol size="4">
                        <img src={Profile} className="w-100 rounded-circle" />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-5">
                    <Slider {...setting}>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={ReactImage} style={{ height: "100px"}} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={Vue} style={{ height: "100px" }} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={Laravel} style={{ height: "100px" }} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={JavaScript} style={{ height: "100px" }} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={PHP} style={{ height: "100px" }} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={MySQL} style={{ height: "100px" }} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={Mongo} style={{ height: "100px"}} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={API} style={{ height: "100px" }} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={HTML} style={{ height: "100px" }} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={CSS} style={{ height: "100px" }} />
                        </MDBCol>
                        <MDBCol size="4" className="d-flex justify-content-center">
                            <img src={GitHub} style={{ height: "100px" }} />
                        </MDBCol>
                    </Slider>
                </MDBRow>
                <MDBRow style={{ marginTop: "100px" }}>
                    <MDBCol size="12" className="d-flex justify-content-center">
                        <h2 className="text-white">My Portofolio</h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="12">
                        <hr />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-5">
                    {project.map(data => (
                        <MDBCol size="4" className="mb-4">
                            <MDBCard className="bg-dark h-100">
                                <MDBCardImage src={data.img}/>
                                <MDBCardBody className="bg-dark d-flex align-items-start flex-column">
                                    <div>
                                        <MDBRow>
                                            <MDBCol size="12">
                                                <span className="text-white" style={{fontSize: "20px", fontWeight: 600}}>{data.name}</span>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="mb-5">
                                            <MDBCol size="12">
                                                <span className="text-muted" style={{fontSize: "13px"}}>{data.desc}</span>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <MDBRow className="mt-auto mx-auto">
                                        <MDBCol size="12">
                                            {data.url != null ? (
                                                <MDBBtn color="warning" className="shadow-0 rounded text-capitalize" onClick={(event) => handleButtonUrl(event, data.url )} >Check Website</MDBBtn>
                                            ):(
                                                <MDBBtn color="warning" className="shadow-0 rounded text-capitalize text-white" onClick={(event) => handleButtonUrl(event, data.url )} disabled>Progress</MDBBtn>
                                            )}
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
                <MDBRow className="mt-4">
                    <MDBCol size="12 d-flex justify-content-center">
                        <MDBBtn color="warning" className="text-capitalize" onClick={(event) => handleButtonUrl(event, 'https://github.com/myari211')}>
                            <MDBIcon fab icon="github" style={{ marginRight: "15px" }} />
                            Check My Github
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow style={{marginTop: "100px"}}>
                    <MDBCol size="12">
                        <h2 className="text-white d-flex justify-content-center">
                            Let's Connect
                        </h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="12">
                        <hr />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center mt-4">
                    <MDBCol size="8" className="d-flex justify-content-between">
                        <MDBBtn className="p-2 rounded-circle" color="dark border" onClick={(event) => handleButtonUrl(event, 'https://github.com/myari211')}>
                            <MDBIcon fab icon='github' style={{fontSize: "50px"}}/>
                        </MDBBtn>
                        <MDBBtn className="p-2 rounded-circle" color="primary border" onClick={(event) => handleButtonUrl(event, 'https://www.linkedin.com/in/myari211/')}>
                            <MDBIcon fab icon='linkedin' style={{fontSize: "50px"}}/>
                        </MDBBtn>
                        <MDBBtn className="p-2 rounded-circle" color="danger border" onClick={(event) => handleButtonUrl(event, 'https://instagram.com/ari_pratama04')}>
                            <MDBIcon fab icon='instagram' style={{fontSize: "50px"}} />
                        </MDBBtn>
                        <MDBBtn className="p-2 rounded-circle" color="success border">
                            <MDBIcon fab icon='whatsapp' style={{fontSize: "50px"}} onClick={(event) => handleButtonUrl(event, 'https://api.whatsapp.com/send/?phone=6281272317198')}/>
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-4">
                    <MDBCol size="12 d-flex justify-content-center">
                        <span className="text-white">2023 &copy; Ari Pratama Putra</span>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );

}


export default HomePage