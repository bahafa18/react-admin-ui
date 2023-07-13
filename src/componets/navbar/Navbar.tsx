import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>bahafa</span>
      </div>
      <div className="icon">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/17331495/pexels-photo-17331495/free-photo-of-kayu-orang-orang-wanita-relaksasi.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Mafaza</span>
        </div>
        <img src="/setting.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
