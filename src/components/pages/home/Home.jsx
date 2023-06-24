import { Box} from "@mui/material";
import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer";
import { NewProductHomeContainer } from "../../common/newProductHome/NewProductHomeContainer";

export const Home = () => {
  return (
    <Box >
      <NewProductHomeContainer />
      <TarjetaContainer></TarjetaContainer>
    </Box>
  );
};
