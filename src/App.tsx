import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { demoSDK, redux } from "ui-cool-app-shared";
import { DemoSlice } from "ui-cool-app-shared/dist/redux/reducers/demoSlice";
import { OrganizationTheme } from "ui-web-components";
import React from "react";

function App() {
    const demoSlice = redux.useAppSelector((state) => state.demo);
    const dispatch = redux.useAppDispatch();
    const [wait, setWait] = React.useState(false);

    const demoSdkCall = async () => {
        setWait(true);
        const apiSDK = new demoSDK.ApiSdk({
            requestRootUrl: "http://localhost:5000/api/v1",
        });
        const res = await apiSDK.requests.post_exampleUserLogin({
            username: "test",
            password: "test",
        });
        console.log(res);
        setWait(false);
    };

    return (
        <>
            <Typography variant="h2">ui-cool-app-web</Typography>

            <Typography sx={{ fontWeight: 800 }}>
                Digesting `ui-web-components` theme:
            </Typography>

            <ThemeProvider theme={OrganizationTheme}>
                <Button sx={{ mt: 2 }} variant="contained" color="primary">
                    Externally Themed Primary Button
                </Button>
                <Button
                    sx={{ mt: 2, display: "block" }}
                    variant="contained"
                    color="secondary"
                >
                    Externally Themed Secondary Button
                </Button>
            </ThemeProvider>

            <Typography sx={{ fontWeight: 800, mt: 2 }}>
                Digesting `ui-cool-app-shared` redux:
            </Typography>

            {Object.keys(demoSlice).map((string) => {
                const k = string as keyof DemoSlice;
                return (
                    <Box sx={{ m: 2 }}>
                        {string}: {String(demoSlice[k])}
                    </Box>
                );
            })}

            <Button
                variant="outlined"
                onClick={() => dispatch(redux.demoActions.toggleTestBool())}
            >
                Toggle The Bool
            </Button>

            <Button
                sx={{ display: "block", mt: 2 }}
                variant="contained"
                onClick={demoSdkCall}
                disabled={wait}
            >
                {wait ? "..." : "Call w/ Demo SDK"}
            </Button>
        </>
    );
}

export default App;
