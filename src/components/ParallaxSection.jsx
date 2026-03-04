export default function ParallaxSection({
  id,
  bgImage,
  children,
  className = "",
  overlayClassName = "bg-black/60",
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // parallax-like effect on desktop
      }}
    >
      {/* overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}