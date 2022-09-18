import React, { useEffect } from "react";
import { useState} from "react";
import Footer from "./defaultComponents/footer";
import LogoBar from "./defaultComponents/logoBar";
import axios from 'axios'
import './css/alertBox.css'


export default function Create(){

    const [nume , setNume ] = useState('')
    const [playerNumber , setPlayerNumber] = useState('')
    const [currency , setCurrency] = useState('')
    const [mesaj , setMesaj ] = useState('')
    const [displayState , setDisplayState] = useState('hide')

    const send = () =>{



        if(nume.length > 0 && playerNumber.length > 0){

            axios.get(`https://monopoly-bank-app.herokuapp.com/create-game/${nume}-${playerNumber}-${currency}`).then((res)=>{
                console.log(res)
            })

        }
        else{
                setDisplayState('show')
                setMesaj('Fields cannot be empty')
                    
                setTimeout(()=>{
                    setDisplayState('hide')
                    setMesaj('')
                }, 5000)
           
            // window.alert('Fields cannot be empty')

        }
        
       

    } 

    

    return(
        <section>
            <LogoBar/>
            <div className={displayState}>
                <p>{mesaj}</p>
            </div>
            <div className="boxes2">
               
                    <div className="box2">
                            <div className="boxOutline2">
                            
                                    <div style={{backgroundColor:"Orange" , color:'white', borderStyle:'solid', borderColor:'black', borderWidth:'2px'}}>
                                        <h3 className="headingPX">Create Game</h3>     
                                    </div>
                                <input className="inputField" 
                                type='text' 
                                placeholder="Game Room Name" 
                                name='nume'
                                onChange={(e)=>{
                                    setNume(e.target.value)
                                }}></input>
                                <br></br>
                                <input className="inputField" type='tel' placeholder="Number of Players (Max. 6)" name="PlayerNumber" onChange={(e)=>{
                                      if(e.target.value < 7){

                                        setPlayerNumber(e.target.value)

                                      }
                                      else{
                                        setDisplayState('show')
                                        setMesaj('Maximmum of 6 players')
                                            
                                        setTimeout(()=>{
                                            setDisplayState('hide')
                                            setMesaj('')
                                        }, 5000)
                                      }
                                    
                                }}></input>
                                <br></br>
                                <p style={{fontSize:'18px'}}>Style Currency:</p>
                                <select onChange={(e)=>{
                                    setCurrency(e.target.value)
                                }}>
                                    <option value="1">$</option>
                                    <option value="2">Lei</option>
                                </select>
                                <br></br>
                                <button onClick={send}>Create Game!</button>
                                <br></br>
                                <button>Home</button>
                            </div>
                        </div>
                </div>


            <footer className="footer">
                <Footer/>
            </footer>
        </section>
    )
}