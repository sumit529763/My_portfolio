export const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={2} 
        color="#0ea5e9" 
      />
      <directionalLight 
        position={[-10, -10, -5]} 
        intensity={0.5} 
        color="#ffffff" 
      />
    </>
  );
};