

function About() {
  return (
    <div className="">
      <section id="about" className="bg-black">
        <div className="justify-evenly flex-wrap flex">
          <div className="content">
            <img src="src/assets/fotosaya.jpg" alt="Foto saya" width={200} height={200} className="rounded-b-md rounded-t-md" />
          </div>
          <div className="text-white content flex-1">
            <p><b className="biodata">Name:</b> Benedict Aurelius</p>
            <br />
            <p><b className="biodata">Date of Birth:</b> 19th August 2005</p>
            <br />
            <p><b className="biodata">Age:</b> 18</p>
            <br />
            <p><b className="biodata">Gender:</b> Male</p>
            <br />
            <p><b className="biodata">Nationality:</b> Indonesian</p>
            <br />
            <p><b className="biodata">Language:</b> Indonesian and English</p>
          </div>
          <div className="text-white content flex-1">
            <b><h1 className="biodata">About Me</h1></b>
            <p>My name is Benedict Aurelius and I'm a student of University of Indonesia, with major in Computer Engineering. I'm a person who is passionate about technology, especially in the field of programming. I'm currently learning C language and I'm also interested in web development.</p>
          </div>
        </div>
        <div className="justify-evenly flex-wrap flex padding">
          <div className="flex items-center justify-left px-5 py-5">
            <div className="rounded-lg shadow-xl bg-gray-900 text-white" style={{width: '450px'}}>
              <div className="border-b border-gray-800 px-8 py-3">
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500" />
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300" />
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400" />
              </div>
              <div className="px-8 py-6">
                <p><em className="text-blue-400">Soft</em> <span className="text-green-400">Skills</span> <span className="text-pink-500">:</span></p>
                <p><span className="text-pink-500">Team Work</span></p>
                <p><span className="text-pink-500">Communication</span></p>
                <p><span className="text-pink-500">Problem Solving</span></p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-right px-5 py-5">
            <div className="rounded-lg shadow-xl bg-gray-900 text-white" style={{width: '450px'}}>
              <div className="border-b border-gray-800 px-8 py-3">
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500" />
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300" />
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400" />
              </div>
              <div className="px-8 py-6">
                <p><em className="text-blue-400">Hard</em> <span className="text-green-400">Skills</span> <span className="text-pink-500">:</span></p>
                <p><span className="text-pink-500">Adobe Family</span></p>
                <p><span className="text-pink-500">MS Office</span></p>
                <p><span className="text-pink-500">Programming</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;