import user from '../data/user';
const Links = () => {
  return (
    <div>
      <h3>
        Links
        <a href={user.links.github}> {user.links.github} </a>
        <a href={user.links.linkedin}> {user.links.linkedin} </a>
      </h3>
    </div>
  );
};
export default Links;
