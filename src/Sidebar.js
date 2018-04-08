import React from 'react';

function Sidebar(props) {
  return (
    <sidebar>
      <img src="theindex.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a href="#" onClick={() => props.select(props.author)}>AUTHORS</a>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
