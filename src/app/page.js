"use client";

import { useState } from "react";
import { Form } from "react-final-form";
import { toast } from "react-toastify";
import bg from "@/assets/svgs/background.svg";
import logo from "@/assets/svgs/logo.svg";
import FormInput from "@/shared/components/FormInput";
import { Button, CircularProgress, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fileData } from "./[sin-number]/fileData";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const file = await fileData.find(
        (file) => file.sin.toString() === values.sin
      );
      if (file) {
        router.push(`/${values.sin}`);
      } else {
        toast.error("Document not found.");
        setLoading(false);
      }
    } catch (error) {
      toast.error("An error occurred while verifying the document.");
    }
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
                  placeholder="Enter your SIN Number"
                  label="Enter your SIN Number"
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
