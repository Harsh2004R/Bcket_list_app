import React from 'react';

function HowItWorksVideo() {
  return (
    <div className=" text-white text-center " style={{width:"100%",height:"100vh",paddingTop:"50px",backgroundColor:"#333333"}}>
      <h2 className="text-3xl font-bold mb-4 xs:h-100">Reference Video</h2>
      <p style={{textAlign:"center",color:"#42A5F5"}}>"Watch this video in its entirety to effectively explore our platform."</p>
      <div style={{display:"flex" , justifyContent:"center", alignContent:"center",alignItems:"center",marginTop:"100px"}}>
      <div className="xs:min-w-fit xl:w-1/2" style={{height:"50vh"}}>
        <iframe
          title="How It Works Video"
          className="w-full h-full "
          src="https://drive.google.com/file/d/1GHsjHRBH6jyMKxkBuENXX_6kXB2zc4-V/preview"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      </div>
    </div>
  );
}

export default HowItWorksVideo;