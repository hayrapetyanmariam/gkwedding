import React from 'react'
import { useState, useEffect } from 'react'

export const App = () => {

  const countdownDate = new Date("August 15, 2023 00:00:00").getTime();
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(countdownTimer);
        setCountdown("Countdown has ended!");
      } else {
        setCountdown(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
      }
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);


  return (
    <div>
             <div className="container">
        <div className="inner">
          <img src={process.env.PUBLIC_URL + '/images/unnamed.jpg'} alt="My Image" />
          <h2>Gor & Karine</h2>
          <div className="title">
            <p>Սիրով հրավիրում ենք Ձեզ մեր հարսանեկան արարողությանը։</p>
            <h3>15 ՕԳՈՍՏՈՍԻ 2023թ․</h3>
          </div>
          <div className="date">
            {countdown}
          </div>
          <div className="locations">
            <a href="https://www.google.com/maps/place/Lianna+Garden+Hall/@40.1649513,44.3920288,15z/data=!4m9!3m8!1s0x406abf20058b7395:0xc8881d319e6d89ca!5m2!4m1!1i2!8m2!3d40.1649513!4d44.3920288!16s%2Fg%2F11ktyzthbv?entry=ttu">
              Lianna Garden Hall
            </a> <br />
            <a href="https://www.google.com/maps/place/Bambakashat/@40.1054017,44.0180325,14z/data=!3m1!4b1!4m6!3m5!1s0x406ae5730aca1a0d:0x20ca31063a8ff2ae!8m2!3d40.1082397!4d44.0206741!16s%2Fm%2F04cv6m0?entry=ttu">
              Bambakashat St. Mariam Astsvatsatsin Church
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
