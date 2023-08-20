import React from 'react'
import styled from "styled-components";
import { FaStar, FaStarHalfAlt} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
// import {far fa-star} from "";

const Testx = () => {
  return (
    <Wrapper>

    <div className="testiomon">

    <div className="inner">

        <h1>Testimonials</h1>

        <div className="border"></div>

        <div className="row">
            <div className="cols">
                <div className="testimonial">
                    {/* /peinding adding testimonials person */}
                    <img src="https://raw.githubusercontent.com/Hero777-tech/dep-tst/main/public/images/tesst3.png" alt="tes" />
                    <div className="namee">Ritik Roy</div>
                    <div className="mpx">
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    {/* <FaStar className="icons" /> */}
                    <FaStarHalfAlt className="icons" />
                    </div>
                    <p>
                    Digital Mark Agency exceeded my expectations! Their services propelled my social media presence to new heights. Exceptional results, highly recommended!
                    </p>
                </div>
                
            </div>


            <div className="cols">
                <div className="testimonial">
                    {/* /peinding adding testimonials person */}
                    <img src="https://raw.githubusercontent.com/Hero777-tech/dep-tst/main/public/images/tesst1.png" alt="tes" />
                    <div className="namee">Arden earl</div>
                    <div className="mpx">
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    </div>
                    {/* <FaStarHalfAlt className="icon" /> */}
                   <p>
                   Digital Mark provided exceptional insights that revolutionized my digital strategy. Their expertise amplified my brands reach. Highly grateful for their transformative guidance.
                   </p> 
                </div>
                
            </div>


            <div className="cols">
                <div className="testimonial">
                    {/* /peinding adding testimonials person */}
                    <img src="https://raw.githubusercontent.com/Hero777-tech/dep-tst/main/public/images/tesst2.png" alt="tes" />
                    <div className="namee">Suhani Saha</div>
                    <div className="mpx">
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    </div>
                    {/* <FaStarHalfAlt className="icon" /> */}
                    <p>
                    Choosing Digital Mark for SEO optimization was a game-changer! Suhani Saha here, and their service propelled my website visibility to new heights. Thrilled with the outstanding results and their expertise!
                    </p>
                </div>
                
            </div>







        </div>



    </div>






    </div>







    </Wrapper>
  );
};

//css section

const Wrapper = styled.section`


// *{
//     // background-color: red; //change this
//     margin:0;
//     padding:0;
// }

// .icons{
//     color: green;
//     margin-bottom: 20px;
//     margin-left: 3px;
//     // icon-size: 10px;
// }

// .testiomon{
//     padding:40px 0;
//     // background: yellow; //change this to #f1f1f1
//     background: #f1f1f1;
//     color: #434343;
//     // height: 3000px;
//     text-align: center;
// }

// .inner{
//     max-width: 1200px;
//     margin: auto;
//     overflow: hidden;
//     padding: 0 20px;

// }

// .border{
//     width: 160px;
//     height: 5px;
//     background: #8ab04c; // might take #6ab04c
//     margin: 26px auto;
// }

// .row{
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
// }

// .cols{
//     flex:33.33%; //99.9% x3 done
//     max-width: 33.33%;
//     box-sizing: box-model;
//     padding:15px;
// }


// .testimonial{
//     background: #fff;
//     padding: 30px;
//     height: 450px;
// }

// //.testimonial p{
// //     display:flex;
// //     justify-content:space-between;
// //     align-items:center;
// // }

// .testimonial img{
//     width:100px;
//     height: 100px;
//     border-radius: 50%;
// }

// .namee{
//     font-size: 20px;
//     text-transform: uppercase;
//     margin: 20px 0; 
// }

// // media_responsive section for the testimonials for mobile and tablet

// // @media screen and (max-width:960px){
// //     .col{
// //         flex:100%;
// //         max-width: 100%; 
// //     }
// // }

// @media (max-width: ${({ theme }) => theme.media.tab}) {
//     // .grid-three-column {
//     //   grid-template-columns: 1fr 1fr;
//     // }
//     col{
//         flex:100%;
//         max-width: 100%; 
//       }
//   }

// @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     // .grid-two-column,
//     // .grid-three-column {
//     //   grid-template-columns: 1fr;
      
//     // }
//     .col{
//         flex:100%;
//         max-width: 100%; 
//     }
//   }

//grid part for responsive workflow
* {
    margin: 0;
    padding: 0;
  }
  
  .icons {
    color: green;
    margin-bottom: 20px;
    margin-left: 3px;
  }
  mpx{
    display:flex;
    justify-content:space-between; //for showing stars in gird using flex
    align-items: center;
  }
  
  .testiomon {
    padding: 40px 0;
    background: #f1f1f1;
    color: #434343;
    text-align: center;
  }
  
  .inner {
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
    padding: 0 20px;
  }
  
  .border {
    width: 160px;
    height: 5px;
    background: #8ab04c;
    margin: 26px auto;
  }
  
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
  }
  
  .cols {
    padding: 15px;
  }
  
  .testimonial {
    background: #fff;
    padding: 30px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .testimonial img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  
  .namee {
    font-size: 20px;
    text-transform: uppercase;
    margin: 20px 0;
  }
  
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .row {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .row {
      grid-template-columns: 1fr;
    }
  }
  


`;

export default Testx