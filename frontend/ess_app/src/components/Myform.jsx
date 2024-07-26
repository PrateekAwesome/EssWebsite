// import React from 'react';

// const MyForm = () => {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//       <label style={{ borderRadius: '999px', background: '#FFA500', padding: '0.5rem' }}>Download the Ebook</label>
//       <input type="text" placeholder="Name" style={{ borderRadius: '999px', background: '#FFA500', padding: '0.5rem' }} />
//       <input type="tel" placeholder="Phone" style={{ borderRadius: '999px', background: '#FFA500', padding: '0.5rem' }} />
//       <input type="email" placeholder="Email" style={{ borderRadius: '999px', background: '#FFA500', padding: '0.5rem' }} />
//       <button style={{ borderRadius: '999px', background: '#FFA500', color: 'white', padding: '0.5rem' }}>Apply Now</button>
//     </div>
//   );
// };

// export default MyForm;
import React from 'react';

const MyForm = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <p style={{ fontSize: '1.2rem', fontFamily: 'serif' }}>Download the Ebook</p>
      <input type="text" placeholder="Name" style={{ borderRadius: '999px' ,background: 'linear-gradient(to bottom, transparent, #E0E0E0)', padding: '0.5rem' }} />
      <input type="tel" placeholder="Phone" style={{ borderRadius: '999px' ,background: 'linear-gradient(to bottom, transparent, #E0E0E0)', padding: '0.5rem' }} />
      <input type="email" placeholder="Email" style={{ borderRadius: '999px' ,background: 'linear-gradient(to bottom, transparent, #E0E0E0)', padding: '0.5rem' }} />
      <button style={{ background: 'linear-gradient(to bottom, #FFA500, #FFD700)', color: 'white', padding: '0.5rem', borderRadius: '999px' }}>Apply Now</button>
    </div>
  );
};

export default MyForm;
