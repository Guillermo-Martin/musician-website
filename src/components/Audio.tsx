function Audio({ src, title, date, description }) {
  return (
    <div>
      {/* ---------- Title and year ---------- */}
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>

      {/* ---------- Description and audio ---------- */}
      <div>
        <p>{description}</p>
        <audio controls src={src}></audio>
      </div>
    </div>
  );
};

export default Audio;
