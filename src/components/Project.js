import React from 'react';
import {Card, Row} from 'react-bootstrap';
import  img1 from "../assets/img1.png";
import remindBags from "../assets/remindBags.jpg";
import PG from "../assets/pG.png"
import Burger from "../assets/burger.png"
import Tlt from "../assets/tlt.png";
import Budget from "../assets/Budget.png";
import '../box.css'




function Project(){

    const projectInfo = [
        {
            
            img: PG,
            title: "Password Generator",
            desc: "Generates a random password",
            techno: "JavaScript",
            repoLink: "https://github.com/ThaliaRowan/password_Generator.github.io.git",
            pageLink: "https://thaliarowan.github.io/password_Generator.github.io/"
        },
        {
            
        img: img1,
        title: "Weather Dashboard",
        desc: "Displays weather forcast of current day and future five days for cities searched.",
        techno: "JavaScript, JQuery, OpenWeatherMap API",
        repoLink: "https://github.com/ThaliaRowan/weather_Dashboard.github.io.git",
        pageLink: "https://thaliarowan.github.io/weather_Dashboard.github.io/"
        },

        {
        img: remindBags,
        title: "Remember the bags",
        desc: "Reminds you to not leave your reusable plastic bag indide the car as you arrive at your grocery.",
        techno: "JavaScript, JQuery, OpenWeatherMap API, Google Maps API",
        repoLink: "https://github.com/dougdavidoff/bags.git",
        pageLink: "https://dougdavidoff.github.io/bags/index.html"
        },

        {
            img: Burger,
        title: "Eat-Da-Burger",
        desc: "Allows users to devour a burger and uneat it. This stores the users input into a database",
        techno: "Technologies used: JavaScript,JQuery, Nodejs,Mysql, Express, handlebars",
        repoLink: "https://github.com/ThaliaRowan/burger.git",
        pageLink: " https://glacial-falls-49922.herokuapp.com/"
        },

        {
            img: Tlt,
            title: "TLT",
            desc: "The TLT is a simple customer & employee facing to-go order application.",
            techno: "JavaScript, Node.js, Express, MySql, Handlebars",
            repoLink: "https://github.com/troylochner/tlt_deli.git",
            pageLink: "https://powerful-wave-95370.herokuapp.com/ "
            
        },

        {
            img: Budget ,
            title: "Budget-Tracking",
            desc:"This tracks the user's deposites and expenses. When offline, deposites and expenses are able to be entered and when brought back online, ofline entries will be added to the tracker.",
            techno: "MongoDB, Mongoose, Express",
            repoLink: "https://github.com/ThaliaRowan/Budget_Tracking.git",
            pageLink: "https://floating-savannah-93765.herokuapp.com/"
        }
    ]


    const projectCard = (card, index) => {
        return (
            <div>
                <Card className="box" style={{width: "18rem"}}  key={index}>
                <Card.Img className="card-img-top" src={card.img} style={{height: '100px' , maxWidth: '100%'}} alt="Card image cap" />
            <Card.Body>
            <Card.Title>{card.title}</Card.Title>
           
            <Card.Text><span>Description:</span>{card.desc}</Card.Text>
                <Card.Text><span>Technologies:</span>{card.techno}</Card.Text>
                <Row>
                <Card.Link href={card.repoLink} className="card-link">Project Github Repository</Card.Link>
                </Row>
            
            <Card.Link href={card.pageLink} className="card-link">Project deployed Page</Card.Link>
            </Card.Body>
                </Card>
            </div>
        );
    }


    return(
        <div className="grid">
            { projectInfo.map(projectCard)}
        </div>
    );
}


export default Project;