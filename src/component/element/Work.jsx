import React from "react";

export default function Work() {
  return (
    <div className="container-fluid" id="work">
      <div className="container text-center mt-5" >
        <div className="row">
          <div className="col-md-12">
         <div>
         <h1>How It <span className="text-danger  fw-bold"> Works </span></h1>
            <video
              className="video "
              height={500}
              src="https://player.vimeo.com/progressive_redirect/playback/704523096/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1621192039&signature=18c4ba7681d88b274d7709ed6a7834c6e3876a8dcbf259bb8f4d5b7982b656c1 "
              autoPlay
              muted
              loop
              style={{ width: "80vw" }}
            />
         </div>
          </div>
        </div>
      </div>
    </div>
  );
}
