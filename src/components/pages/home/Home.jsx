import { Box} from "@mui/material";
import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer";
import { NewProductHomeContainer } from "../../common/newProductHome/NewProductHomeContainer";
import { AllCategoryCardsContainer } from "../../common/allCategoryCards/AllCategoryCardsContainer";
import { CardProductContainer } from "../../common/cardProduct/CardProductContainer";

export const Home = () => {
  return (
    <Box>
      <NewProductHomeContainer />
      <AllCategoryCardsContainer />
      <CardProductContainer/>
      <TarjetaContainer />
    </Box>
  );
};
