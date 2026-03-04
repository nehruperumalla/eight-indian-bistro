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
      className={`relative overflow-hidden bg-center bg-cover bg-no-repeat bg-scroll lg:bg-fixed ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}