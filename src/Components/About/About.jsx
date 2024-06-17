import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
export default function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>
        <p>
          Embarak on a transformaive educational journey with our
          university&apos;s comprehensive education programs. Our cutting-edge
          curriculm is designed to empower students with the knowledge,skills,
          and experiences needed to exel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a meanful
          impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the prefect
          pathway to achieve your goals and unlock your full potential in
          shaping the future od education.
        </p>
      </div>
    </div>
  );
}
