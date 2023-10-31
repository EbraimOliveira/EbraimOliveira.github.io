import { useNavigate } from "react-router-dom";

type renderNavProps = {
  route: string;
  label: string;
};

export default function RenderNavBtn({ route, label }: renderNavProps) {
  const navigate = useNavigate();
  const handleClick = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <button
      onClick={() => handleClick(route)}
      type="button" className="btn btn-secondary"
    >
      {label}
    </button>
  );
};