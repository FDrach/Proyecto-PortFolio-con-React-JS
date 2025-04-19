
import React from "react";
import CollapsibleSection from "../componentes/CollapsibleSection.jsx"; 

const Licenses = () => {
  return (
    <main className="app-main">
      <h2>Licenses</h2>
      <CollapsibleSection title="GitHub">
        <p>Logo and Octocat terms of use</p>
        <p>
          GITHUB®, the GITHUB® logo design, the INVERTOCAT logo design,
          OCTOCAT®, and the OCTOCAT® logo design are trademarks of GitHub,
          Inc., registered in the United States and other countries.
        </p>
        <p>
          The OCTOCAT design is the exclusive property of GitHub, Inc and has
          been federally registered with the United States Copyright Office.
          All rights reserved.
        </p>
        <p>
          No adaptation or use of any kind of any of our registered trademarks
          or copyrights, or any other contents of this website, is allowed
          without the express written permission of GitHub, Inc.
        </p>
      </CollapsibleSection>

      {/*
      <CollapsibleSection title="Otra lsencia">
        <p>contnido...............</p>
      </CollapsibleSection>
      */}

    </main>
  );
};

export default Licenses;