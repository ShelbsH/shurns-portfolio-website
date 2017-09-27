import React from 'react';

export const ProjectScreenshot = ({screenshot}) => (
  <img className="img-thumbnail" width="500" height="500" src={screenshot} />
);

export const TechTags = ({tags}) => (
  <div>
    <i className="fa fa-circle icon-fonts-circle mr-2" aria-hidden="true"></i>
    {tags.map((list, idx) => <span className="badge badge-dark mr-1" key={idx}>{list}</span>)}
  </div>
);

export const ProjectName = ({name, className}) => (<h2 className={className}>{name}</h2>);

export const ProjectDescription = ({description}) => (<p>{description}</p>);
