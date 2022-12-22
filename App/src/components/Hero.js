import React, { useEffect, useRef } from 'react';

import Heading from './Heading';

export default function Hero() {
  const img = useRef(null);

  useEffect(() => {
    (async () => {
      // Get a random picture from Unsplash
      const { url } = await window.fetch(
        // prettier-ignore
        `https://source.unsplash.com/featured/${window.innerWidth}x${window.innerHeight}/?autumn,fall,foliage,leaves`,
      );

      img.current.src = url;
    })();
  }, []);

  return (
    <div className="wrapper">
      {/* https://css-tricks.com/snippets/html/base64-encode-of-1x1px-transparent-gif */}
      <img
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        alt=""
        ref={img}
      />
      <Heading text="Greetings & Salutations" arc={120} radius={400} />
    </div>
  );
}
