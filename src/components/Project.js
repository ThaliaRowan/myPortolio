import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import '../box.css'




function Project(){

    const projectInfo = [
        {
        title: "Weather Dashboard",
        techno: "JavaScript, Html/CSS, OpenWeatherMap API",
        repoLink: "https://github.com/ThaliaRowan/weather_Dashboard.github.io.git",
        pageLink: "https://thaliarowan.github.io/weather_Dashboard.github.io/"
        },
        {
        title: "Employee-Tracker",
        techno: "Express, Node.js, MySql, Javascript",
        repoLink: "https://github.com/ThaliaRowan/Employee-Tracker.git",
        pageLink: "https://drive.google.com/file/d/11CpR5E_l7QoR_N_r2SAjm7L-R93AzBD9/view"
        },
        {
            title: "Bags",
            techno: "JavaScript, OpenWeatherMap API, GoogleMaps API",
            repoLink: "https://github.com/dougdavidoff/bags.git",
            pageLink: "https://dougdavidoff.github.io/bags/index.html"
            },
            
        {
            title: "Burger",
            techno: "Express, Node.js, MySql, Handlebars",
            repoLink: "https://github.com/ThaliaRowan/burger.git",
            pageLink: "https://glacial-falls-49922.herokuapp.com/"
            },
            {
                title: "Note_Taker",
                techno: "Express, Node.js, MySql",
                repoLink: "https://github.com/ThaliaRowan/Note_Taker.git",
                pageLink: "https://glacial-chamber-52815.herokuapp.com/"
                }
    

    ]


    const projectCard = (card, index) => {
        return (
            <div style={{padding: "20px"}}>
                <Card className="box" style={{width: "18rem"}}  key={index}>
            <Card.Body>
            <Card.Title style={{textAlign:"center"}}>{card.title}</Card.Title>
            <Card.Text style={{textAlign:"center"}}>This Uses:</Card.Text>
            <Card.Text style={{textAlign:"center"}} >{card.techno}</Card.Text>
                <Row>
                    <Col>
                    <Card.Link href={card.repoLink} className="github" style={{textAlign:"center"}}><span>Github Repo</span></Card.Link>
                    </Col>
                
                </Row>
            <Row>
                <Col style={{textAlign:"center", padding: "20px"}} >
                <Card.Link href={card.pageLink} className="btn btn-secondary btn-lg" id="view" role="button">Demo</Card.Link>
                </Col>
            </Row>
           
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