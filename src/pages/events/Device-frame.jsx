const DeviceFrame = ({
  imageSrc,
  alt = "App preview",
  className = "",
}) => {
  return (
    <div
      className={`relative mt-4 sm:mt-8 md:mt-10 lg:mt-12 z-20 w-full max-w-[400px] sm:max-w-[480px] md:max-w-[560px] ${className}`}
    >
      
      <img
        src={require("../../images/Events/device-frame.png")}
        alt="Device Frame"
        className="w-full h-auto object-contain"
      />

      <div
        className="
          absolute
          top-[19%] left-[4.5%] 
          w-[91%] h-[75%] 
          rounded-[1.25rem]
          overflow-hidden 
          z-30
          shadow-xl 
        "
      >
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-auto ${className}`}
        />
      </div>
    </div>
  );
};

export default DeviceFrame;
