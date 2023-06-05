import React from "react";
import logo from "../../../../assets/img/logo/garantilogo.svg";
import { BiSearchAlt } from "react-icons/bi";
import style from "./Menubar.module.scss";
import { settings } from "../../../../utils/settings";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Menubar = () => {
  return (
    <Flex className={style.navContainer}>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem
          display={"flex"}
          alignItems={"center"}
          colSpan={2}
          className={style.navItem1}
        >
          <img
            src={logo}
            alt={settings.siteName}
            className={style.navItem1__logo}
          />

          <Box>
            <Box
              as="button"
              _hover={{ color: "#004481", fontWeight: "500" }}
              marginEnd={"2rem"}
              marginStart={"2rem"}
              className={style.navItem1__link1}
            >
              KENDİM İÇİN
            </Box>

            <Box
              as="button"
              _hover={{ color: "#004481", fontWeight: "500" }}
              className={style.navItem1__link1}
            >
              İŞİM İÇİN
            </Box>
          </Box>
        </GridItem>
        <Spacer />
        <GridItem
          display={"flex"}
          alignItems={"center"}
          colStart={4}
          colEnd={6}
          fontSize={"15px"}
          fontWeight="500"
          color="#004481"
          className={style.navItem2}
          marginEnd={"3rem"}
        >
          <Box marginEnd="2rem" display="flex" _hover={{ color: "#1464a5" }}>
            <BiSearchAlt size={"22px"} />
            <Text marginStart={"0.5rem"}>Arama Yap</Text>
          </Box>
          {/* <Box bg={"grey"} marginEnd={"3rem"}>
            <Text h="10">|</Text>
          </Box> */}

          <Text
            className={style.link2}
            marginEnd={"3rem"}
            _hover={{ color: "#1464a5" }}
          >
            Müşteri ol
          </Text>
          <Button
            borderRadius=" 1px solid #004481"
            backgroundColor="#004481"
            color="#fff"
            _hover={{ bg: "#1464a5" }}
            className={style.button}
          >
            Giriş Yap
          </Button>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Menubar;
