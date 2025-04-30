import js from "../../assets/logos/js.svg";
import html from "../../assets/logos/html.svg";
import boot from "../../assets/logos/boot.svg";
import java from "../../assets/logos/java.png";
import sql from "../../assets/logos/sql.png";
import css from "../../assets/logos/css.svg";
import react from "../../assets/logos/react.svg";
import git from "../../assets/logos/git.svg";
import cpp from "../../assets/logos/c++.png";
import py from "../../assets/logos/py.png";
import csharp from "../../assets/logos/csharp.png";
import "./skills.css"

export default function Skills() {
  const showTitle = [{
    name:"HTML",img:html},
    {name:"CSS",img:css},
    {name:"JavaScript",img:js},
    {name:"Bootstrap",img:boot},
    {name:"React",img:react},
    {name:"Python",img:py},
    {name:"C++",img:cpp},
    {name:"C#",img:csharp},
    {name:"Java",img:java},
    {name:"Git",img:git},
    {name:"MySQL",img:sql},   
  ];

  return (
    <section className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skills">
        {showTitle.map((skill,ind)=>{
          return (

            <div className="ski" key={ind}>
              <img src={skill.img} alt="" title={skill.name}/>
            </div>
          )

        })}
  
      </div>
    </section>
  );
};