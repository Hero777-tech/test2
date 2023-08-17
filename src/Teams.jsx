import React from 'react'
import styled from "styled-components";


const Teams = () => {


  return (
    <Wrapper>
        
    <div className="t-section">

        <div className="t-pic">
            <div className="t-ppc">
            <img src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" alt="" className="p-one"/>
            <p className="t-name"><strong>Ankit sukla</strong></p>
           </div>
            
           <div className="t-ppc">
            <img src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" alt="" className="p-one"/>
            <p className="t-name"><strong>Pankaj Tiwari</strong></p>
           </div>

           {/* <div className="t-ppc">
            <img src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" alt="" className="p-one"/>
            <p>ankit sukla</p>
           </div> */}


        </div>

        <div className="t-txt">
           
            <h1>MEET OUR TEAMS</h1>
            <p>Our team consist of more than 30 experienced
                and very<br/> passionate people at the cutting edge of
                all things digital <br/>marketing, we always give our best
                for you <br/>
            </p>
        </div>


    </div>




    </Wrapper>
  );
};

//css section

const Wrapper = styled.section`

// .t-section{
//     margin: 10px;
//     display:block;
//     // flex-direction: column;
//     // justify-content: space-between;
//     // align-itemm: center;
//     padding: 3px;
// }



.t-section{
    display: flex; /* Set display to flex */
    margin: 10px;
    padding: 3px;
    justify-content: space-around;
}

img{
    border-radius: 25% 25% 25% 25% / 25% 25% 25% 25%;
    width: 250px;
    border:4px solid;
    border-color:#E8A932;
    // border-radius: 50%; /* Set to 50% for a circular shape */
    overflow: hidden; /* Hide the overflow of the rounded shape */
    background-color: #f7f; /* Rounded background color */
    display: inline-block;
}
.t-ppc{
    // display:flex;
    // justify-content: space-evenly;
    // align-items: center;
    padding-left: 20px
}
.t-pic{
    display:flex;
    // justify-content: space-evenly;
    // align-items: center;
    // padding-left: 30px

}
.t-txt{
    display:block;
    // justify-content: space-between;
    // align-items: center;
}
p{
    margin:0px;
    margin-top:8px;
    font-size: 1.9em;
    color: #A89EFF;
    font-weight:450;
}

.t-name{
    text-align: center;
    font-weight: 200;
    color: black;
}
h1{
    color:#E9A932;
}

@media (max-width: 768px) {
    .t-section {
      display: none; /* Hide the section on mobile devices */
    }
  }
@media (min-width: 769px) and (max-width: 1024px) {
    .t-section {
      display: none; /* Hide the section on tablet devices */
    }
  }

`;




export default Teams;