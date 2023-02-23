import react from "react";
import { TailSpin } from "react-loader-spinner";

const UserLoader = () => {
  return (
    <>
      <TailSpin
        height="150"
        width="150"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="mt-32"
        visible={true}
      />
      <h3>Cargando...</h3>
    </>
  );
};

export default UserLoader;
