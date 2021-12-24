import React, { useEffect, useState } from "react";
import DotWaves from "../components/DotWaves";
import NavBar from "../components/NavBar";

const Clarin = () => {
    const [items, setItems] = useState([])
    const [DataisLoaded, dataStatus] = useState(false)

    useEffect(() => {
        fetch('https://newsscrapper-api.herokuapp.com/clarin')
            .then(res => res.json())
            .then(json => {
                setItems(json)
                items.length < 1 && dataStatus (true)
            })
    }, [])

    if (!DataisLoaded) return (
        <div>
            <NavBar header="Clarin" />
            <div className="container">
                <DotWaves />
            </div>
        </div>

    );


    return (
        <div>
            <NavBar header="Clarin" />
            <div className="news-container">{
                items.map(i => (
                    <a className="article" href={i.articleLink} key={i.id}>
                        <h3 className="article-title">{i.articleTitle}</h3>
                        <img className="article-image" src={i.articleImg} alt=""></img>
                    </a>
                ))
            }
            </div>
        </div>
    )


}

export default Clarin;