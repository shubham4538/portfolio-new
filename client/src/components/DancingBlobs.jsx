import React, { useEffect, useRef } from "react";

const getRandom = (min, max) => Math.random() * (max - min) + min;

const DancingBlobs = () => {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);
  const margin = 100;
  const numBlobs = 4;

  useEffect(() => {
    const blobs = blobsRef.current;

    const blobData = Array.from({ length: numBlobs }).map(() => ({
      x: getRandom(margin, window.innerWidth - 100 - margin),
      y: getRandom(margin, window.innerHeight - 100 - margin),
      dx: getRandom(-1, 1),
      dy: getRandom(-1, 1),
      scale: getRandom(0.8, 1.2),
      dScale: getRandom(-0.001, 0.001),
    }));

    const animate = () => {
      blobData.forEach((blob, i) => {
        blob.x += blob.dx;
        blob.y += blob.dy;
        blob.scale += blob.dScale;

        if (blob.x <= margin || blob.x >= window.innerWidth - 100 - margin)
          blob.dx *= -1;
        if (blob.y <= margin || blob.y >= window.innerHeight - 100 - margin)
          blob.dy *= -1;
        if (blob.scale >= 1.5 || blob.scale <= 0.5) blob.dScale *= -1;

        const el = blobs[i];
        el.style.transform = `translate(${blob.x}px, ${blob.y}px) scale(${blob.scale})`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute min-h-screen inset-0 overflow-hidden z-0"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (blobsRef.current[i] = el)}
          className="absolute w-24 h-24 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full opacity-70 mix-blend-multiply blur-2xl"
        />
      ))}
    </div>
  );
};

export default DancingBlobs;
