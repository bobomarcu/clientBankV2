import React from "react";
import LogoBar from "./defaultComponents/logoBar";
import Cookies from 'universal-cookie'
import './css/input.css'
import Footer from "./defaultComponents/footer";
import { Link } from "react-router-dom";

export default function Join(){

    const cookies = new Cookies()

    if(cookies.get('loggedin')){
        return(
            <section>
                <LogoBar/>
            </section>
        )
    }
    else{
        return(
            <section>
                <LogoBar/>
                <br></br>
                <div className="boxes2">
                    <div className="box2">
                            <div className="boxOutline2">
                            
                                    <div style={{backgroundColor:"Brown" , color:'white', borderStyle:'solid', borderColor:'black', borderWidth:'2px'}}>
                                        <h3 className="headingPX">Join Game</h3>     
                                    </div>
                                <input className="inputField" placeholder="Game Room Link"></input>
                                <br></br>
                                <input className="inputField" placeholder="Name"></input>
                                <br></br>
                                <button>Join Game!</button>
                                <br></br>
                                <Link to='/'><button>Home</button></Link>
                            </div>
                        </div>
                </div>
                <footer className="footer">
                    <Footer/>
                </footer>
                
            </section>
            
        )
    }


   
}