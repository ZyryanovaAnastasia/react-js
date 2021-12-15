import { useSelector } from "react-redux";
import { useStyles } from "./message-style";
import classnames from "classnames";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  TextField,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  deleteMessage,
  editMessage,
  messageTextSelector,
} from "../../../store/messages";

export const Message = ({
  text,
  author,
  time,
  messageId,
  chatId,
  dispatch,
}) => {
  const styles = useStyles();
  const classMessage = classnames(`${styles.message}`, {
    [styles.botMessage]: author === "Сhat-bot",
    [styles.clientMessage]: author !== "Сhat-bot",
  });
  const classBtnEdit = classnames(`${styles.message}`, {
    [styles.showBtnEdit]: author !== "Сhat-bot",
    [styles.notShowBtnEdit]: author === "Сhat-bot",
  });

  const [openModal, setOpenModal] = useState(false);
  const message = useSelector(messageTextSelector(messageId, chatId));
  const [newMessage, setNewMessage] = useState(message);

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const deleteMessageById = () => {
    dispatch(deleteMessage(messageId, chatId));
  };
  const editMessageById = (newText) => {
    dispatch(editMessage(messageId, chatId, newText));
  };

  return (
    <div className={classMessage}>
      <div className={styles.author}>{author}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.time}>{time}</div>
      <IconButton
        color="primary"
        onClick={handleClickOpen}
        className={classBtnEdit}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton color="primary" onClick={deleteMessageById}>
        <DeleteIcon fontSize="small" />
      </IconButton>

      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Редактирование сообщения</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="newMessage"
            label="Введите новое сообщение.."
            fullWidth
            variant="standard"
            onChange={(e) => {
              setNewMessage(e.target.value);
            }}
            value={newMessage}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button
            onClick={(e) => {
              editMessageById(newMessage);
              handleClose();
            }}
          >
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
