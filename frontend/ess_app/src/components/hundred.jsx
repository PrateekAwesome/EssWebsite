// import React from 'react'

// const hundred = () => {
//   return (
//     <div>
//       <div className="BackgroundOverlayShadowOverlayblur" style={{width: 184.47, height: 33.19, position: 'relative', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(98.42% 17.71% at 49.21% 12.66%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)', boxShadow: '0px 2px 12px rgba(255, 255, 255, 0.04) inset', borderRadius: 99, backdropFilter: 'blur(24px)'}}>
//   <div className="Cc4ed5e60099660260a9a9SparklesSvg" style={{width: 20, height: 20, left: 10, top: 6.59, position: 'absolute'}}>
//     <div className="Cc4ed5e60099660260a9a9SparklesSvgFill" style={{width: 20, height: 20, left: 0, top: 0, position: 'absolute'}}>
//       <div className="Cc4ed5e60099660260a9a9SparklesSvg" style={{width: 20, height: 20, left: 0, top: 0, position: 'absolute'}}>
//         <div className="Vector" style={{width: 8.33, height: 8.33, left: 9.17, top: 5.83, position: 'absolute', background: '#FA7616'}}></div>
//         <div className="Vector" style={{width: 8.33, height: 8.33, left: 9.17, top: 5.83, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0) 100%)'}}></div>
//         <div className="Vector" style={{width: 8.33, height: 8.33, left: 9.17, top: 5.83, position: 'absolute', border: '1.25px #FA7616 solid'}}></div>
//         <div className="Vector" style={{width: 8.33, height: 8.33, left: 9.17, top: 5.83, position: 'absolute', border: '1.25px rgba(255, 255, 255, 0.56) solid'}}></div>
//         <div className="Vector" style={{width: 2.50, height: 2.50, left: 6.67, top: 4.17, position: 'absolute', border: '1.25px #FA7616 solid'}}></div>
//         <div className="Vector" style={{width: 2.50, height: 2.50, left: 6.67, top: 4.17, position: 'absolute', border: '1.25px rgba(255, 255, 255, 0.56) solid'}}></div>
//         <div className="Vector" style={{width: 1.67, height: 1.67, left: 2.50, top: 8.33, position: 'absolute', border: '1.25px #FA7616 solid'}}></div>
//         <div className="Vector" style={{width: 1.67, height: 1.67, left: 2.50, top: 8.33, position: 'absolute', border: '1.25px rgba(255, 255, 255, 0.56) solid'}}></div>
//         <div className="Vector" style={{width: 5, height: 5, left: 4.17, top: 11.67, position: 'absolute', background: '#FA7616'}}></div>
//         <div className="Vector" style={{width: 5, height: 5, left: 4.17, top: 11.67, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0) 100%)'}}></div>
//         <div className="Vector" style={{width: 5, height: 5, left: 4.17, top: 11.67, position: 'absolute', border: '1.25px #FA7616 solid'}}></div>
//         <div className="Vector" style={{width: 5, height: 5, left: 4.17, top: 11.67, position: 'absolute', border: '1.25px rgba(255, 255, 255, 0.56) solid'}}></div>
//       </div>
//     </div>
//   </div>
//   <div className="JobAssistance" style={{width: 134.77, height: 25.20, left: 38, top: 3.90, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 25.20, wordWrap: 'break-word'}}>100% Job Assistance</div>
// </div>
//     </div>
//   )
// }

// export default hundred
import React from 'react';

const Hundred = () => {
  return (
      <div className="BackgroundOverlayShadowOverlayblur" style={{ width: '80%', maxWidth: '200px', position: 'relative', margin: 'auto',marginTop:'2px', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(98.42% 17.71% at 49.21% 12.66%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)', boxShadow: '0px 2px 12px rgba(255, 255, 255, 0.04)', borderRadius: 80, backdropFilter: 'blur(24px)' }}>
        <div className="Cc4ed5e60099660260a9a9SparklesSvg" style={{ width: 20, height: 20, left: '50%', transform: 'translateX(-50%)', position: 'absolute' }}>
          {/* Your sparkles SVG content */}
        </div>
        <div className="JobAssistance" style={{ color: 'white', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '25.20px', wordWrap: 'break-word', textAlign: 'center', marginTop: '20px' }}>100% Job Assistance</div>
      </div>
    
  );
};

export default Hundred;
