import { useNavigate } from "react-router-dom";

type renderNavProps = {
  route: string;
  label: string;
  active: boolean;
};

export default function RenderNavBtn({ route, label, active }: renderNavProps) {
  const navigate = useNavigate();
  const handleClick = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <button
      onClick={() => handleClick(route)}
      type="button" className={`btn ${active ? 'my-custom_active_class' : 'btn-secondary'}`}
    >
      {label}
    </button>
  );
};