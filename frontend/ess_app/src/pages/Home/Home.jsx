import React from 'react';
import image from '../../assets/ess_logo.png';
import Hundred from '../../components/hundred.jsx';
import ebook from '../../components/ebook.jsx';
import Myform from '../../components/Myform.jsx'



const Home = () => {
  return (
    <div style={{ background: 'radial-gradient(50% 30.06% at 50.00% 15.72%, rgba(145, 51, 5, 0.68) 0%, rgba(5, 5, 5,0.95) 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

      <img src={image} alt="ESS Logo" style={{ display: 'block', margin: 'auto', marginBottom: '20px' , marginTop:'6%'}} />
      <Hundred />
      <div style={{textAlign: 'center', color: 'white', fontSize: 55.89, fontFamily: 'Space Grotesk', fontWeight: '700', wordWrap: 'break-word' }}>Become A Digital Marketer In 16 Weeks<br/>even if you have no experience</div>
      <div style={{width: 718.34, height: 101, textAlign: 'center', color: 'rgba(255, 255, 255, 0.72)', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Our Digital Marketing Course is designed to equip you with the essential skills and knowledge to excel in the ever-evolving digital landscape. Whether you're a beginner or looking to enhance your existing skills, this course covers all the crucial aspects of digital marketing.</div>

      <Myform/>

      
        
      </div>








      

      
      





      
    
  );
};

export default Home;
