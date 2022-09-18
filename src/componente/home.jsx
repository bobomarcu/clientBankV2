import React from "react";
import {Link} from 'react-router-dom'
import LogoBar from "./defaultComponents/logoBar";
import Footer from "./defaultComponents/footer";

export default function Home(){

    return(

        <section>

            <LogoBar/>
            <div className="panel">
                    <h2>Welcome to Monopoly Online Bank</h2>
            </div>
            <div className="boxes">
                <Link to="/join-game" style={{textDecoration: 'none'}}>
                    <div className="box">
                        <div  className="boxOutline" >
                        
                                <div style={{backgroundColor:"Brown" , color:'white', borderStyle:'solid', borderColor:'black', borderWidth:'2px'}}>
                                    <h3 className="headingPX">Join Game</h3>     
                                </div>
                            
                            <p>Join a game room with your firends</p>
                        </div>
                    

                    </div>
                </Link>
                <Link to="/create-game" style={{textDecoration: 'none'}}>
                    <div className="box">
                        <div className="boxOutline">
                        
                                <div style={{backgroundColor:"Orange" , color:'white', borderStyle:'solid', borderColor:'black', borderWidth:'2px'}}>
                                    <h3 className="headingPX">Create Game</h3>     
                                </div>
                            
                            <p>Create a new game room</p>
                        </div>
                    

                    </div>
                </Link>
                <Link to="/user-guide" style={{textDecoration: 'none'}}>
                    <div className="box">
                        <div  className="boxOutline"  >
                        
                                <div style={{backgroundColor:"red" , color:'white', borderStyle:'solid', borderColor:'black', borderWidth:'2px'}}>
                                    <h3 className="headingPX">User Guide</h3>     
                                </div>
                            
                            <p>A guide designed for the new users</p>
                        </div>
                    

                    </div>
                </Link>
                <Link to="/about-us" style={{textDecoration: 'none'}}>
                    <div className="box">
                        <div className="boxOutline">
                            
                                <div style={{backgroundColor:"blue" , color:'white', borderStyle:'solid', borderColor:'black' , borderWidth:'2px'}}>
                                    <h3 className="headingPX">About Us</h3>
                                </div>
                            
                            <p>A page about our team :D</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="footer">
                <Footer/>
            </div>

        </section>


    )


}