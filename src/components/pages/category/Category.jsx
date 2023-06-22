import { Box, Button, Typography } from "@mui/material"


export const Category = ({products}) => {
  return (
    <div>
      {
        products?.map((prod,i)=>{
          return (
            <Box
              key={prod.id}
              style={{
                display: "flex",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <div>
                <img src={prod.image} alt="" />
              </div>
              <div>
                {prod.new ? (
                  <Typography color={"secondary"} variant="h4">
                    NEW PRODUCT
                  </Typography>
                ) : null}
                <Typography color={"primary"} variant="h3">
                  {prod.name}
                </Typography>
                <Typography color={"primary"}>{prod.description}</Typography>
                <Button color={"secondary"} variant="contained" style={{borderRadius:0}}>
                  SEE PRODUCT
                </Button>
              </div>
            </Box>
          ); 
        })
      }
    </div>
  )
}
