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

export function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onreadystatechange = () => {

      if (xhr.readyState < 3) {
        return;
      }

      if (xhr.status === 302) {
        return;
      }

      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      }

      if (xhr.readyState === 4 && xhr.statusCode >= 400) {
        reject('The requested GET URL has failed');
      }
    };

    xhr.send();
  });
};
