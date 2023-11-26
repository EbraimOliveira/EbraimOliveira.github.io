import Summary from "./Summary";

type projectProps = {
  projectLink: string;
  projectImage: string;
  projectName: string;
  gitHub: string;
  description: string;
  stacksList: string;
};

export default function Project({
  projectLink,
  projectImage,
  projectName,
  gitHub,
  description,
  stacksList,
}: projectProps) {
  return (
    <div className="projectDiv">

      <Summary
        gitHub={gitHub}
        projectName={projectName}
        description={description}
        stacksList={stacksList}
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