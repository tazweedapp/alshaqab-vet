"use client";

import { useState } from "react";
import { Form } from "react-final-form";
import bg from "@/assets/svgs/background.svg";
import logo from "@/assets/svgs/logo.svg";
import FormInput from "@/shared/components/FormInput";
import { Button, CircularProgress, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    router.push(`/${values.sin}`);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      sx={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <Grid
        item
        bgcolor="white"
        width="30rem"
        alignItems="center"
        justifyContent="center"
        p={[3, 5]}
        m={3}
      >
        <Stack alignItems="center">
          <Image src={logo} alt="company-logo" />
        </Stack>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Stack mt={5}>
                <FormInput
                  name="sin"
                  required
                  placeholder="Enter your Lab ID"
                  label="Enter your Lab ID"
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  color={loading ? "secondary" : "primary"}
                  startIcon={
                    loading && <CircularProgress color="inherit" size={24} />
                  }
                >
                  {loading ? "Verifying..." : "Verify Document"}
                </Button>
              </Stack>
            </form>
          )}
        />
      </Grid>
    </Grid>
  );
}
