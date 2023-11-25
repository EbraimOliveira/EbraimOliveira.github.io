import Summary from "./Summary";

type projectProps = {
  projectLink: string;
  projectImage: string;
  projectName: string;
  gitHub: string;
};

export default function Project({ projectLink, projectImage, projectName, gitHub }: projectProps) {
  return (
    <div className="projectDiv">

      <Summary
        gitHub={gitHub}
        projectName={projectName}
      />
      <div>
        <a
          className="projectLink"
          href={projectLink}
          target="_blank"
        >
          <img
            className="projectImg"
            src={projectImage} alt="pixelArt image" />
        </a>
      </div>
    </div>
  )
};