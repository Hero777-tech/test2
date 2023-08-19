import React from 'react'
import styled from "styled-components";
// import { Button } from "./styles/Button";
import { NavLink } from 'react-router-dom';


const Teams = () => {


  return (
    <Wrapper>
        
    <div className="t-section">

        <div className="t-pic">
            <div className="t-ppc">
            <img src="https://media.istockphoto.com/id/627909282/photo/trust-in-our-business.jpg?s=612x612&w=0&k=20&c=q-hm6in8qxi4wcJoicAlmusSlut7CIjKuOkn2F0BFh0=" alt="digital mark CEO" className="p-one"/>
            <p className="t-name">Rishti Dey</p>
            <h3>Chief Executive Officer</h3>
           </div>
            
           <div className="t-ppc">
            <img src="https://raw.githubusercontent.com/Hero777-tech/dep-tst/main/public/images/HR_manager_DigitalMark.png" alt="digital mark HR" className="p-one"/>
            <p className="t-name">Pankaj Tiwari</p>
            <h3>Human Resource Manager</h3>
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
                for you.
            </p>
            <button className="btxl">
                <NavLink to="/test2/contact" className="yo">CONTACT US</NavLink>
            </button>
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
margin-top:80px;
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
    padding-left: 20px;
    text-align:center;
}

.t-ppc p{
    text-align:center;
    font-weight: 510;
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
    margin-top:0px;
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

.t-ppc{
    color:#E8A932;
    text-align:center;
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

// revoking global styles with updation 1st preference;

.btxl{
  text-decoration: none;
  font-color:green;
//   max-width: auto;
  background-color:#fd6f00;
//   color: rgb(255 255 255 );
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
//   -webkit-transition: all 0.3s ease 0s;
//   -moz-transition: all 0.3s ease 0s;
//   -o-transition: all 0.3s ease 0s;
  color:white;
  border-radius:8% ;
  margin-top:22px;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
}

.yo{
    color:white;
}



`;




export default Teams;