import Image from 'next/future/image'
import useSWR from 'swr'

const username: string = 'noob-ja';

declare type Project = {
  id?: number;
  name?: string;
  description?: string;
  html_url?: string;
  pages_url?: string;
  has_pages?: boolean;
};

function Home() {
  const { data } = useSWR('https://api.github.com/users/' + username + '/repos?sort=asc', (apiURL: string) => fetch(apiURL).then(res => res.json()));
  if (!data) return "Loading...";
  
  const projectList: Array<Project> = data.filter((project: Project) => {
    return project.has_pages;
  });

  return (
    <div className="container mx-auto p-20 items-center text-center">
      <a href="https://github.com/noob-ja" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold hover:underline">
        <Image className="rounded-full inline-block mb-2" src="https://github.com/noob-ja.png" height={128} width={128} alt="noob-ja"></Image><br/>
        JA (noob-ja)
      </a>
      <hr className="border-dashed my-4" />
      <ul>
        {
          projectList?.map((project: Project) => (
            <li key={project.id} className="py-4 grid grid-cols-2 items-center border-b last:border-none">
              <div>
                <p className="text-xl font-bold">{project.name}</p>
                <span>{project.description}</span>
              </div>
              <div className="flex justify-center gap-4">
                {project.has_pages && <a className="hover:underline" href={'https://noob-ja.github.io/' + project.name} target="_blank" rel="noopener noreferrer">Pages</a>}
                <a className="hover:underline" href={project.html_url} target="_blank" rel="noopener noreferrer">Repo</a>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home
