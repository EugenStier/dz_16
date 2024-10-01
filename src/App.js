import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
function App() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* Верхняя панель */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Material UI App
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>
            Open Dialog
          </Button>
        </Toolbar>
      </AppBar>

      {/* Основная часть */}
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My MUI App!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Open Dialog
        </Button>
      </Container>

      {/* Диалоговое окно */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a simple dialog box created with Material UI.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
