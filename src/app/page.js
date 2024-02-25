"use client";

import { Form } from "react-final-form";
import FormInput from "@/shared/components/FormInput";
import { Button, Grid, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onSubmit = (values) => {
    router.push(`/${values.sin}`);
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", width: "100%" }}
      >
        <Grid item display="flex">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Stack direction={["column", "row"]} gap={1}>
                  <Stack width="20rem">
                    <FormInput
                      name="sin"
                      required
                      placeholder="Enter your SIN Number"
                    />
                  </Stack>

                  <Button size="large" type="submit" variant="contained">
                    Verify Document
                  </Button>
                </Stack>
              </form>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
}
