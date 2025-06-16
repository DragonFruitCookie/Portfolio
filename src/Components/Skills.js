import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from "./Footer";
function Skills () {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const techStack = [
        {
            imgUrl:"https://skillicons.dev/icons?i=html" ,
            skillName:"HTML",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=css" ,
            skillName:"CSS",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=javascript" ,
            skillName:"JavaScript",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=react" ,
            skillName:"React",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=nodejs" ,
            skillName:"NodeJS",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=express" ,
            skillName:"Express",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=mongodb" ,
            skillName:"MongoDB",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=mysql" ,
            skillName:"MySQL",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=postgresql" ,
            skillName:"PostgreSQL",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=git" ,
            skillName:"Git",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=github" ,
            skillName:"Github",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=bootstrap" ,
            skillName:"Bootstrap",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=npm" ,
            skillName:"npm",
        },
        {
            imgUrl:"https://skillicons.dev/icons?i=postman" ,
            skillName:"Postman",
        },
    ]
    function skillBadge(skill){
        return (
            <div className="item">
                <img src={skill.imgUrl} alt={skill.skillName}/>
                <h5>{skill.skillName}</h5>
            </div>
        )
    }
    return (  
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                               {techStack.map(skillBadge)}
                          </Carousel>
                      </div>
                  </div>
              </div>
              <Footer/>
          </div>
          
      </section>
    )
}

export default Skills;