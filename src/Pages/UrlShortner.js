import React, { useState } from "react";

function UrlShortner() {
  const [link, setlink] = useState("");
  const [shortLink, setShortLink] = useState("");

  function handleSubmit() {
    fetch("https://urlshortner-bqh3.onrender.com/shortUrls", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        url: link,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShortLink(data.data);
        alert(data.status);
      });
  }
  return (
    <div className="container">
      <h1 className="text-center p-5 text-danger">URL - SHORTNER</h1>
      <div className="d-flex justify-content-center align-items-center">
        <input
          className="form-control form-control-lg input"
          type="text"
          onChange={(e) => setlink(e.target.value)}
        />
      </div>
      <div className="pt-5 mt-5 d-flex justify-content-center align-items-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Shrink
        </button>
      </div>
      <div className="text-center pt-5 mt-5">
        <h2 className="p-4">SHORT URL</h2>
        <a className="h3" href={link} target="_blank" rel="noreferrer">
          {shortLink}
        </a>
      </div>
    </div>
  );
}

export default UrlShortner;
