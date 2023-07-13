import { Box} from "@mui/material";
import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer";
import { NewProductHomeContainer } from "../../common/newProductHome/NewProductHomeContainer";
import { AllCategoryCardsContainer } from "../../common/allCategoryCards/AllCategoryCardsContainer";
import { CardProductContainer } from "../../common/cardProduct/CardProductContainer";
import { CardProduct2Container } from "../../common/cardProduct2/CardProduct2Container";

export const Home = () => {
  return (
    <Box>
      <NewProductHomeContainer />
      <AllCategoryCardsContainer />
      <CardProductContainer/>
      <CardProduct2Container/>
      <TarjetaContainer />
    </Box>
  );
};
