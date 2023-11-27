import { useLanguageContext } from "../contexts/languages/Provider";

type SummaryProps = {
  projectName: string;
  gitHub: string;
  description: string;
  stacksList: string;
};

export default function Summary({
  projectName,
  gitHub,
  description,
  stacksList }: SummaryProps): JSX.Element {

  const { projectCode, stacks, summary } = useLanguageContext();

  return (
    <div className="btn-group">

      <button
        type="button"
        className="btn btn-danger dropdown-toggle projectBtn"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        // data-bs-display="static"
        aria-expanded="false"
      >
        {projectName}
      </button>
      <ul className="dropdown-menu">
        <li>
          <h4 className="dropdown-item dropDownItem" >{summary}</h4>
        </li>
        <li>
          <p className="dropdown-item dropDownItem">{description}</p>
        </li>
        <li>
          <h4 className="dropdown-item dropDownItem">{stacks}</h4>
        </li>
        <p className="dropdown-item dropDownItem">{stacksList}</p>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="project-code-txt">
          <a
            className="projectCode"
            target="_blank"
            rel="noopener noreferrer"
            href={gitHub}
          >
            {projectCode}
          </a>
        </li>

      </ul>
    </div>
  );
}