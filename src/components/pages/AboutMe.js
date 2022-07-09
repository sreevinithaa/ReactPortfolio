import React from 'react';
import '../../styles/About.css';
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className='imgdivClass'><img className='imgclass' src={require(`../images/profile_pic.jpg`)} alt="Vinitha Gowtheepan" /></div>
      <p>
       I am Vinitha Gowtheepan.I am passionated and hardworking coder.I have backend experience back in home(Sri Lanka).Due to my family circumstance took a break from IT and moved to Australia.In the middle i missed my career and did one freelance project for one charity organisation.Then i realise i cant stay away from coding.Coding makes me happy and satisfied.Then deside to develop my skills which makes me join FullStackDeveloper course in Boot Camp.
       Now i am all ready to start my career again with added frontEnd development skills which makes me as fullstack developer.I am so exited to re-start my career in Australia.
      </p>
    </div>
  );
}
