import { Button, ThemeProvider, Typography } from "@mui/material";
import { OrganizationTheme } from "ui-web-components";

function App() {
    return (
        <>
            <Typography variant="h2">ui-cool-app-web</Typography>
            <Typography>Digesting `ui-web-components` theme:</Typography>

            <ThemeProvider theme={OrganizationTheme}>
                <Button sx={{ mt: 2 }} variant="contained" color="primary">
                    Externally Themed Primary Button
                </Button>
                <Button sx={{ mt: 2, display: "block" }} variant="contained" color="secondary">
                    Externally Themed Secondary Button
                </Button>
            </ThemeProvider>
        </>
    );
}

export default App;
