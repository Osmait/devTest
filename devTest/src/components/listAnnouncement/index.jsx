import React, { useEffect, useState } from "react";

export const ListAnnont = () => {
  const [announcement, SetAnnouncement] = useState([]);
  useEffect(() => {
    const consultApi = async () => {
      const URL = "http://localhost:3000/announcement";
      const response = await fetch(URL);
      const result = await response.json();

      SetAnnouncement(result);
    };
    consultApi();
  }, []);

  return (
    <div className="contenedor_anunn">
      {announcement.map((annon) => (
        <div key={annon.id}>
          <h2>{annon.title}</h2>

          <div dangerouslySetInnerHTML={{ __html: annon.content }}></div>
        </div>
      ))}
    </div>
  );
};
