import './project-blurb.css';

function ProjectBlurb({
  title, blurb, image, link, styleType
}) {
  return (
  <>
    <div className={"blurb " + styleType}>
      <h2>{title}</h2>
      <a href={link}>{link}</a>
      <img src={image} alt={title}/>
      <h3>{blurb}</h3>
    </div>
  </>
  );
}

export default ProjectBlurb;
