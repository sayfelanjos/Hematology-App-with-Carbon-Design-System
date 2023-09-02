import React from "react";
import ReactDOM from "react-dom";
import styles from "./RemoveSupplyModal.module.scss";
import { rows, headers } from "./removeSupplyModal";
import {
  Modal,
  Search,
  FormGroup,
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  ButtonSet,
  Button,
  TextInput,
  FormLabel,
  Form,
  Stack,
} from "@carbon/react";
import { Add } from "@carbon/react/icons";
import { useModalStore } from "../../store";

const RemoveSupplyModal = () => {
  const ModalStateManager = ({ children: ModalContent }) => {
    const open = useModalStore((state) => state.open);
    const setOpen = useModalStore((state) => state.setOpen);
    return (
      <>
        {!ModalContent || typeof document === "undefined"
          ? null
          : ReactDOM.createPortal(<ModalContent open={open} setOpen={setOpen} />, document.body)}
      </>
    );
  };
  return (
    <ModalStateManager>
      {({ open, setOpen }) => (
        <Modal
          modalHeading="Retirar itens para consumo"
          modalLabel=""
          primaryButtonText="Salvar"
          secondaryButtonText="Cancelar"
          open={open}
          onRequestClose={() => setOpen(false)}>
          <Form className={styles["modal-form"]}>
            <Stack gap={2} orientation="horizontal">
              <FormGroup className={styles["search-form-group"]}>
                <FormLabel className={styles["form-label"]}>Selecione os itens</FormLabel>
                <Search
                  size="lg"
                  placeholder="Digite o código ou nome do produto"
                  closeButtonLabelText="Clear search input"
                  id="search-1"
                  onChange={() => {}}
                  onKeyDown={() => {}}
                  labelText="Selecione os itens"
                />
              </FormGroup>
              <FormGroup className={styles["qty-form-group"]}>
                <FormLabel className={styles["form-label"]}>Qtde</FormLabel>
                <TextInput
                  className={styles["qty-input"]}
                  placeholder="Quantidade"
                  size="lg"
                  id="modal-qty-input"
                  labelText=""
                />
              </FormGroup>
              <Button className={styles["add-button"]} renderIcon={Add} />
            </Stack>
          </Form>
          <Table size="lg" useZebraStyles={false}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader id={header.key} key={header}>
                    {header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {Object.keys(row)
                    .filter((key) => key !== "id")
                    .map((key) => {
                      return <TableCell key={key}>{row[key]}</TableCell>;
                    })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Modal>
      )}
    </ModalStateManager>
  );
};

export default RemoveSupplyModal;
