import React from 'react'
import styled from "styled-components";
import { Button } from "./styles/Button";
import {FaExternalLinkAlt} from "react-icons/fa"


const Protf = () => {
  return (
    <Wrapper>

    {/* portfolio section and representation of projects been done by company */}

    <div id="portfolio">
      <div id="container">
        <h1 className="sub-title">CLIENTS</h1>
        <div className="work-list">

          <div className="work">
            <img src="https://raw.githubusercontent.com/Hero777-tech/dep-tst/main/public/images/comp1.png" alt="Digital Mark portfolio" />

            <div className="layer">
              <h3>AD Design</h3>
              <p>Elevate your brand with eye-catching AD designs. We craft impactful visuals using 
                tools like Canva, blending vibrant colors and modern fonts to captivate your audience.</p>
              <a href="https://github.com/Hero777-tech" target='0'><FaExternalLinkAlt className="icons" /></a>
            </div>

          </div>

          <div className="work">
            <img src="https://raw.githubusercontent.com/Hero777-tech/dep-tst/main/public/images/comp2.png" alt="Digital Mark portfolio" />

            <div className="layer">
              <h3>Website Design</h3>
              <p>Elevate your brand with captivating website design. Crafted using tools
                like Wix and Wordpress moreover in this we will use react HTML5 and CSS.
              </p>
              <a href="https://github.com/Hero777-tech" target='0'><FaExternalLinkAlt className="icons" /></a>
            </div>



          </div>

          <div className="work">
            <img src="https://raw.githubusercontent.com/Hero777-tech/dep-tst/main/public/images/comp3.png" alt="Digital Mark portfolio" />

            <div className="layer">
              <h3>AI Chatbot Marketing</h3>
              <p>Elevate engagement with our AI Chatbot. Powered by Chatfuel,
                it comes handy with user interaction, collect insights, furthermore
                it refines strategies based on valuable feedbacks. 
              </p>
              <a href="https://www.linkedin.com/in/aditya-nath-453341221/"target='0'><FaExternalLinkAlt className="icons" /></a>
            </div>




          </div>



        </div>

        <a href="/test2/contact/" className="btx">See more</a>
      </div>
    </div>





    </Wrapper>
  );
};

const Wrapper = styled.section`

#portfolio{
  padding:50px 10px;
  // margin: 20px;
  background:#f1f1f1;
  text-align:center;
}

.work-list{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  // grid-template-columns: reoeat(auto-fit, mimax(250px, 1fr)); error one fixed ^
  grid-gap: 40px;
  margin-top:50px;
}

.work{
  border-radius:10px;
  position:relative;
  overflow:hidden;
}

.work img{
  width:100%;
  border-radius: 10px;
  display: block;
  transition: transform 0.7s; //for the hover to show the hidden one
}

.layer{
  width:100%;
  // height:100%; as we need to hide it and when hover we will reveal this
  height:0;
  // background:linear-gradient(rgba(0,0,0,0),#f9f);
  // background:linear-gradient(rgba(0,202,20,2),#f9f);
  background:linear-gradient(rgba(0,0,0,0.5),#ffc966);

  border-radius:10px;
  position:absolute;
  left: 0;
  bottom: 0;
  overflow:hidden;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  font-size:14px;
  transition: height 0.5s; //for the hover one to display
}

.layer h3{
  font-weight: 600;
  margin-bottom: 20px;
  color:#FFA500;
}

.layer p{ 
  font-weight: 500;
  // bottom-shadow: 20px;
  // color:#fff;
  color:#FFF;
  font-size:18px;

}

.layer a{
  margin-top: 20px;
  // color: #ff4f;
  color: #FFA500;
  text-decoration: none;
  font-size:18px;
  line-height:60px;
  background: #fff;
  width:60px;
  height:60px;
  border-radius:50%;
  text-align:center;
}

.work:hover img{
  transform: scale(1.1);
}

.work:hover .layer{
  height:100%;
}

.btx{
  display:block;
  margin:50px auto;
  width: fit-content;
  border:1px solid #FE4500;
  padding: 14px 50px;
  border-radius: 6px;
  text-decoration: none;
  color: #FFf;
  background:#6254F3;
  transition:background 0.5s;
  font-size:18px;
}

.btx:hover{
  background: #FE4500;
}









// p{
//   color: red;
// }
`;

export default Protf