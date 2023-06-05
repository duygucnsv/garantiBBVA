import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import style from "./Topbar.module.scss";
import { Text } from "@chakra-ui/react";

const Topbar = () => {
  return (
    <section className={style.section}>
      <ButtonGroup className={style.section__buttonGroup}>
        <Button>Şube ve ATM'ler</Button>
        <Text fontWeight="bold" margin="0 10px">
          |
        </Text>
        <Button>Ürün ve Hizmet Ücretleri</Button>
        <Text margin="0 10px">|</Text>

        <Button>EN</Button>
      </ButtonGroup>
    </section>
  );
};

export default Topbar;
