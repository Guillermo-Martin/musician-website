// --------------------------------------------------------------------
//                            Interfaces
// --------------------------------------------------------------------
interface AudioProps {
  src: string;
  title: string;
  date: string;
  description: string;
};

// --------------------------------------------------------------------
//                            Component
// --------------------------------------------------------------------
function Audio({ src, title, date, description }: AudioProps) {
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
