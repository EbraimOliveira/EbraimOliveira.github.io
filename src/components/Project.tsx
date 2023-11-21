type projectProps = {
  projectLink: string;
  projectImage: string;
  projectName: string;
};

export default function Project({ projectLink, projectImage, projectName }: projectProps) {
  return (
    <div className="projectDiv">
      <a
        className="projectLink"
        href={projectLink}
        target="_blank"
      >
        {projectName}
        <img
          className="projectImg"
          src={projectImage} alt="pixelArt image" />
      </a>
    </div>
  )
};