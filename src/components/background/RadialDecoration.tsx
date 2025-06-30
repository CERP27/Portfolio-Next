interface IBlob {
  id: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  color: string;
  blur: string;
  opacity: string;
}

const defaultBlobs: IBlob[] = [
  {
    id: "radial",
    top: "-10%",
    left: "5%",
    width: "300px",
    height: "300px",
    color: "#6b21a8",
    blur: "160px",
    opacity: "30",
  },
  {
    id: "radial",

    bottom: "-15%",
    right: "0%",
    width: "400px",
    height: "400px",
    color: "#9333ea",
    blur: "180px",
    opacity: "25",
  },
  {
    id: "radial",
    top: "30%",
    right: "35%",
    width: "250px",
    height: "250px",
    color: "#8b5cf6",
    blur: "120px",
    opacity: "20",
  },
];

export const RadialDecoration = ({
  blobs = defaultBlobs,
}: {
  blobs?: IBlob[];
}) => {
  return (
    <>
      {blobs.map((blob, i) => (
        <div
          key={`${blob.id}-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            width: blob.width,
            height: blob.height,
            backgroundColor: blob.color,
            filter: `blur(${blob.blur})`,
            opacity: Number(blob.opacity) / 100,
            zIndex: -1,
          }}
        />
      ))}
    </>
  );
};
