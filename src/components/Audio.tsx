function Audio({ src, description }) {
  return (
    <div>
      <p>{description}</p>
      <audio controls src={src}></audio>
    </div>
  );
};

export default Audio;
