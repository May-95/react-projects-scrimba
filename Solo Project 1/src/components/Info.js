import photo from "../images/photo.jpg";

export default function Info() {
  return (
    <div>
      <img
        className="img"
        src={photo}
        alt="Headshot of a woman smiling."
      />
      <div className="info">
        <h1 className="name">Laura Smith</h1>
        <h2 className="job-title">Frontend Developer</h2>
        <p className="website">laurasmith.website</p>
        <div className="buttons">
          <button className="email">
            <i className="fa-solid fa-envelope"></i>Email
          </button>
          <button className="linkedin">
            <i className="fa-brands fa-linkedin fa-lg"></i>LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}