// import { useState } from 'react'
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { Flip } from "gsap/Flip";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Header from './components/Header'
import './App.css'
import nike from './assets/nike.webp'
import shoe1 from './assets/shoes/shoe1.webp'
import shoe1_sub1 from './assets/shoes/shoe1-sub1.png'
import shoe1_sub2 from './assets/shoes/shoe1-sub2.png'
import shoe1_sub3 from './assets/shoes/shoe1-sub3.png'
import shoe2 from './assets/shoes/shoe2.webp'
import shoe2_sub1 from './assets/shoes/shoe2-sub1.png'
import shoe2_sub2 from './assets/shoes/shoe2-sub2.png'
import shoe2_sub3 from './assets/shoes/shoe2-sub3.png'
import shoe3 from './assets/shoes/shoe3.png'
import shoe3_sub1 from './assets/shoes/shoe3-sub1.png'
import shoe3_sub2 from './assets/shoes/shoe3-sub2.png'
import shoe3_sub3 from './assets/shoes/shoe3-sub3.png'
import shoe4 from './assets/shoes/shoe4.webp'
import shoe4_sub1 from './assets/shoes/shoe4-sub1.png'
import shoe4_sub2 from './assets/shoes/shoe4-sub2.png'
import shoe4_sub3 from './assets/shoes/shoe4-sub3.png'
import shoe5 from './assets/shoes/shoe5.webp'
import shoe5_sub1 from './assets/shoes/shoe5-sub1.png'
import shoe5_sub2 from './assets/shoes/shoe5-sub2.png'
import shoe5_sub3 from './assets/shoes/shoe5-sub3.png'

import circle_shoe1 from './assets/circle/1.webp'
import circle_shoe2 from './assets/circle/2.webp'
import circle_shoe3 from './assets/circle/3.webp'
import circle_shoe4 from './assets/circle/4.webp'
import circle_shoe5 from './assets/circle/5.webp'

function App() {
  function handle_click(num){
    document.querySelector(".rect-position1").classList.remove("rect-active")
    document.querySelector(".rect-position2").classList.remove("rect-active")
    document.querySelector(".rect-position3").classList.remove("rect-active")
    document.querySelector(".rect-position4").classList.remove("rect-active")
    document.querySelector(".rect-position5").classList.remove("rect-active")

    document.querySelector(".control-circle").classList.remove("circle1")
    document.querySelector(".control-circle").classList.remove("circle2")
    document.querySelector(".control-circle").classList.remove("circle3")
    document.querySelector(".control-circle").classList.remove("circle4")
    document.querySelector(".control-circle").classList.remove("circle5")
    if(num == 1){
      document.querySelector(".rect-position1").classList.add("rect-active")
      document.querySelector(".control-circle").classList.add("circle1")
    }
    if(num == 2){
      document.querySelector(".rect-position2").classList.add("rect-active")
      document.querySelector(".control-circle").classList.add("circle2")
    }
    if(num == 3){
      document.querySelector(".rect-position3").classList.add("rect-active")
      document.querySelector(".control-circle").classList.add("circle3")
    }
    if(num == 4){
      document.querySelector(".rect-position4").classList.add("rect-active")
      document.querySelector(".control-circle").classList.add("circle4")
    }
    if(num == 5){
      document.querySelector(".rect-position5").classList.add("rect-active")
      document.querySelector(".control-circle").classList.add("circle5")

    }
    
  }
  function change_pos(num){
    
  }
  const han = (num)=>{
    const element = document.querySelector(`.shoe-main`)
    const our_element = document.querySelector(`#shoe${num}`)
    const subshoe = document.querySelectorAll('.shoe-sub-img-new')
    const sub1_replace = document.querySelector(`#shoe${num}-sub1`)
    const sub2_replace = document.querySelector(`#shoe${num}-sub2`)
    const sub3_replace = document.querySelector(`#shoe${num}-sub3`)
    console.log(`#shoe${num}_sub3`)


    // gsap.to("shoe-main-top",{
    //   y:1000,
    //   duration:1.5,
    // })

    // gsap.to(`#shoe${num}`,{
    //   y:-1000,
    //   rotation:0,
    //   duration:1.5,
    //   // onComplete:change_pos(num),
    // })
    
    our_element.classList.add("shoe-main")
    if(our_element.classList.contains("shoe-main-bot")){
      our_element.classList.remove("shoe-main-bot")
      element.classList.add("shoe-main-top")
      element.classList.remove("shoe-main")

      subshoe[0].classList.add("shoe-sub-img-new-top")
      subshoe[0].classList.remove("shoe-sub-img-new")
      subshoe[1].classList.add("shoe-sub-img-new-top")
      subshoe[1].classList.remove("shoe-sub-img-new")
      subshoe[2].classList.add("shoe-sub-img-new-top")
      subshoe[2].classList.remove("shoe-sub-img-new")
      sub1_replace.classList.add("shoe-sub-img-new")
      sub1_replace.classList.remove("shoe-sub-img-new-bot")
      sub2_replace.classList.add("shoe-sub-img-new")
      sub2_replace.classList.remove("shoe-sub-img-new-bot")
      sub3_replace.classList.add("shoe-sub-img-new")
      sub3_replace.classList.remove("shoe-sub-img-new-bot")
    }
    else if(our_element.classList.contains("shoe-main-top")){
      our_element.classList.remove("shoe-main-top")
      element.classList.add("shoe-main-bot")
      element.classList.remove("shoe-main")

      subshoe[0].classList.add("shoe-sub-img-new-bot")
      subshoe[0].classList.remove("shoe-sub-img-new")
      subshoe[1].classList.add("shoe-sub-img-new-bot")
      subshoe[1].classList.remove("shoe-sub-img-new")
      subshoe[2].classList.add("shoe-sub-img-new-bot")
      subshoe[2].classList.remove("shoe-sub-img-new")
      sub1_replace.classList.add("shoe-sub-img-new")
      sub1_replace.classList.remove("shoe-sub-img-new-top")
      sub2_replace.classList.add("shoe-sub-img-new")
      sub2_replace.classList.remove("shoe-sub-img-new-top")
      sub3_replace.classList.add("shoe-sub-img-new")
      sub3_replace.classList.remove("shoe-sub-img-new-top")
    }
    handle_click(num)
  }

  return (
    <>
      <Header/>
      <div>
      <p className='nike'>NIKE</p>

      <div className='container'>
      <img className='nike-background' src={nike}></img>
      </div>

      <div className='shoe-container'>
        {/* <div className='shoe-main-container'> */}
        <img className='shoe-main' id='shoe3' src={shoe3}></img>
        <img className='shoe-main-bot' id='shoe1' src={shoe1}></img>
        <img className='shoe-main-bot' id='shoe2' src={shoe2}></img>
        <img className='shoe-main-bot' id='shoe4' src={shoe4}></img>
        <img className='shoe-main-bot' id='shoe5' src={shoe5}></img>
        {/* </div> */}
        <div className='shoe-sub-container'>
          <div className='shoe-sub1'>
            <div className='sub-container'>
              <img className='shoe-sub-img-new' id='shoe3-sub3' src={shoe3_sub3}></img>
              <img className='shoe-sub-img-new-bot' id='shoe5-sub3' src={shoe5_sub3}></img>
              <img className='shoe-sub-img-new-bot' id='shoe4-sub3' src={shoe4_sub3}></img>
              <img className='shoe-sub-img-new-bot' id='shoe2-sub3' src={shoe2_sub3}></img>
              <img className='shoe-sub-img-new-bot' id='shoe1-sub3' src={shoe1_sub3}></img>
            </div>
          </div>
          <div className='shoe-sub2'>
            <div className='sub-container'>
              <img className='shoe-sub-img-new' id='shoe3-sub2' src={shoe3_sub2}></img>
              <img className='shoe-sub-img-new-bot' id='shoe5-sub2' src={shoe5_sub2}></img>
              <img className='shoe-sub-img-new-bot' id='shoe4-sub2' src={shoe4_sub2}></img>
              <img className='shoe-sub-img-new-bot' id='shoe2-sub2' src={shoe2_sub2}></img>
              <img className='shoe-sub-img-new-bot' id='shoe1-sub2' src={shoe1_sub2}></img>
            </div>
          </div>
          <div className='shoe-sub3'>
            <div className='sub-container'>
              <img className='shoe-sub-img-new' id='shoe3-sub1' src={shoe3_sub1}></img>
              <img className='shoe-sub-img-new-bot' id='shoe5-sub1' src={shoe5_sub1}></img>
              <img className='shoe-sub-img-new-bot' id='shoe4-sub1' src={shoe4_sub1}></img>
              <img className='shoe-sub-img-new-bot' id='shoe2-sub1' src={shoe2_sub1}></img>
              <img className='shoe-sub-img-new-bot' id='shoe1-sub1' src={shoe1_sub1}></img>
            </div>
          </div>
        </div>
      
      </div>
      <div className='shoe-info'>
        <h1>Nike Impact</h1>
        <p>$250.90</p>
        <div className='color'>
          <p>Colors</p>
          <button className='color-button' id='white'></button>
          <button className='color-button' id='red'></button>
          <button className='color-button' id='green'></button>
          <button className='color-button' id='black'></button>
        </div>
        
        <div className='size'>
          <p>Size</p>
          <button className='size-button active'>6</button>
          <button className='size-button'>7</button>
          <button className='size-button'>8</button>
          <button className='size-button'>9</button>
        </div>
        <button className='buy-button'>BUY</button>
      </div>
      </div>
      
      <div className='circle-selector'>
          <div className='control-circle'>
          <div className='circle'></div>
          </div>

          <div onClick={()=>han(1)} className='rect rect-position1'>
            <img src={circle_shoe1} className='rect-img'></img>
          </div>
          <div onClick={()=>han(2)} className='rect rect-position2'>
            <img src={circle_shoe2} className='rect-img'></img>
          </div>
          <div onClick={()=>han(3)} className='rect rect-position3 rect-active'>
            <img src={circle_shoe3} className='rect-img'></img>
          </div>
          <div onClick={()=>han(4)} className='rect rect-position4'>
            <img src={circle_shoe4} className='rect-img'></img>
          </div>
          <div onClick={()=>han(5)} className='rect rect-position5'>
            <img src={circle_shoe5} className='rect-img'></img>
          </div>
      </div>
    </>
  )
}

export default App
