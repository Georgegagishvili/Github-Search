import "./banner_style.css";
export default function Banner({ data }) {
  return (
    <div className="banner">
      <div className="author-info">
        <img src={`${data.owner.avatar_url}`} alt="rame"></img>
        <span className="username">{data.owner.login}</span>
        <span className="userType">{data.owner.type}</span>
      </div>
    </div>
  );
}
