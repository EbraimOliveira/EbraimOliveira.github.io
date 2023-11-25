import { useLanguageContext } from "../contexts/languages/Provider";

type summaryProps = {
  projectName: string;
  gitHub: string;
};

export default function Summary({ projectName, gitHub }: summaryProps) {

  const {
    projectCode
  } = useLanguageContext()

  return (
    <div className="btn-group">
      <button type="button" className="btn btn-danger dropdown-toggle projectBtn" data-bs-toggle="dropdown" aria-expanded="false">
        {projectName}
      </button>
      <ul className="dropdown-menu">
        <li >
          <h1 className="dropdown-item">text</h1>
        </li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a
          className="dropdown-item projectCode"
          target="_blank"
          href={gitHub}>{projectCode}</a>
        </li>
      </ul>
    </div>
  )
}