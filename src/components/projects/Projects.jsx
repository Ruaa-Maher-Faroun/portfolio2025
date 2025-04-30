import { useEffect, useState } from 'react';
import { myProjects } from "../../assets/projects";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './project.css'
export default function Projects() {
  const [active,setActive] = useState(0);
  const [projects,setProjects] = useState([]);
  const types = {0:"",1:"html&css",2:"js",3:"react",4:"bootstrap"}
  const filterData = (i) => {
    setActive(i);
    console.log(i);
    
    console.log(types[i]);
    const data = myProjects.filter((project) => project.type.includes(types[i]));
    console.log(data);
    setProjects(data);
  };
  useEffect(()=>{
    if(myProjects)
    setProjects(myProjects);
  },[])

  return (
    <section id='projects' className='flex-column projects'>
      <h1 className=' mb-3'>Projects</h1>
      <div className="filter d-flex gap-2">
        <Button  variant="light"  className={`${active === 0 ?"active":""}`} onClick={()=>filterData(0)}>All</Button>
        <Button variant="light"  className={`${active === 1 ?"active":""}`} onClick={()=>filterData(1)}>Html & CSS</Button>
        <Button variant="light"  className={`${active === 2 ?"active":""}`} onClick={()=>filterData(2)}>JS</Button>
        <Button variant="light"  className={`${active === 3 ?"active":""}`} onClick={()=>filterData(3)}>React</Button>
        <Button variant="light"  className={`${active === 4 ?"active":""}`} onClick={()=>filterData(4)}>Bootstrap</Button>
      </div>
      <div className="cards d-flex flex-wrap align-items-center justify-content-center">
    {projects.map((project)=>{
      return(
          <Card style={{ width: '35rem' }} className='my-5 mx-3 bg-dark text-light projectcard' key={project.id}>
            <Card.Img variant="top" src={project.image} style={{height: '300px'}}  className='projectimg'/>
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text className='text-uppercase'>
                {project.tools.join(", ")}
              </Card.Text>
              <a className='todemo' href={project.github} variant="primary" target='_blank'>Github</a>
              <a className='todemo' href={project.liveDemo} variant="primary" target='_blank'>Demo</a>
            </Card.Body>
          </Card>

      )
    })}
 

      </div>
  

  </section>
  )
}

