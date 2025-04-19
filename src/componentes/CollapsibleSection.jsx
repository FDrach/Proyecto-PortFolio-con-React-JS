import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const CollapsibleSection = ({ title, children, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const contentMaxHeight = isOpen
    ? `${contentRef.current?.scrollHeight}px`
    : "0px";

  return (
    <>
      <button
        type="button"
        className={`collapsible ${isOpen ? "active" : ""}`}
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-controls={`collapsible-content-${title.replace(/\s+/g, "-")}`}
      >
        {title}
        <span style={{ float: "right" }}>{isOpen ? "-" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        className="content"
        style={{ maxHeight: contentMaxHeight }}
        id={`collapsible-content-${title.replace(/\s+/g, "-")}`}
        aria-hidden={!isOpen}
      >
        <div style={{ padding: "10px 0" }}>{children}</div>
      </div>
    </>
  );
};

CollapsibleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  startOpen: PropTypes.bool,
};

export default CollapsibleSection;
