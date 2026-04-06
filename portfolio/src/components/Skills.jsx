const skills = ["HTML", "CSS", "JavaScript", "React", "NodeJs", "Express", "AWS cloud", "Azure", "MySQL", "php", "Alibaba Cloud", "TDD", "Jest", "Git"]

function Skills(){
    return(
        <section id = "skills">
            <h2>My Skills
            <div className="skills-grid">
                {skills.map((skill) =>(
                    <div className="skill-card" key={skill}>
                        {skill}

                    </div>
                ))}
            </div>
            </h2>
        </section>
    )
}

export default Skills;